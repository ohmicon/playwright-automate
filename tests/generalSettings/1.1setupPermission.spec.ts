import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/pages/common/login-page";
import dataSetting from "../../data/common/TestSetting.json";
import { config } from 'dotenv';
config();
const {COMPANY} = process.env;
const data = dataSetting.Login;

test.describe("Setup Permission", () => {
  test("Test Setup Permission by user", async ({ page }) => {
    test.setTimeout(6000);
    await page.pause();

    const loginPage = new LoginPage(page);
    await loginPage.goto(data.site);
    await loginPage.login(data.username, data.password,Number(COMPANY));
    await page.locator(`[class="panel-title"]`).nth(0).click()
    await expect(page).not.toHaveURL(data.site + "panel/office");
    await page.waitForLoadState();
    await page.locator("#btn_mg").click({ force: true });
    await page.waitForLoadState();
    // Scroll down

    await page.locator("#ascrail2000 div").click({ force: true });
    await page.mouse.wheel(0, 500);
    await page
      .getByRole("link", { name: "Setup Permission" })
      .click({ force: true });
    await page.waitForLoadState();

    await page
      .getByRole("link", { name: "Permission by User" })
      .click({ force: true });
    await page.getByPlaceholder("Type to filter...").click({ force: true });
    await page
      .getByPlaceholder("Type to filter...")
      .fill(data.username, { force: true });
    await page.getByRole("link", { name: "" }).click({ force: true });

    const checkbox1 = await page.$(
      'input[type="checkbox"][module_id_domain="1"][event_type="read"]'
    );
    if (checkbox1) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox1) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox1.hasAttribute("disabled");
      }, checkbox1);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="1"][event_type="read"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }
    const checkbox2 = await page.$(
      'input[type="checkbox"][module_id_domain="1"][event_type="new"]'
    );
    if (checkbox2) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox2) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox2.hasAttribute("disabled");
      }, checkbox2);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="1"][event_type="new"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }
    const checkbox3 = await page.$(
      'input[type="checkbox"][module_id_domain="1"][event_type="edit"]'
    );
    if (checkbox3) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox3) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox3.hasAttribute("disabled");
      }, checkbox3);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="1"][event_type="edit"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }
    const checkbox4 = await page.$(
      'input[type="checkbox"][module_id_domain="1"][event_type="del"]'
    );
    if (checkbox4) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox4) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox4.hasAttribute("disabled");
      }, checkbox4);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="1"][event_type="del"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }
    const checkbox5 = await page.$(
      'input[type="checkbox"][module_id_domain="1"][event_type="print"]'
    );
    if (checkbox5) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox5) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox5.hasAttribute("disabled");
      }, checkbox5);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="1"][event_type="print"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }

    ///////////////////////////////////////////

    const checkbox6 = await page.$(
      'input[type="checkbox"][module_id_domain="2"][event_type="read"]'
    );
    if (checkbox6) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox6) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox6.hasAttribute("disabled");
      }, checkbox6);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="2"][event_type="read"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }
    const checkbox7 = await page.$(
      'input[type="checkbox"][module_id_domain="2"][event_type="new"]'
    );
    if (checkbox7) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox7) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox7.hasAttribute("disabled");
      }, checkbox7);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="2"][event_type="new"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }
    const checkbox8 = await page.$(
      'input[type="checkbox"][module_id_domain="2"][event_type="edit"]'
    );
    if (checkbox8) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox8) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox8.hasAttribute("disabled");
      }, checkbox8);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="2"][event_type="edit"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }
    const checkbox9 = await page.$(
      'input[type="checkbox"][module_id_domain="2"][event_type="del"]'
    );
    if (checkbox9) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox9) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox9.hasAttribute("disabled");
      }, checkbox9);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="2"][event_type="del"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }
    const checkbox10 = await page.$(
      'input[type="checkbox"][module_id_domain="2"][event_type="print"]'
    );
    if (checkbox10) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox10) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox10.hasAttribute("disabled");
      }, checkbox10);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="2"][event_type="print"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }
    const checkbox11 = await page.$(
      'input[type="checkbox"][module_id_domain="2"][event_type="reject"]'
    );
    if (checkbox11) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox11) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox11.hasAttribute("disabled");
      }, checkbox11);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="2"][event_type="reject"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }

    /////////////////////////////////////////////////////////
    const checkbox31 = await page.$(
      'input[type="checkbox"][module_id_domain="3"][event_type="read"]'
    );
    if (checkbox31) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox31) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox31.hasAttribute("disabled");
      }, checkbox31);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="3"][event_type="read"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }
    const checkbox32 = await page.$(
      'input[type="checkbox"][module_id_domain="3"][event_type="new"]'
    );
    if (checkbox32) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox32) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox32.hasAttribute("disabled");
      }, checkbox32);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="3"][event_type="new"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }
    const checkbox33 = await page.$(
      'input[type="checkbox"][module_id_domain="3"][event_type="edit"]'
    );
    if (checkbox33) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox33) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox33.hasAttribute("disabled");
      }, checkbox33);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="3"][event_type="edit"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }
    const checkbox34 = await page.$(
      'input[type="checkbox"][module_id_domain="3"][event_type="del"]'
    );
    if (checkbox34) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox34) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox34.hasAttribute("disabled");
      }, checkbox34);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="3"][event_type="del"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }
    const checkbox35 = await page.$(
      'input[type="checkbox"][module_id_domain="3"][event_type="print"]'
    );
    if (checkbox35) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox35) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox35.hasAttribute("disabled");
      }, checkbox35);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="3"][event_type="print"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }
    const checkbox36 = await page.$(
      'input[type="checkbox"][module_id_domain="3"][event_type="reject"]'
    );
    if (checkbox36) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox36) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox36.hasAttribute("disabled");
      }, checkbox36);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="3"][event_type="reject"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }

    /////////////////////////////////////////////////////////
    const checkbox41 = await page.$(
      'input[type="checkbox"][module_id_domain="4"][event_type="read"]'
    );
    if (checkbox41) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox41) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox41.hasAttribute("disabled");
      }, checkbox41);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="4"][event_type="read"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }
    const checkbox42 = await page.$(
      'input[type="checkbox"][module_id_domain="4"][event_type="new"]'
    );
    if (checkbox42) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox42) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox42.hasAttribute("disabled");
      }, checkbox42);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="4"][event_type="new"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }
    const checkbox43 = await page.$(
      'input[type="checkbox"][module_id_domain="4"][event_type="edit"]'
    );
    if (checkbox43) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox43) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox43.hasAttribute("disabled");
      }, checkbox43);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="4"][event_type="edit"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }
    const checkbox44 = await page.$(
      'input[type="checkbox"][module_id_domain="4"][event_type="del"]'
    );
    if (checkbox44) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox44) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox44.hasAttribute("disabled");
      }, checkbox44);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="4"][event_type="del"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }
    const checkbox45 = await page.$(
      'input[type="checkbox"][module_id_domain="4"][event_type="print"]'
    );
    if (checkbox45) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox45) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox45.hasAttribute("disabled");
      }, checkbox45);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="4"][event_type="print"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }
    const checkbox46 = await page.$(
      'input[type="checkbox"][module_id_domain="4"][event_type="reject"]'
    );
    if (checkbox46) {
      // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
      const isDisabled = await page.evaluate((checkbox46) => {
        // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
        return checkbox46.hasAttribute("disabled");
      }, checkbox46);
      if (!isDisabled) {
        await page
          .locator(
            'input[type="checkbox"][module_id_domain="4"][event_type="reject"]'
          )
          .check();
        await page.waitForLoadState();
      }
    }

