const {test, expect} =require('@playwright/test');
test('check method test',async({page})=>{
    await page.goto('https://practice.cydeo.com');
    await page.locator("//li[@class='list-group-item']/a[text()='Checkboxes']").click();

    // uncheck checkbox1 and check checkbox2
    const checkBox1= await page.locator("input[id='box1']")
    await checkBox1.check();
    await expect(checkBox1).toBeChecked();
    const checkBox2= await page.locator("#box2");
    await checkBox2.uncheck();
    await expect(checkBox2).not.toBeChecked();
})