import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/common/login-page";
import dataSetting from "../../data/common/TestSetting.json";
import { setupProjectType } from "../../data/generalSettings/setupProjectType";
import { SetupDocumentNumbering } from "../../data/generalSettings/SetupDocumentNumbering";
const data = dataSetting.Login;
const dataLogin = dataSetting.Login;
test("Setup Document Numbering", async ({ page }) => {
  //fullScreenMode(page);
  await page.goto(dataLogin.site);
  const loginPage = new LoginPage(page);
  await loginPage.goto(dataLogin.site);
  await loginPage.login(dataLogin.username, dataLogin.password, 0);
  await page.waitForTimeout(3000);
  await page.getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" }).click();
  await page.locator("a").filter({ hasText: "Genaral Settings" }).click();
  await page.getByRole("link", { name: " Setup Document Numbering" }).click();
  await page.getByRole("link", { name: "Transaction" }).click();
  await page
    .getByRole("row", { name: "Subcontractor  OPEN" })
    .getByRole("link")
    .click();
  await page.getByRole("cell", { name: "Setup" }).first().click();
  await page.getByText("New Series").click();
  await page
    .getByRole("row", { name: "YYYY/MM Delete" })
    .locator('input[name="docment\\[\\]"]')
    .click();
  await page
    .getByRole("row", { name: "YYYY/MM Delete" })
    .locator('input[name="docment\\[\\]"]')
    .fill(SetupDocumentNumbering.name);

  await page
    .getByRole("row", { name: `${SetupDocumentNumbering.name} YYYY/MM Delete` })
    .locator('input[name="code\\[\\]"]')
    .fill(SetupDocumentNumbering.Prefix);
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="digits\\[\\]"]')
    .click();
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="digits\\[\\]"]')
    .fill(SetupDocumentNumbering.digits);
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="first\\[\\]"]')
    .click();
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="first\\[\\]"]')
    .fill("10");
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="last\\[\\]"]')
    .click();
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="last\\[\\]"]')
    .fill(SetupDocumentNumbering.lastNo);
  await page
    .locator(`[name="setup_date[]"]`)
    .last()
    .selectOption(SetupDocumentNumbering.startDate);
  console.log(
    "SetupDocumentNumbering.startDate.toDateString() :>> ",
    SetupDocumentNumbering.startDate
  );
  // await page.locator(`[name="s_date[]"]`).last().selectOption(SetupDocumentNumbering.format);
  // await page.getByText("Save").click();
  // await page.getByRole("button", { name: "OK" }).click();

  // await page.getByRole("link", { name: " Setup Document Numbering" }).click();
  // await page.getByRole("link", { name: " Setup Document Numbering" }).click();
  // await page.getByRole("link", { name: "Transaction" }).click();
  // await page
  //   .getByRole("row", { name: "Subcontractor  OPEN" })
  //   .getByRole("link")
  //   .click();
  // await page.getByRole("cell", { name: "Setup" }).first().click();
   await page.getByText("New Series").click();
  await page
    .getByRole("row", { name: "YYYY/MM Delete" })
    .locator('input[name="docment\\[\\]"]')
    .click();
  await page
    .getByRole("row", { name: "YYYY/MM Delete" })
    .locator('input[name="docment\\[\\]"]')
    .fill(SetupDocumentNumbering.name);

  await page
    .getByRole("row", { name: `${SetupDocumentNumbering.name} YYYY/MM Delete` })
    .locator('input[name="code\\[\\]"]')
    .fill(SetupDocumentNumbering.Prefix);
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="digits\\[\\]"]')
    .click();
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="digits\\[\\]"]')
    .fill(SetupDocumentNumbering.digits);
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="first\\[\\]"]')
    .click();
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="first\\[\\]"]')
    .fill("10");
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="last\\[\\]"]')
    .click();
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="last\\[\\]"]')
    .fill(SetupDocumentNumbering.lastNo);
  await page
    .locator(`[name="setup_date[]"]`)
    .last()
    .selectOption(SetupDocumentNumbering.startDate);
  console.log(
    "SetupDocumentNumbering.startDate.toDateString() :>> ",
    SetupDocumentNumbering.startDate
  );
  await page.locator(`[name="s_date[]"]`).last().selectOption(SetupDocumentNumbering.format);

  await page.getByText("New Series").click();
  await page
    .getByRole("row", { name: "YYYY/MM Delete" })
    .locator('input[name="docment\\[\\]"]')
    .click();
  await page
    .getByRole("row", { name: "YYYY/MM Delete" })
    .locator('input[name="docment\\[\\]"]')
    .fill(SetupDocumentNumbering.name);

  await page
    .getByRole("row", { name: `${SetupDocumentNumbering.name} YYYY/MM Delete` })
    .locator('input[name="code\\[\\]"]')
    .fill(SetupDocumentNumbering.Prefix);
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="digits\\[\\]"]')
    .click();
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="digits\\[\\]"]')
    .fill(SetupDocumentNumbering.digits);
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="first\\[\\]"]')
    .click();
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="first\\[\\]"]')
    .fill("10");
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="last\\[\\]"]')
    .click();
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="last\\[\\]"]')
    .fill(SetupDocumentNumbering.lastNo);
  await page
    .locator(`[name="setup_date[]"]`)
    .last()
    .selectOption(SetupDocumentNumbering.startDate);
  console.log(
    "SetupDocumentNumbering.startDate.toDateString() :>> ",
    SetupDocumentNumbering.startDate
  );
  await page.locator(`[name="s_date[]"]`).last().selectOption(SetupDocumentNumbering.format);

  await page.getByText("New Series").click();
  await page
    .getByRole("row", { name: "YYYY/MM Delete" })
    .locator('input[name="docment\\[\\]"]')
    .click();
  await page
    .getByRole("row", { name: "YYYY/MM Delete" })
    .locator('input[name="docment\\[\\]"]')
    .fill(SetupDocumentNumbering.name);

  await page
    .getByRole("row", { name: `${SetupDocumentNumbering.name} YYYY/MM Delete` })
    .locator('input[name="code\\[\\]"]')
    .fill(SetupDocumentNumbering.Prefix);
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="digits\\[\\]"]')
    .click();
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="digits\\[\\]"]')
    .fill(SetupDocumentNumbering.digits);
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="first\\[\\]"]')
    .click();
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="first\\[\\]"]')
    .fill("10");
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="last\\[\\]"]')
    .click();
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="last\\[\\]"]')
    .fill(SetupDocumentNumbering.lastNo);
  await page
    .locator(`[name="setup_date[]"]`)
    .last()
    .selectOption(SetupDocumentNumbering.startDate);
  console.log(
    "SetupDocumentNumbering.startDate.toDateString() :>> ",
    SetupDocumentNumbering.startDate
  );
  await page.locator(`[name="s_date[]"]`).last().selectOption(SetupDocumentNumbering.format);

  await page.getByText("New Series").click();
  await page
    .getByRole("row", { name: "YYYY/MM Delete" })
    .locator('input[name="docment\\[\\]"]')
    .click();
  await page
    .getByRole("row", { name: "YYYY/MM Delete" })
    .locator('input[name="docment\\[\\]"]')
    .fill(SetupDocumentNumbering.name);

  await page
    .getByRole("row", { name: `${SetupDocumentNumbering.name} YYYY/MM Delete` })
    .locator('input[name="code\\[\\]"]')
    .fill(SetupDocumentNumbering.Prefix);
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="digits\\[\\]"]')
    .click();
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="digits\\[\\]"]')
    .fill(SetupDocumentNumbering.digits);
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="first\\[\\]"]')
    .click();
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="first\\[\\]"]')
    .fill("10");
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="last\\[\\]"]')
    .click();
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="last\\[\\]"]')
    .fill(SetupDocumentNumbering.lastNo);
  await page
    .locator(`[name="setup_date[]"]`)
    .last()
    .selectOption(SetupDocumentNumbering.startDate);
  console.log(
    "SetupDocumentNumbering.startDate.toDateString() :>> ",
    SetupDocumentNumbering.startDate
  );
  await page.locator(`[name="s_date[]"]`).last().selectOption(SetupDocumentNumbering.format);

  await page.getByText("New Series").click();
  await page
    .getByRole("row", { name: "YYYY/MM Delete" })
    .locator('input[name="docment\\[\\]"]')
    .click();
  await page
    .getByRole("row", { name: "YYYY/MM Delete" })
    .locator('input[name="docment\\[\\]"]')
    .fill(SetupDocumentNumbering.name);

  await page
    .getByRole("row", { name: `${SetupDocumentNumbering.name} YYYY/MM Delete` })
    .locator('input[name="code\\[\\]"]')
    .fill(SetupDocumentNumbering.Prefix);
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="digits\\[\\]"]')
    .click();
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="digits\\[\\]"]')
    .fill(SetupDocumentNumbering.digits);
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="first\\[\\]"]')
    .click();
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="first\\[\\]"]')
    .fill("10");
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="last\\[\\]"]')
    .click();
  await page
    .getByRole("row", {
      name: `${SetupDocumentNumbering.name} ${SetupDocumentNumbering.Prefix} YYYY/MM Delete`,
    })
    .locator('input[name="last\\[\\]"]')
    .fill(SetupDocumentNumbering.lastNo);
  await page
    .locator(`[name="setup_date[]"]`)
    .last()
    .selectOption(SetupDocumentNumbering.startDate);
  console.log(
    "SetupDocumentNumbering.startDate.toDateString() :>> ",
    SetupDocumentNumbering.startDate
  );
   
  await page.locator(`[name="s_date[]"]`).last().selectOption(SetupDocumentNumbering.format);
  await page.getByText("Save").click();
  await page.getByRole("button", { name: "OK" }).click();
 
});
