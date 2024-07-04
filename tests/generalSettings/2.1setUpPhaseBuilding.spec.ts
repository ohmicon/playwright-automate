import { expect, test } from "@playwright/test";
import dataSetting from "../../data/common/TestSetting.json"
import { LoginPage } from "../../src/pages/common/login-page.js"
import { setUpPhaseBuildingData } from "../../data/generalSettings/setUpPhaseBuilding.js";
import { config } from 'dotenv';
import { LoginSetting } from "../../data/common/TestSetting.js";
config();
const {COMPANY,SITE} = process.env;
const dataLogin = dataSetting.Login;
const data = setUpPhaseBuildingData;

test.describe("Genaral Settings", async () => {
    test("Setup Phase Building", async ({ page }) => {
      const loginDetails = LoginSetting(SITE || "");
      const { site, username, password } = loginDetails;
      const loginPage = new LoginPage(page);
  
      await loginPage.goto(site);
      await loginPage.login(username, password, Number(COMPANY));
        await page
          .getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" })
          .click();
        await page.waitForLoadState();
        await page.locator('a').filter({ hasText: 'Genaral Settings' }).click();
        await page.getByRole('link', { name: ' Setup Phase / Building' }).click();
        await page.getByPlaceholder('Type to filter...').click();
        await page.getByPlaceholder('Type to filter...').fill(data.name);
        await page.getByRole('link', { name: ' Select' }).click();
        await page.getByRole('button', { name: ' Add' }).click();
        await page.locator('#phase_name').click();
        await page.locator('#phase_name').fill(data.phaseCode);
        await page.locator('#phase_remarks').fill(data.phaseName);
        await page.locator('#PhaseNameEng').fill(data.phaseNameEN);
        await page.getByRole('button', { name: ' Save' }).click();
        await page.getByRole('button', { name: 'OK' }).click();
    })
})