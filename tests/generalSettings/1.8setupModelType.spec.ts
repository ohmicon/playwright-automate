import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/common/login-page";
import dataSetting from "../../data/common/TestSetting.json";
import { fullScreenMode } from "../../src/pages/common/fullScreenMode";
import setupPermissionReport from "../../data/generalSettings/setupPermissionReport";
import { setupProjectType } from "../../data/generalSettings/setupProjectType";
import { setupModelType } from "../../data/generalSettings/setupModelType";
import { config } from 'dotenv';
import { LoginSetting } from "../../data/common/TestSetting";
config();
const {COMPANY,SITE} = process.env;
const data = dataSetting.Login;

test("Setup Model Type", async ({ page }) => {
  //fullScreenMode(page);
 // test.setTimeout(6000);
 const loginDetails = LoginSetting(SITE || "");
 const { site, username, password } = loginDetails;
 const loginPage = new LoginPage(page);

 await loginPage.goto(site);
 await loginPage.login(username, password, Number(COMPANY));
  // await page.goto(data.site + "/auth/login/" + data.username + "/PPA");
  await page.locator(`[class="panel-title"]`).nth(0).click()
  await page.locator("a").filter({ hasText: "Genaral Settings" }).click();
  await page.getByRole("link", { name: " Setup Model Type" }).click();
  await page.getByRole("button", { name: " New" }).click();
  await page.locator("#model_type_code").click();
  await page.locator("#model_type_code").fill(setupModelType.modelTypeCode);
  await page.locator("#model_type_name").fill(setupModelType.modelTypeName);
  await page.locator("#model_type_name_eng").click();
  await page
    .locator("#model_type_name_eng")
    .fill(setupModelType.modelTypeNameEN);
  await page.locator("#short_name").click();
  await page.locator("#short_name").fill(setupModelType.modelTypeShortName);
  await page
    .locator(`[id="project_type"]`)
    .selectOption(setupModelType.ProjectType);
  await page.waitForTimeout(1500);
  await page.locator("#save_t").click();
  await page.getByRole("button", { name: "OK" }).click();
  // const idValue = await page
  //   .locator(`[type="checkbox"][data-readonly]`)
  //   .nth(39)
  //   .getAttribute("id");
  // // await page.locator("#ic_chk609").check();
  // // แสดงค่า id ที่ได้
  // console.log("id", idValue);
  // await page.locator(`#${idValue}`).check();
});
