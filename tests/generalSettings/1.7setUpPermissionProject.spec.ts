import { expect, test } from "@playwright/test";
import dataSetting from "../../data/common/TestSetting.json"
import { LoginPage } from "../../src/pages/common/login-page.js"
import { setupPermissionPositionData } from "../../data/generalSettings/setUpPermissionProject.js";
import { config } from 'dotenv';
config();
const {COMPANY} = process.env;

const dataLogin = dataSetting.Login;
const data = setupPermissionPositionData;

test.describe("Setup Position", async () => {
    test("Setup Position", async ({ page }) => {
        await page.goto(dataLogin.site);
        const loginPage = new LoginPage(page);
        await loginPage.goto(dataLogin.site);
        await loginPage.login(dataLogin.username, dataLogin.password, Number(COMPANY));
       await page.locator(`[class="panel-title"]`).nth(0).click()
        await page.waitForLoadState();
        await page.locator('a').filter({ hasText: 'Genaral Settings' }).click();
        await page.getByRole('link', { name: ' Setup Permission' }).click();
        await page.getByRole('link', { name: ' Permission by User' }).click();

        const textFilter = page.getByPlaceholder('Type to filter...')
        await textFilter.click();
        await textFilter.fill(dataLogin.username);
        await expect(textFilter).toHaveValue(dataLogin.username);

        const page1Promise = page.waitForEvent('popup');
        await page.getByTitle('Company').click();
        const page1 = await page1Promise;
        // await page1.getByLabel('11 ****_test_server').check();
        await page1.getByRole('button', { name: 'Project' }).first().click();
        await page1.getByLabel('CHECK ALL PROJECT').check();
        // for (const projectName of data.ProjectListName) {
        //     await page1.getByLabel(projectName).click();
        // }

        await page1.getByRole('button', { name: 'Department' }).first().click();
        await page1.getByLabel('CHECK ALL DEPART').check();
        // for (const companyName of data.DepartmentListName) {
        //     await page1.getByLabel(companyName).click();
        // }
    })
})