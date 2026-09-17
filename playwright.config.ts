import { defineConfig, devices } from '@playwright/test';

const edgePath = process.platform === 'win32' ? 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe' : undefined;
const localBrowser = edgePath ? { executablePath: edgePath } : {};

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: 'list',
  use: { baseURL: 'http://localhost:3000', trace: 'retain-on-failure' },
  webServer: { command: 'pnpm dev', url: 'http://localhost:3000', reuseExistingServer: true, timeout: 120_000 },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1600, height: 1000 }, launchOptions: localBrowser } },
    { name: 'mobile', use: { ...devices['Desktop Chrome'], viewport: { width: 390, height: 844 }, isMobile: true, launchOptions: localBrowser } },
  ],
});
