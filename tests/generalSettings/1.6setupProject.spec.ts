import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/common/login-page";
import dataSetting from "../../data/common/TestSetting.json";
import { fullScreenMode } from "../../src/pages/common/fullScreenMode";
import SetupProjects, {
  Consultants,
  Admin,
} from "../../data/generalSettings/setupProject";
import { LoginSetting } from "../../data/common/TestSetting";
import { config } from "dotenv";
const {COMPANY,SITE} = process.env;
config();
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
    // const setupProject = SetupProjects[0];
    for (const setupProject of SetupProjects) {
      await page
        .getByRole("link", { name: "Setup Project & Department" })
        .click({ force: true });

      await page.click(`[type="button"]`);

      await page.getByLabel("Project").check();
      await page.getByPlaceholder("Code").click({ force: true });
      await page.getByPlaceholder("Code").fill(setupProject.Code);
      await page.locator("#startproject").fill(setupProject.StartDate);
      await page
        .getByPlaceholder("Name", { exact: true })
        .click({ force: true });
      await page
        .getByPlaceholder("Name", { exact: true })
        .fill(setupProject.Name);
      await page.locator("#endtproject").fill(setupProject.EstimateCloseDate);
      await page.getByPlaceholder("Name Eng").click({ force: true });
      await page.getByPlaceholder("Name Eng").fill(setupProject.NameEng);
      await page.getByPlaceholder("Short Name").click({ force: true });
      await page.getByPlaceholder("Short Name").fill(setupProject.ShortName);

      if (setupProject.ControlBOQ === "No")
        await page.getByLabel("No", { exact: true }).check({ force: true });
      else await page.getByLabel("Yes", { exact: true }).check({ force: true });

      if (setupProject.Status === "Active")
        await page.getByLabel("Active", { exact: true }).check({ force: true });
      else
        await page
          .getByLabel("Inactive", { exact: true })
          .check({ force: true });

      await page.getByLabel("Not Control").check({ force: true });
      if (setupProject.LockProjectDate === "true")
        await page.locator("#lock_pro").check({ force: true });
      await page.getByPlaceholder("กรอกระยะเวลาสัญญา ").click();
      await page
        .getByPlaceholder("กรอกระยะเวลาสัญญา ")
        .fill(setupProject.InsuranceContractYear);
      await page.locator("#pjtype").selectOption(setupProject.ProjectType);
      await page.locator("#projectdetail").click({ force: true });
      await page.locator("#projectdetail").fill(setupProject.JobsDetail);
      await page.locator("#ProjectTel").click({ force: true });
      await page.locator("#ProjectTel").fill(setupProject.Tel);
      await page.locator("#ProjectFax").click({ force: true });
      await page.locator("#ProjectFax").fill(setupProject.Fax);
      await page.locator("#ProjectEmail").click({ force: true });
      await page.locator("#ProjectEmail").fill(setupProject?.EMail);
      await page.locator("#ProjectWebsite").click({ force: true });
      await page.locator("#ProjectWebsite").fill(setupProject.Websit);

      for (const admin of Admin) {
        await page.getByRole("link", { name: "Admin" }).click();
        await page.getByRole("button", { name: " เพิ่มผู้ดูแล" }).click();
        await page.locator('input[name="adminname2\\[\\]"]').click();
        await page.locator('input[name="adminname2\\[\\]"]').fill(admin.Name);
        await page.locator('input[name="adminposi2\\[\\]"]').click();
        await page
          .locator('input[name="adminposi2\\[\\]"]')
          .fill(admin.Position);
        await page.locator('input[name="admintel2\\[\\]"]').click();
        await page
          .locator('input[name="admintel2\\[\\]"]')
          .fill(admin.Telephone);
        await page.locator('input[name="adminemail2\\[\\]"]').click();
        await page.locator('input[name="adminemail2\\[\\]"]').fill(admin.Email);
        await page.locator('input[name="adminemail2\\[\\]"]').press("Tab");
        await page.getByRole("link", { name: "Consultants" }).click();
      }

      for (const cons of Consultants) {
        await page
          .getByRole("button", { name: " เพิ่มผู้ติดต่อโครงการ" })
          .click();
        await page.locator('input[name="contactname\\[\\]"]').click();
        await page.locator('input[name="contactname\\[\\]"]').fill(cons.Name);
        await page.locator('input[name="contactposi\\[\\]"]').click();
        await page
          .locator('input[name="contactposi\\[\\]"]')
          .fill(cons.Position);
        await page.locator('input[name="contacttel\\[\\]"]').click();
        await page
          .locator('input[name="contacttel\\[\\]"]')
          .fill(cons.Telephone);
        await page.locator('input[name="contactemail\\[\\]"]').click();
        await page.locator('input[name="contactemail\\[\\]"]').fill(cons.Email);
      }
      await page.getByRole("button", { name: " Save" }).click();
      await page.getByRole("heading", { name: "Update Complete" }).click();
      await page.getByRole("button", { name: "OK" }).click();
    }
  });
});
