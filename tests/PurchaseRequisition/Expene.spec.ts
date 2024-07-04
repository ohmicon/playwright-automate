import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/common/login-page";
import { describe } from "node:test";
import dataSetting from "../../data/common/TestSetting.json";
import { LoginSetting } from "../../data/common/TestSetting";

const data = dataSetting.Login; 
const deleteRow = async (page) => {
  await page.locator("#delete110300001MM1").click();
  await page.getByRole("button", { name: "Ok" }).click();
};

const {COMPANY,SITE} = process.env;

describe("ระบบจัดการในสำนักงาน", () => {
  test("New PR", async ({ page }) => {
    await page.pause();
    const loginDetails = LoginSetting(SITE || "");
      const { site, username, password } = loginDetails;
      const loginPage = new LoginPage(page);
  
      await loginPage.goto(site);
      await loginPage.login(username, password, Number(COMPANY));

    await page.locator(`[class="panel-title"]`).nth(2).click() 
    await page.getByRole("link", { name: " New PR" }).click();

    const select = await page.locator("(//select[@id='pr_type'])[1]");
    await page.waitForTimeout(1500);
    await select.selectOption({ label: "Expense" });
    await page.waitForTimeout(1500);
    await page.locator("#group-PR").selectOption({index: 1});
    page.once("dialog", (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByRole("gridcell", { name: "SELECT" }).nth(1).click();
    await page.locator("#select_add1").click();

    await page.locator("#invoice_no").fill("ex001", { force: true });
    await page
      .getByPlaceholder("หมายเหตุ")
      .fill("test expense", { force: true });
    await page.waitForTimeout(1000);
    await page.getByPlaceholder("หมายเหตุ").click({ force: true });

    await page.locator("#apduedate").fill("2024-06-23", { force: true });
    await page.locator("#sendapprove").selectOption({index: 1});
    // -----
    await page.waitForLoadState("load");
    await page.locator("#sss").click();

    await page.waitForTimeout(1000);
    await page.click(
      `(//button[@class='openproj1 btn btn-xs btn-block btn-primary'])[1]`,
      { force: true }
    );

    await page.waitForTimeout(1000);
    await page
      .locator(
        ".modal-body > div:nth-child(2) > div > .input-group > .input-group-btn"
      )
      .first()
      .click();

    await page.click(`(//button[@id='select_item1'])[1]`, { force: true });

    await page.getByRole("cell", { name: "" }).click();
    await page.locator(".odd > th:nth-child(8)").first().click();

    await page.getByRole("textbox", { name: "กรอกราคา/หน่วย" }).click();
    await page.getByRole("button", { name: " Add Item" }).click();
    await page.getByRole("button", { name: "OK" }).click();
    await page.getByRole("button", { name: " Close" }).click();

    await page.getByText("Save").click();
    await page.waitForTimeout(2000);
    await page.getByText("Send Approve").click();
    //----
    await page.getByRole("link", { name: " Approve", exact: true }).click();
    await page.locator(`(//span[@class='label bg-success'])[1]`).click();
    await page.getByRole("button", { name: "OK" }).click();
    await page.getByRole("link", { name: " PR Archive" }).click();

    await page.getByPlaceholder("Select Document PR").click();
    await page.getByRole("treeitem", { name: "Expense" }).click();
    await page.getByPlaceholder("Select Document Status...").click();
    await page.getByRole("treeitem", { name: "Approve" }).click();
    await page.getByText("Load Document", { exact: true }).click();
    await page.click(`//tbody/tr[1]/td[11]/div[1]/button[1]`);
    const page1Promise = page.waitForEvent("popup");
    await page
      .locator(
        `//div[@class='btn-group dropup open']//ul[@class='dropdown-menu dropdown-menu-right']`
      )
      .click();
    // const page1 = await page1Promise;
    // const checkPrint = await page
    //   .getByRole("button", { name: "Print" })
    //   .click();
    //------
    // await page.locator("a").filter({ hasText: "Reject" }).click();
    // await page.getByPlaceholder("หมายเหตุ").click();
    // await page.getByPlaceholder("หมายเหตุ").fill("ลบ test");
    // await page.locator('a:has-text("reject")').click();
    // await page.locator("#rejectpr_approvePR24060091").click();
    // await page.getByText("Load Document", { exact: true }).click();
    // await page.locator(".icons-list > li:nth-child(5) > a").first().click();
    // await page.getByPlaceholder("หมายเหตุ").click();
    // await page.getByPlaceholder("หมายเหตุ").fill("ลบเทส");
    // await page.getByRole("button", { name: " Confirm For Delete" }).click();
    // await page.getByText("Load Document", { exact: true }).click();

    // test("approve pr", async ({ page }) => {
    //   await page.goto(
    //     "https://maison-cm-test.iconframework.com/auth/login/icon001/PPA"
    //   );
    //   await page
    //     .getByRole("link", { name: "ระบบจัดการในสำนักงาน" })
    //     .click({ force: true });
    //   await page.getByRole("link", { name: " Approve", exact: true }).click();
    //   await page.locator(`(//span[@class='label bg-success'])[1]`).click();
    //   await page.getByRole("button", { name: "OK" }).click();
    //   await page.getByRole("link", { name: " PR Archive" }).click();
    //   await page.locator("#txtdatestart").first().fill("2024-06-14");
    //   await page.locator("#txtdateend").first().fill("2024-06-14");
    //   await page.getByPlaceholder("Select Document PR").click();
    //   await page.getByRole("treeitem", { name: "Expense" }).click();
    //   await page.getByPlaceholder("Select Document Status...").click();
    //   await page.getByRole("treeitem", { name: "Approve" }).click();
    //   await page.getByText("Load Document", { exact: true }).click();
    //   await page.getByRole("button", { name: "Print " }).click();
    //   const page1Promise = page.waitForEvent("popup");
    //   await page
    //     .locator(
    //       `//div[@class='btn-group dropup open']//ul[@class='dropdown-menu dropdown-menu-right']`
    //     )
    //     .click();
    //   const page1 = await page1Promise;
    //   await page.getByRole("button", { name: "Print " }).click();

    //   //--------
    // });
  });
});