/////////////////////////////////////////////////////////
const checkbox51 = await page.$(
  'input[type="checkbox"][module_id_domain="6"][event_type="read"]'
);
if (checkbox51) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox51) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox51.hasAttribute("disabled");
  }, checkbox51);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="6"][event_type="read"]'
      )
      .check();
    await page.waitForLoadState();
  }
}
const checkbox52 = await page.$(
  'input[type="checkbox"][module_id_domain="6"][event_type="new"]'
);
if (checkbox52) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox52) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox52.hasAttribute("disabled");
  }, checkbox52);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="6"][event_type="new"]'
      )
      .check();
    await page.waitForLoadState();
  }
}
const checkbox53 = await page.$(
  'input[type="checkbox"][module_id_domain="6"][event_type="edit"]'
);
if (checkbox53) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox53) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox53.hasAttribute("disabled");
  }, checkbox53);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="6"][event_type="edit"]'
      )
      .check();
    await page.waitForLoadState();
  }
}
const checkbox54 = await page.$(
  'input[type="checkbox"][module_id_domain="6"][event_type="del"]'
);
if (checkbox54) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox54) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox54.hasAttribute("disabled");
  }, checkbox54);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="6"][event_type="del"]'
      )
      .check();
    await page.waitForLoadState();
  }
}
const checkbox55 = await page.$(
  'input[type="checkbox"][module_id_domain="6"][event_type="print"]'
);
if (checkbox55) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox55) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox55.hasAttribute("disabled");
  }, checkbox55);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="6"][event_type="print"]'
      )
      .check();
    await page.waitForLoadState();
  }
}
const checkbox56 = await page.$(
  'input[type="checkbox"][module_id_domain="6"][event_type="reject"]'
);
if (checkbox56) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox56) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox56.hasAttribute("disabled");
  }, checkbox56);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="6"][event_type="reject"]'
      )
      .check();
    await page.waitForLoadState();
  }
}

