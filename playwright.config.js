const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: false,          // agar browser terlihat saat test jalan
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  testDir: './',         // folder tempat semua test
});