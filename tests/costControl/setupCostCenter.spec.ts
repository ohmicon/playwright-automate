import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/common/login-page";
import dataSetting from "../../data/common/TestSetting.json";
import { fullScreenMode } from "../../src/pages/common/fullScreenMode";
import setupPermissionReport from "../../data/generalSettings/setupPermissionReport";
import { setupProjectType } from "../../data/generalSettings/setupProjectType";
import { config } from 'dotenv';
config();
const {COMPANY} = process.env;
const data = dataSetting.Login;

test("Setup Cost Center", async ({ page }) => {
  //fullScreenMode(page);
  // test.setTimeout(600000);

  const loginPage = new LoginPage(page);
  await loginPage.goto(data.site);
  await loginPage.login(data.username, data.password,Number(COMPANY));
  // await page.goto(data.site + "/auth/login/" + data.username + "/PPA");
  await page.getByRole("link", { name: "ระบบจัดการข้อมูลกลาง" }).click();
  await page.locator("a").filter({ hasText: "Cost Control" }).click();
  await page.getByRole("link", { name: " Setup Cost Center" }).click();
  await page.getByRole("button", { name: " Add" }).click();
  await page.locator("#cgroup_code").click();
  await page.locator("#cgroup_code").fill("Test2");
  await page.locator("#cgroup_name").click();
  await page.locator("#cgroup_name").fill("ค่าน้ำประปา");

  await page.locator("#valid_from").fill("2024-06-21");
  await page.locator("#costcode_d").selectOption("2");
  await page.locator("#locked").uncheck();
  await page.locator("#locked").check();
  // await page.locator('#valid_from').fill('2024-06-01');
  await page.locator("#level").selectOption("1");
  await page.getByRole("button", { name: "" }).nth(2).click();
  await page.locator("#basiccc_b_filter").getByLabel("Filter:").fill("");
  await page.locator("#basiccc_b_filter").getByLabel("Filter:").click();
  await page
    .locator("#basiccc_b_filter")
    .getByLabel("Filter:")
    .fill("52103006");
  await page.getByText("SELECT", { exact: true }).click();
  // await page.waitForSelector();
  //await page.locator('.modal-header.bg-primary .close').click();
  
  await page.locator("#ex_lock_add1").check();
  await page.getByText("Save").click();
  // await page.locator("#basiccc_b_filter").getByLabel("Filter:").click();
  // await page
  //   .locator("#basiccc_b_filter")
  //   .getByLabel("Filter:")
  //   .fill("น้ำประปา");
  // await page
  //   .locator("tr")
  //   .filter({ hasText: "64 11501145 WIP" })
  //   .locator("button")
  //   .click();
  // await page.locator("#open_expense_acc").getByText("X").click();
  // await page.locator("#ex_lock_add2").check();
  // await page.getByText("Save").click();
  // await page.getByRole("button", { name: "OK" }).click();
  // await page.getByLabel("Filter:").fill("");
  // // const idValue = await page
  // //   .locator(`[type="checkbox"][data-readonly]`)
  // //   .nth(39)
  // //   .getAttribute("id");
  // // // await page.locator("#ic_chk609").check();
  // // // แสดงค่า id ที่ได้
  // // console.log("id", idValue);
  // // await page.locator(`#${idValue}`).check();
});
