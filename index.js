const puppeteer = require("puppeteer");

(async function main() {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(
      "https://www.instagram.com/accounts/login/?source=auth_switcher"
    );
    await page.waitForSelector(".EPjEi");
    await page.type('input[name="username"]', "userignewone@gmail.com", {
      delay: 100
    });
    await page.type('input[name="password"', "newuser07x", { delay: 100 });
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    await page.goto("https://www.instagram.com/p/B5L-RJ_Jcq_/");
    await page.waitForSelector("textarea");
    var i = 0;
    do {
      await page.type("textarea", "haha", { delay: 100 });
      await page.click('button[type="submit"]');
      i++;
      console.log("O bot já comentou " + i + " vezes");
      await new Promise(function(resolve) {
        setTimeout(resolve, 5000);
      });
    } while (i < 100);
    {
    }
  } catch (e) {
    console.log("our error", e);
  }
})();
