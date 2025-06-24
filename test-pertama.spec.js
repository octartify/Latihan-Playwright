const { test, expect } = require('@playwright/test');
//
test('Fill form in Text-box menu', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.waitForSelector('#userName');

  await page.fill('#userName', 'Octavia');
  await page.fill('#userEmail', 'test@gmail.com');
  await page.fill('#currentAddress', 'Yogya');
  await page.fill('#permanentAddress', 'Tangerang');
  await page.click('#submit');
  await page.screenshot({ path: 'hasil-demoqa-form.png' });
});

test('Expand-Collapse button in Checkbox menu', async ({ page }) => {
  await page.goto('https://demoqa.com/checkbox');
  
  await page.click('button[Aria-label="Expand all"]');
  await page.screenshot({ path: 'expand-all.png' });
  await page.click('button[Aria-label="Collapse all"]');
  await page.screenshot({ path: 'collapse-all.png' });
  await page.locator('li:has(label[for="tree-node-home"]) >> button.rct-collapse').click();
});

test('Chevron function in Checkbox menu', async ({ page }) => {
   await page.goto('https://demoqa.com/checkbox');
   await page.waitForSelector('button[aria-label="Toggle"]');

   await page.locator('li:has(label[for="tree-node-home"]) >> button.rct-collapse').click();
 });