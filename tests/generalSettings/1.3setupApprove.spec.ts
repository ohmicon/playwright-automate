import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/common/login-page.js";
import dataSetting from "../../data/common/TestSetting.json";
import SetupApprove from "../../data/generalSettings/setupApprove.js";
import {setupUserApprove,setupUserApproveGroup,chooseMenu} from '../../src/pages/setapprove-page.js';
import { config } from 'dotenv';
import { LoginSetting } from "../../data/common/TestSetting.js";
config();
const {COMPANY,SITE} = process.env;
const data = dataSetting.Login;
const setGroupData = SetupApprove[0]

test.describe("Setup Approve", () => {
  let page;
  let currentUrl = "";
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(data.site);
    await page.waitForSelector("#inputPassword");
    currentUrl=page.url();
  });

  test("Test Setup Approve BOM", async () => {
    // //test.setTimeout(6000);
    const loginDetails = LoginSetting(SITE || "");
    const { site, username, password } = loginDetails;
    const loginPage = new LoginPage(page);
  
    await loginPage.goto(site);
    await loginPage.login(username, password, Number(COMPANY));
    await page.waitForTimeout(3000);
    await page.locator(`[class="panel-title"]`).nth(0).click()
    await expect(page).not.toHaveURL(data.site+"panel/office");
    await page.waitForLoadState();
    await page.locator("#btn_mg").click({ force: true });
    await page.waitForLoadState();
    await chooseMenu(page);
    await page.locator(`[onclick="choose('10')"]`).click({ force: true });
    await setupUserApproveGroup(page);
    await page.waitForSelector(`[onclick="choose('10')"]`)
    await page.locator(`[onclick="choose('10')"]`).click();
    await setupUserApprove(page);
    currentUrl =  page.url();
  });

  test("Test Setup Approve BOQ", async () => {
    //test.setTimeout(6000);
    await page.goto(currentUrl);
    await chooseMenu(page);
    await page.waitForTimeout(3000);
    //await page.waitForSelector(`[onclick="choose('1')"]`)
    await page.click(`[onclick="choose('1')"]`)
    await setupUserApproveGroup(page);
    await page.waitForTimeout(3000);
    await page.click(`[onclick="choose('1')"]`)
    setupUserApprove(page);
   currentUrl=page.url();
  });
  
  test("Test Setup Approve Cost Control", async () => {
    //test.setTimeout(6000);
      await page.goto(currentUrl);
      await chooseMenu(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('2')"]`).click();
      await setupUserApproveGroup(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('2')"]`).click();
      //await page.locator('a').filter({ hasText: 'Cost Control (2)' }).click({ force: true });  
      setupUserApprove(page);

    /*
      await page.getByLabel('Filter:').click({ force: true });
      await page.getByLabel('Filter:').fill(setGroupData.groupName);
      await page.getByLabel('Filter:').press('Enter');
      await page.getByRole('gridcell', { name: '      ' }).locator('a').first().click({ force: true });

      //Add row
      await page.locator(`[id="addjobtitle"]`).click({ force: true });
      await page.locator('//div[@class="input-group-btn"]').first().click({ force: true });
      await page.waitForLoadState();      
      await page.getByLabel('Search:').click({ force: true });
      await page.getByLabel('Search:').fill(setGroupData.user);
      // await page.getByLabel('Search:').press('Tab');
      // await page.getByLabel('No.: activate to sort column').press('Tab');
      // await page.getByLabel('Project/Department: activate').press('Tab');
      // await page.getByRole('row', { name: 'No.: activate to sort column' }).getByLabel('Active: activate to sort').press('Tab');
      await page.getByRole('button', { name: 'SELECT' }).click({ force: true });
      
      await page.getByText('Save', { exact: true }).click();
     await page.getByRole('heading', { name: 'Save Completed !' }).click({ force: true });
     await page.getByRole('button', { name: 'OK' }).click({ force: true });
     */
  });


  test("Test Setup Approve Adjust Budget", async () => {
    //test.setTimeout(6000);
    await page.goto(currentUrl);
      await chooseMenu(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('22')"]`).click();
      await setupUserApproveGroup(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('22')"]`).click();
      //await page.locator('a').filter({ hasText: 'Cost Control (2)' }).click({ force: true });  
      setupUserApprove(page);
  
  });

  test("Test Setup Approve Purchase Requisition", async () => {
    //test.setTimeout(6000);
    await page.goto(currentUrl);
    await chooseMenu(page);
    await page.waitForTimeout(3000)
    await page.locator(`a[onclick="choose('3')"]`).click();
    await setupUserApproveGroup(page);
    await page.waitForTimeout(3000)
    await page.locator(`a[onclick="choose('3')"]`).click();
    //await page.locator('a').filter({ hasText: 'Cost Control (2)' }).click({ force: true });  
    setupUserApprove(page);  
  });


  test("Test Setup Approve Purchase Requisition Decrement", async () => {
    //test.setTimeout(6000);
      await page.goto(currentUrl);
      await chooseMenu(page);
      // await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('4')"]`).click();
      await setupUserApproveGroup(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('4')"]`).click();
      //await page.locator('a').filter({ hasText: 'Cost Control (2)' }).click({ force: true });  
      setupUserApprove(page);
  });

  test("Test Setup Approve Purchase Order", async () => {
    //test.setTimeout(6000);
    await page.goto(currentUrl);
      await chooseMenu(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('5')"]`).click();
      await setupUserApproveGroup(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('5')"]`).click();
      //await page.locator('a').filter({ hasText: 'Cost Control (2)' }).click({ force: true });  
      setupUserApprove(page);
  });

  test("Test Setup Purchase Order Advance Deposit", async () => {
    //test.setTimeout(6000);
      await page.goto(currentUrl);
      await chooseMenu(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('6')"]`).click();
      await setupUserApproveGroup(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('6')"]`).click();
      setupUserApprove(page);
  });

  test("Test Setup Purchase Order Decrement", async () => {
    //test.setTimeout(6000);
      await page.goto(currentUrl);
      await chooseMenu(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('7')"]`).click();
      await setupUserApproveGroup(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('7')"]`).click();
      setupUserApprove(page);
  });

  test("Test Setup Work Order", async () => {
    //test.setTimeout(6000);
    await page.goto(currentUrl);
      await chooseMenu(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('8')"]`).click();
      await setupUserApproveGroup(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('8')"]`).click();
      setupUserApprove(page);
  });

  test("Work Order Decrement", async () => {
    //test.setTimeout(6000);
    await page.goto(currentUrl);
      await chooseMenu(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('23')"]`).click();
      await setupUserApproveGroup(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('23')"]`).click();
      setupUserApprove(page);
  });
  test("Progress Subcontrator", async () => {
    //test.setTimeout(6000);
    await page.goto(currentUrl);
      await chooseMenu(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('9')"]`).click();
      await setupUserApproveGroup(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('9')"]`).click();
      setupUserApprove(page);
  });
  test("Test Setup Contract Close", async () => {
    //test.setTimeout(6000);
    await page.goto(currentUrl);
      await chooseMenu(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('11')"]`).click();
      await setupUserApproveGroup(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('11')"]`).click();
      setupUserApprove(page);
  });
  test("Test Setup Petty Cash", async () => {
    //test.setTimeout(6000);
    await page.goto(currentUrl);
      await chooseMenu(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('13')"]`).click();
      await setupUserApproveGroup(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('13')"]`).click();
      setupUserApprove(page);
  });
  test("Test Setup Purchase Order Receive", async () => {
    //test.setTimeout(6000);
    await page.goto(currentUrl);
      await chooseMenu(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('15')"]`).click();
      await setupUserApproveGroup(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('15')"]`).click();
      setupUserApprove(page);
  });
  test("Test SetupDebit Note / Credit Note", async () => {
    //test.setTimeout(6000);
    await page.goto(currentUrl);
      await chooseMenu(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('18')"]`).click();
      await setupUserApproveGroup(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('18')"]`).click();
      setupUserApprove(page);
  });
  test("Test Setup Issue", async () => {
    //test.setTimeout(6000);
    await page.goto(currentUrl);
      await chooseMenu(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('20')"]`).click();
      await setupUserApproveGroup(page);
      await page.waitForTimeout(3000)
      await page.locator(`a[onclick="choose('20')"]`).click();
      setupUserApprove(page);
  });

});




     