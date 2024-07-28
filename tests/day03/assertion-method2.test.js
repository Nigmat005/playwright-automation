import { test, expect } from "@playwright/test";

test.describe("Assertion Methods Part2", async () => {
  let elements;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    elements = await page.locator("//ul[@class='list-group']/li/a");
  });

  test("Verify that there are 50 elements under the url tag", async ({page}) => {
    await expect(elements).toHaveCount(50);
  });

  test("Verify all 50 elements under the url tag are visible", async ({
    page,
  }) => {
    for(let i=0;i<50;i++){
        console.log(elements.nth(i));
        await expect(elements.nth(i)).toBeVisible();

        const eachElement=await elements.nth(i)
        console.log(await eachElement.innerText());
        console.log(await elements.nth(i).textContent());
      }

  });

  test("Verify all 50 elements under the url tag are enabled", async ({
    page,
  }) => {
    const elemetArry = [];
    for (let i = 0; i < await elements.count(); i++) {
      elemetArry.push(await elements.nth(i));
    }

    console.log( elemetArry.forEach((each)=>{
      each.getAttribute("href")
    }));

    // for (let eachElement of elemetArry) {
    //   await expect(eachElement).toBeEnabled();
    //   console.log(await eachElement.getAttribute("href"));
    // }
  });
});
