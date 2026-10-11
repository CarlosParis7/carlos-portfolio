import { defineConfig } from "@playwright/test";

const PORT = 3100;

// Runs against the production build (`npm run build` first), so the test sees
// the same static pages, proxy redirects and CSP that ship to Vercel.
export default defineConfig({
  testDir: "e2e",
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: `http://localhost:${PORT}`,
    // Locally reuse the installed Edge (no browser download); CI installs Chromium.
    channel: process.env.CI ? undefined : "msedge",
  },
  webServer: {
    command: `npm run start -- -p ${PORT}`,
    port: PORT,
    reuseExistingServer: !process.env.CI,
  },
});