/////////////////////////////////////////////////////////
const checkbox61 = await page.$(
  'input[type="checkbox"][module_id_domain="7"][event_type="read"]'
);
if (checkbox61) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox61) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox61.hasAttribute("disabled");
  }, checkbox61);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="7"][event_type="read"]'
      )
      .check();
    await page.waitForLoadState();
  }
}
const checkbox62 = await page.$(
  'input[type="checkbox"][module_id_domain="7"][event_type="new"]'
);
if (checkbox62) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox62) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox62.hasAttribute("disabled");
  }, checkbox62);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="7"][event_type="new"]'
      )
      .check();
    await page.waitForLoadState();
  }
}
const checkbox63 = await page.$(
  'input[type="checkbox"][module_id_domain="7"][event_type="edit"]'
);
if (checkbox63) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox63) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox63.hasAttribute("disabled");
  }, checkbox63);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="7"][event_type="edit"]'
      )
      .check();
    await page.waitForLoadState();
  }
}
const checkbox64 = await page.$(
  'input[type="checkbox"][module_id_domain="7"][event_type="del"]'
);
if (checkbox64) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox64) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox64.hasAttribute("disabled");
  }, checkbox64);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="7"][event_type="del"]'
      )
      .check();
    await page.waitForLoadState();
  }
}
const checkbox65 = await page.$(
  'input[type="checkbox"][module_id_domain="7"][event_type="print"]'
);
if (checkbox65) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox65) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox65.hasAttribute("disabled");
  }, checkbox65);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="7"][event_type="print"]'
      )
      .check();
    await page.waitForLoadState();
  }
}
const checkbox66 = await page.$(
  'input[type="checkbox"][module_id_domain="7"][event_type="reject"]'
);
if (checkbox66) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox66) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox66.hasAttribute("disabled");
  }, checkbox66);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="7"][event_type="reject"]'
      )
      .check();
    await page.waitForLoadState();
  }
}

