import { test, expect } from '@playwright/test';

test.describe('Dashboard Navigation', () => {
  test('should navigate between main pages', async ({ page }) => {
    // We assume the app is running on localhost:3000
    // Uncomment when ready to run E2E
    /*
    await page.goto('http://localhost:3000/');
    
    // Expect home page title
    await expect(page.locator('h1').first()).toContainText('Your Feed');
    
    // Navigate to Trending
    await page.click('text=Trending');
    await expect(page.locator('h2').first()).toContainText('Trending Now');
    
    // Navigate to Settings
    await page.click('text=Settings');
    await expect(page.locator('h2').first()).toContainText('Settings');
    */
    test.info().annotations.push({ type: 'TODO', description: 'Enable when local server is ready' });
  });
});
