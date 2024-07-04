import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/common/login-page";
import { LoginSetting } from "../../data/common/TestSetting";
import { poOnlyData } from "../../data/purchaseRequisition/poOnly";
import { config } from "dotenv";
config();

const { COMPANY, SITE } = process.env;

test.describe("PR PO Only", () => {
  test.skip("ออกใบ PR ของ PO Only", async ({ page }) => {
    const loginDetails = LoginSetting(SITE || "");
    const { site, username, password } = loginDetails;
    const loginPage = new LoginPage(page);
    await loginPage.goto(site);
    await loginPage.login(username, password, Number(COMPANY));
    await page.getByRole("link", { name: "ระบบจัดการในสำนักงาน" }).click();
    await page.getByRole("link", { name: " New PR" }).click();
    await page.getByPlaceholder("หมายเหตุ").fill(poOnlyData.remark);
    await page.getByPlaceholder("สถานที่ส่งของ").fill(poOnlyData.placeAddress);
    const selectOption = page.locator('//select[@id="sendapprove"]');
    await selectOption.selectOption({ index: 1 });
    const click = page.locator("#pj_ex").getByRole("button", { name: "" });
    await page.waitForLoadState("load");
    await click.click();

    await page
      .locator(`tr:has-text("${poOnlyData.project}") button:has-text("SELECT")`)
      .click();
    await page.locator("#dimension");
    await page.waitForLoadState("load");

    await page.getByRole("button", { name: "" }).nth(1).click();
    await page
      .locator(
        `tr:has-text("${poOnlyData.venderName}") button:has-text("SELECT")`
      )
      .click();
    await page.locator('//button[@id="select_add_sub1"]').click();
    await page.waitForLoadState("load");

    await page.locator('//a[@id="sss"]').click();
    await page
      .locator('//button[@class="openun btn btn-info btn-block"]')
      .click();
    await page.locator('//button[@id="select_item3"]').click();
    await page.locator('//a[@class="insertopen1"]').hover();
    await page.locator('//i[@class="glyphicon glyphicon-folder-open"]').click();
    await page.waitForLoadState("load");
    await page
      .locator('//a[@class="label label-block label-info insertopenxx3"]')
      .click();
    await page
      .getByPlaceholder("กรอกปริมาณ", { exact: true })
      .fill(poOnlyData.qty);
    await page.getByRole("textbox", { name: "กรอกราคา/หน่วย" }).clear();
    await page
      .getByRole("textbox", { name: "กรอกราคา/หน่วย" })
      .fill(poOnlyData.price);
    await page.locator("#vatper__").selectOption(poOnlyData.vat);
    await page.locator("#pdisamt").click();
    await page.locator("#datesend").fill(poOnlyData.startDate);
    await page.locator("#duedate").fill(poOnlyData.endDate);
    await page.getByRole("button", { name: " Add Item" }).click();
    await page.getByRole("button", { name: "OK" }).click();
    await page.getByRole("button", { name: "Close" }).click();
    await page.getByText("Save").click();
    await page.getByRole("button", { name: "Print " }).click();
    const page1Promise = page.waitForEvent("popup");
    await page.locator('a:has-text("Print")').click();
    await page1Promise;
    await page.getByText("Send Approve").click();
    await page.locator('//i[@class="icon icon-bell2"]').click();
    await page.waitForLoadState("load");
    await page.locator('(//img[@class="img-circle img-sm"])[1]').click();
    await page.waitForSelector('a:has-text("Print")');

    const elements = await page.$$('a:has-text("Print")');
    if (elements.length >= 2) {
      await elements[0].hover();
      await elements[1].click();
    } else {
      console.error("Not enough elements matching the selector");
    }
    await page.click("div.modal-dialog.modal-full .btn.bg-success-600");
    await page.waitForLoadState("load");
    await page.close();
  });

  // test("ออกใบ PO ต่อ", async ({ page }) => {
  //   const loginDetails = LoginSetting(SITE || "");
  //   const { site, username, password } = loginDetails;
  //   const loginPage = new LoginPage(page);
  //   await loginPage.goto(site);
  //   await loginPage.login(username, password, Number(COMPANY));
  //   await page
  //     .getByRole("link", { name: "ระบบสั่งซื้อ" })
  //     .click({ force: true });
  //   await page.waitForLoadState("load");
  //   await page.locator('button:has-text("New PO")').click();
  //   await page.locator("#openpo_prdetail__").click();
  //   await page.getByLabel('Search:').fill('PR24070021');
  //   await page.getByText('Select', { exact: true }).click();
  //   await page.getByText('Select', { exact: true }).click();
  //   await page.getByText('Add item').click();
  //   await page.getByRole('button', { name: 'OK' }).click();
  //   await page.getByRole('button', { name: ' Close' }).click();
  //   // await page.getByText("Select", { exact: true }).click();
  // });
});

// // PO -> Advance Depositawait page.getByRole('button', { name: 'OK' }).click();
// await page.getByRole("link", { name: " Advance Deposit Archive" }).click();
// await page.getByRole("link", { name: " Approve Advance Deposit" }).click();
// await page.getByRole("link", { name: " Advance Deposit Archive" }).click();
// await page
//   .getByRole("row", { name: "asdasd asd 2  select" })
//   .getByRole("link")
//   .click();
// await page.getByText("Load Document").click();
// await page
//   .getByRole("link", { name: " Advance Deposit", exact: true })
//   .click();
// await page.getByText("Select", { exact: true }).click();
// await page.locator("#sePO24060007").click();
// await page.locator("#invoice_number").click();
// await page.locator("#invoice_number").fill("5678");
// await page.locator("#remark").click();
// await page.locator("#remark").fill("remark pooonly");
// await page.locator("#sendapprove").selectOption("93");
// await page.getByText("Save").click();
// await page.getByRole("button", { name: "OK" }).click();
// const page2Promise = page.waitForEvent("popup");
// await page.getByRole("link", { name: " Print" }).click();
// const page2 = await page2Promise;
// await page.getByText("Send Approve").click();
// await page.getByRole("button", { name: "OK" }).click();
// await page.locator('//i[@class="icon icon-bell2"]').click();
// await page.locator('(//img[@class="img-circle img-sm"])[1]').click();
// await page.locator('#foo126AD24060007').click(); REMARK
// await page.locator('#foo126AD24060007').fill('ohm test poonly');
// await page.click("div.modal-dialog.modal-full .btn.bg-success-600");
// await page.getByRole("button", { name: "OK" }).click();

// const page3Promise = page.waitForEvent('popup');
// await page.locator('#print_form_poPO24060019').click();
// const page3 = await page3Promise;
