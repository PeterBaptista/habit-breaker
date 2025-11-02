import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "./providers/theme-provider.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);

// Listen to messages from main process
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log("Message from main process:", message);
});

// Example of sending message to main process
window.ipcRenderer.send("renderer-message", "Hello from React!");
