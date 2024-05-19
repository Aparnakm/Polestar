import {test, expect} from '@playwright/test';

test('Polestar', async({page})=>{
await page.goto('https://www.polestar.com/global/developer/get-started/');
await page.getByRole('button', {name:'Accept all'}).click();

const pageURL = page.url();
console.log('Page url is: ',pageURL);
await expect(page).toHaveURL('https://www.polestar.com/global/developer/get-started/');

const pageTitle = page.title();
await expect(page).toHaveTitle('Pure progressive performance | Polestar');

await page.getByRole('link', {name:'Return Home'}).click();

const learnMore = await page.locator("//span[@id='CI2U8EIPRDmNVTVRAr4P5Q']");
await expect(learnMore).toContainText("Learn more");
await learnMore.click();

await page.click("button[title='Menu']");
await page.getByRole('menuitem', {name: 'Polestar 2'}).isVisible();
await page.close();

});