import { test } from "@playwright/test";
import dataSetting from "../../data/common/TestSetting.json";
import { LoginPage } from "../../src/pages/common/login-page";
import { setupPositionData } from "../../data/generalSettings/setUpPosition";
import { getSharedProjectType } from "../../src/utils/store/projectType.store";
import { LoginSetting } from "../../data/common/TestSetting";
import { config } from 'dotenv';

config();

const { COMPANY, SITE } = process.env;

interface Data {
  modelTypeCode: string;
  modelTypeName: string;
  modelTypeNameEN: string;
  modelTypeShortName: string;
  projectType: string;
}

const data: Data = setupPositionData as Data;

test.describe("Setup Position", () => {
  test("Setup Position", async ({ page }) => {

    const loginDetails = LoginSetting(SITE || "");
    const { site, username, password } = loginDetails;
    const loginPage = new LoginPage(page);

    await loginPage.goto(site);
    await loginPage.login(username, password, Number(COMPANY));
    await page.waitForLoadState();
    await page.getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" }).click({ force: true });
    await page.locator('a').filter({ hasText: 'Genaral Settings' }).click();
    await page.getByRole('link', { name: ' Setup Model Type' }).click();
    await page.getByRole('button', { name: ' New' }).click();
    await page.locator('#model_type_code').click();
    await page.locator('#model_type_code').fill(data.modelTypeCode);
    await page.locator('#model_type_name').click();
    await page.locator('#model_type_name').fill(data.modelTypeName);
    await page.locator('#model_type_name_eng').click();
    await page.locator('#model_type_name_eng').fill(data.modelTypeNameEN);
    await page.locator('#short_name').click();
    await page.locator('#short_name').fill(data.modelTypeShortName);
    await page.locator('#project_type').selectOption(data.projectType);
    await page.locator('#save_t').click();
    await page.getByRole('button', { name: 'OK' }).click();
  });
});
