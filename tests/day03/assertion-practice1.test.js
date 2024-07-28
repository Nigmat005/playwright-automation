import { test, expect } from "@playwright/test";

test.describe("Assertion in UI testing", async () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
  });

  test("Verify the page title is 'Practice'", async ({page}) => {
    const titleValue=await page.title();
    expect.soft(titleValue).toEqual('Practice');

    await expect(page).toHaveTitle('Practice');
  });

  test("Verify the text 'Automation' is included the header element", async ({page}) => {
      await  expect(page.locator('h1')).toContainText('Automation')

      const headerElement=await page.locator('h1');
      const headerString=await headerElement.textContent();
      const headerString2=await headerElement.innerText();

      expect(headerString).toContain('Automation');
      expect(headerString2).toContain('Automation');

  });

  test("Verify the element 'A/B Testing' is clickable", async ({page}) => {
    const abLink=page.locator("//a[text()='A/B Testing']")  
    await expect(abLink).toBeVisible();
    
    await expect(await page.locator("//a[contains(text(),'A/B Testing')]").isVisible()).toBeTruthy();
  });

  test("Verify the element 'Autocomplete' href is '/autocomplete' ", async ({page}) => {
   let autoComplete=await page.getByText('Autocomplete');
    // autoComplete=await page.locator("//a[contains(text(),'Autocomplete')]");
   await expect(autoComplete).toHaveAttribute("href","/autocomplete");
  });

});