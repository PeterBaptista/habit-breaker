// src/electron.d.ts

// This tells TypeScript that the global 'window' object
// has a property called 'electronAPI'
declare global {
  interface Window {
    electronAPI: {
      /** Notifies the main process that onboarding is complete. */
      setOnboardingComplete: () => void;
      // Add other preload functions here as you create them
      // e.g., onMainProcessMessage: (callback: (message: string) => void) => void;
    };
  }
}

// Adding 'export {}' makes this a module, which helps
// ensure the global declaration is picked up.
export {};
