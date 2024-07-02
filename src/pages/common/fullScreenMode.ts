import { expect, Page, test } from "@playwright/test";

export const fullScreenMode = async (page: Page) => {

  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.evaluate(() => {
    window.moveTo(0, 0);
    window.resizeTo(screen.width, screen.height);

  });
  await page.waitForLoadState();
};