/////////////////////////////////////////////////////////
const checkbox71 = await page.$(
  'input[type="checkbox"][module_id_domain="9"][event_type="read"]'
);
if (checkbox71) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox71) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox71.hasAttribute("disabled");
  }, checkbox71);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="9"][event_type="read"]'
      )
      .check();
    await page.waitForLoadState();
  }
}
const checkbox72 = await page.$(
  'input[type="checkbox"][module_id_domain="9"][event_type="new"]'
);
if (checkbox72) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox72) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox72.hasAttribute("disabled");
  }, checkbox72);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="9"][event_type="new"]'
      )
      .check();
    await page.waitForLoadState();
  }
}
const checkbox73 = await page.$(
  'input[type="checkbox"][module_id_domain="9"][event_type="edit"]'
);
if (checkbox73) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox73) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox73.hasAttribute("disabled");
  }, checkbox73);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="9"][event_type="edit"]'
      )
      .check();
    await page.waitForLoadState();
  }
}
const checkbox74 = await page.$(
  'input[type="checkbox"][module_id_domain="9"][event_type="del"]'
);
if (checkbox74) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox74) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox74.hasAttribute("disabled");
  }, checkbox74);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="9"][event_type="del"]'
      )
      .check();
    await page.waitForLoadState();
  }
}
const checkbox75 = await page.$(
  'input[type="checkbox"][module_id_domain="9"][event_type="print"]'
);
if (checkbox75) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox75) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox75.hasAttribute("disabled");
  }, checkbox75);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="9"][event_type="print"]'
      )
      .check();
    await page.waitForLoadState();
  }
}
const checkbox76 = await page.$(
  'input[type="checkbox"][module_id_domain="9"][event_type="reject"]'
);
if (checkbox76) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox76) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox76.hasAttribute("disabled");
  }, checkbox76);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="9"][event_type="reject"]'
      )
      .check();
    await page.waitForLoadState();
  }
}



/////////////////////////////////////////////////////////
const checkbox81 = await page.$(
  'input[type="checkbox"][module_id_domain="10"][event_type="read"]'
);
if (checkbox81) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox81) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox81.hasAttribute("disabled");
  }, checkbox81);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="10"][event_type="read"]'
      )
      .check();
    await page.waitForLoadState();
  }
}
const checkbox82 = await page.$(
  'input[type="checkbox"][module_id_domain="10"][event_type="new"]'
);
if (checkbox82) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox82) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox82.hasAttribute("disabled");
  }, checkbox82);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="10"][event_type="new"]'
      )
      .check();
    await page.waitForLoadState();
  }
}
const checkbox83 = await page.$(
  'input[type="checkbox"][module_id_domain="10"][event_type="edit"]'
);
if (checkbox83) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox83) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox83.hasAttribute("disabled");
  }, checkbox83);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="10"][event_type="edit"]'
      )
      .check();
    await page.waitForLoadState();
  }
}
const checkbox84 = await page.$(
  'input[type="checkbox"][module_id_domain="10"][event_type="del"]'
);
if (checkbox84) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox84) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox84.hasAttribute("disabled");
  }, checkbox84);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="10"][event_type="del"]'
      )
      .check();
    await page.waitForLoadState();
  }
}
const checkbox85 = await page.$(
  'input[type="checkbox"][module_id_domain="10"][event_type="print"]'
);
if (checkbox85) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox85) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox85.hasAttribute("disabled");
  }, checkbox85);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="10"][event_type="print"]'
      )
      .check();
    await page.waitForLoadState();
  }
}
const checkbox86 = await page.$(
  'input[type="checkbox"][module_id_domain="10"][event_type="reject"]'
);
if (checkbox86) {
  // ตรวจสอบว่า checkbox ถูก disable หรือไม่โดยใช้ JavaScript ใน context ของเบราว์เซอร์
  const isDisabled = await page.evaluate((checkbox86) => {
    // ตรวจสอบว่ามี attribute 'disabled' หรือไม่
    return checkbox86.hasAttribute("disabled");
  }, checkbox86);
  if (!isDisabled) {
    await page
      .locator(
        'input[type="checkbox"][module_id_domain="10"][event_type="reject"]'
      )
      .check();
    await page.waitForLoadState();
  }

 
}


















  });

 
});
