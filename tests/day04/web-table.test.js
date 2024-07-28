import { test, expect} from "@playwright/test";

test.describe("Test Group", async() => {

  test.beforeEach("go to URL", async ({ page }) => {
    // go to https://practice.cydeo.com/web-tables
    await page.goto("https://practice.cydeo.com/web-tables");
  });

  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
  });
  test("Verify rows and columns in the web table", async ({ page }) => {
   const table=page.locator("//table[@id='ctl00_MainContent_orderGrid']");
   // locate all table rows from table
//    const rows= table.locator("//table[@id='ctl00_MainContent_orderGrid']//tr");
    const rows= table.locator("//tr")
    const columns=rows.locator("//th")
    console.log(await rows.count());
    expect(await rows.count()).toEqual(9);
    expect(await columns.count()).toEqual(13);


  });

test('test $$ and .all()',async({page})=>{
    const table=page.locator("//table[@id='ctl00_MainContent_orderGrid']");
    const rowNum= await table.locator("//tr").count();
    const rowLength=((await page.$$("//table[@id='ctl00_MainContent_orderGrid']//tr")).length)
    expect(rowNum).toEqual( rowLength);
    console.log(rowNum);
    console.log(rowLength);
})

  test("Read all data from the web table", async ({ page }) => {
    // Create a for loop to iterate each row Only
     const table=page.locator("//table[@id='ctl00_MainContent_orderGrid']");
     const rows= table.locator("//tr")
     const columns=rows.locator("//th")
     console.log(await rows.count());
    for(let i=2; i<=await rows.count(); i++){
      for(let j=2; j<await columns.count(); j++){
         const cellValue=table.locator(`//tr[${i}]//td[${j}]`);
        console.log(await cellValue.innerText());
      }

      console.log(`Retriving cell data from line: ${i}`);
    }
  });

  test("Empty Test 3", async ({ page }) => {
    // Add your test logic here
  });
});
