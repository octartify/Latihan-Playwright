const { test, expect } = require('@playwright/test');
//
test('isi form di demoqa', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  
  await page.fill('#userName', 'Octavia');
  await page.fill('#userEmail', 'test@gmail.com');
  await page.fill('#currentAddress', 'Yogya');
  await page.fill('#permanentAddress', 'Tangerang');
  await page.click('#submit');
  await page.screenshot({ path: 'hasil-demoqa-form.png' });
});

test('checklist checkbox di demoqa', async ({ page }) => {
  await page.goto('https://demoqa.com/checkbox');
  
  await page.click('button[Aria-label="Expand all"]');
  await page.screenshot({ path: 'expand-all.png' });
});

