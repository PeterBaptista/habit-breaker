import { app, BrowserWindow, ipcMain } from "electron"; // 1. Import ipcMain
import Store from "electron-store"; // 2. Import electron-store
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.mjs
// │
process.env.APP_ROOT = path.join(__dirname, "..");

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
export const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
export const MAIN_DIST = path.join(process.env.APP_ROOT, "dist-electron");
export const RENDERER_DIST = path.join(process.env.APP_ROOT, "dist");

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL
  ? path.join(process.env.APP_ROOT, "public")
  : RENDERER_DIST;

let win: BrowserWindow | null;

// Initialize the store
const store = new Store();

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    width: 1200,
    height: 1200,
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
      // Note: contextIsolation and sandbox are true by default and recommended.
    },
  });

  // Menu.setApplicationMenu(null);

  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  // --- START OF ONBOARDING LOGIC ---

  // 1. Check if the user has completed onboarding. Default to false.
  const hasOnboarded = store.get("hasOnboarded", false);

  if (VITE_DEV_SERVER_URL) {
    let url = VITE_DEV_SERVER_URL;
    // If not onboarded, append the onboarding hash route
    if (!hasOnboarded) {
      url += "#/onboarding";
    }
    win.loadURL(url);
  } else {
    // For production, use the 'hash' option in loadFile
    win.loadFile(path.join(RENDERER_DIST, "index.html"), {
      hash: hasOnboarded ? undefined : "onboarding", // This will append '#/onboarding'
    });
  }
  // --- END OF ONBOARDING LOGIC ---
}

// ... (app.on 'window-all-closed' and 'activate'...)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Listen for the "I'm done" signal from the renderer
ipcMain.on("onboarding-complete", () => {
  store.set("hasOnboarded", true);
});

app.whenReady().then(createWindow);
