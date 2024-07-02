import { test } from "@playwright/test";
import dataSetting from "../../data/common/TestSetting.json";
import { LoginPage } from "../../src/pages/common/login-page";
import { setupBusinessPartnerGroupData } from "../../data/generalSettings/setupUOM";
import { config } from 'dotenv';
config();
const {COMPANY} = process.env;
const dataLogin = dataSetting.Login;
const data = setupBusinessPartnerGroupData;

test.describe("Setup UOM", async () => {
  test("Setup UOM", async ({ page }) => {
    await page.goto(dataLogin.site);
    const loginPage = new LoginPage(page);
    await loginPage.goto(dataLogin.site);
    await loginPage.login(dataLogin.username, dataLogin.password, Number(COMPANY));
    await page.getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" }).click();
    await page.locator("a").filter({ hasText: "Inventory" }).first().click();
    await page.getByRole("link", { name: " Setup Units of Measure" }).click();
    await page.locator("#code").fill(data.code);
    await page.getByLabel("Status", { exact: true }).fill(data.uom);
    await page.locator("#status_Y").check();
    await page.locator("#save_new").click();
    await page.waitForLoadState();
  });
});
