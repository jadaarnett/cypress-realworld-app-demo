import { defineConfig } from "cypress";

// Public Kitchen Sink demo. Kept separate from cypress.config.ts so it does
// not load the Real World App support file, baseUrl, or spec pattern.
export default defineConfig({
  retries: {
    // One initial attempt plus 3 retries (4 attempts total) before the run fails.
    runMode: 3,
    openMode: 3,
  },
  e2e: {
    baseUrl: "https://example.cypress.io",
    specPattern: "cypress/demo/**/*.spec.ts",
    supportFile: false,
  },
});
