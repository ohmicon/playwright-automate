import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/common/login-page";
import dataSetting from "../../data/common/TestSetting.json";
import { fullScreenMode } from "../../src/pages/common/fullScreenMode";
import ModelMapModeltype from "../../data/generalSettings/setupModelMapModeltype";
import { config } from "dotenv";
import { LoginSetting } from "../../data/common/TestSetting";
config();
const { COMPANY, SITE } = process.env;
const data = dataSetting.Login;

test.describe("Setup Project", () => {
  test("Test Setup Project", async ({ page }) => {
    // test.setTimeout(6000);
    //fullScreenMode(page)

    await page.pause();
    const loginDetails = LoginSetting(SITE || "");
    const { site, username, password } = loginDetails;
    const loginPage = new LoginPage(page);

    await loginPage.goto(site);
    await loginPage.login(username, password, Number(COMPANY));

    await page.locator(`[class="panel-title"]`).nth(0).click();
    await expect(page).not.toHaveURL(data.site + "panel/office");
    await page.waitForLoadState();
    await page.locator("#btn_mg").click({ force: true });
    await page.waitForLoadState();

    await page
      .getByRole("link", { name: " Setup Model", exact: true })
      .click();
    await page.locator('input[type="search"]').first().click();
    await page
      .locator('input[type="search"]')
      .first()
      .fill(ModelMapModeltype.ProjectCode);
    await page.getByRole("searchbox", { name: "Filter: " }).press("Enter");
    await page.getByRole("link", { name: " Select" }).click();
    await page.getByRole("button", { name: " New" }).click();
    await page.locator("#model_code").click();
    await page.locator("#model_code").fill(ModelMapModeltype.ModelCode);
    await page.locator("#model_name").click();
    await page.locator("#model_name").fill(ModelMapModeltype.ModelName);
    await page.locator("#modelname_eng").click();
    await page.locator("#modelname_eng").fill(ModelMapModeltype.ModelName);
    await page
      .locator("#m_type_code")
      .selectOption(ModelMapModeltype.ModelType);
    await page.locator("#model_area").click();
    await page.locator("#model_area").fill(ModelMapModeltype.ModelArea);
    await page.locator("#parking_amount").click();
    await page.locator("#parking_amount").fill(ModelMapModeltype.ParkingAmount);
    await page.locator("#status_Y").check();
    await page.locator("#save_t").click({ force: true });

    const res = await page
      .locator("body > div.sweet-alert.showSweetAlert.visible > h2")
      .textContent();
    console.log(res);
    if (res === "Save Completed!! ") {
      await page
        .locator(
          "body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button"
        )
        .click();
    }
  });
});
