import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/common/login-page";
import dataSetting from "../../data/common/TestSetting.json";
import { fullScreenMode } from "../../src/pages/common/fullScreenMode";
import setupPermissionReport from "../../data/generalSettings/setupPermissionReport";
import { config } from 'dotenv';
config();
const {COMPANY} = process.env;


const data = dataSetting.Login;
const dataLogin = dataSetting.Login;
test("Setup Permission Report", async ({ page }) => {
  test.setTimeout(600000);
  await page.goto(dataLogin.site);
  const loginPage = new LoginPage(page);
  await loginPage.goto(dataLogin.site);
  await loginPage.login(dataLogin.username, dataLogin.password, Number(COMPANY)); 
  await page.locator(`[class="panel-title"]`).nth(0).click();
  await page.locator("a").filter({ hasText: "Genaral Settings" }).click();
  // await page.getByRole("link", { name: " Setup Permission" }).click();
  await page.getByRole("link", { name: "Setup Permission" }).click();
  await page.waitForLoadState();
  await page.locator("i.icon-magazine").click();
  //await page.getByRole("link", { name: " Report" }).click();
  await page.getByRole("link", { name: "Role Member Permission" }).click();
  await page.locator("a").filter({ hasText: "Genaral Settings" }).click();
  await page.getByRole("link", { name: " Setup Permission" }).click();

  await page.getByRole("link", { name: " Permission by User" }).click();
  await page.click(`[placeholder="Type to filter..."]`);
  await page.getByPlaceholder("Type to filter...").fill(data.username);
  await page
    .getByRole("row", { name: data.username })
    .locator("a")
    .nth(3)
    .click();
  await page.locator(`[class="btn btn-success"]`).nth(0).click();
  await page.getByText("Save").click();
  await page.getByRole("button", { name: "OK" }).click();
  await page.getByPlaceholder("Type to filter...").click();
  await page.getByPlaceholder("Type to filter...").fill(data.username);
  await page.click(`(//i[@class='icon-user-check'])[1]`);
  await page.locator(`[type="checkbox"][data-readonly]`).nth(0).check();
  await page.getByRole("button", { name: "X" }).click();
});
