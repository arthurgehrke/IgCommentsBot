const puppeteer = require("puppeteer");

(async function main() {
  try {
    const browser = await puppeteer.launch({ headless: false }); // if u dont want see the chromium, use true
    const page = await browser.newPage();

    await page.goto(
      "https://www.instagram.com/accounts/login/?source=auth_switcher" // URL login Instagram
    );
    await page.waitForSelector(".EPjEi"); // I recommend that you dont use your personal account
    await page.type('input[name="username"]', "", {
      // Your login

      delay: 100
    });
    await page.type('input[name="password"', "", { delay: 200 }); //Your password
    await page.click('button[type="submit"]');
    await page.waitForNavigation();

    await page.goto(""); // The link that you want comment
    await page.waitForSelector("textarea");
    var i = 0;
    do {
      // I created this, to tag people in order to win give aways
      await page.type("textarea", "", { delay: 200 }); // The first person that you want tag in the give away
      await page.click('button[type="submit"]');
      i++;
      console.log("O bot já comentou " + i + " vezes");
      await page.waitFor(70000);
      await page.type("textarea", "", { delay: 200 }); // The second person that you want tag in the give away
      await page.click('button[type="submit"]');
      i++;
      console.log("O bot já comentou " + i + " vezes");
      await page.waitFor(70000);
      await page.type("textarea", "", { delay: 100 }); // The third person that you want tag in the give away
      await page.click('button[type="submit"]');
      i++;
      console.log("O bot já comentou " + i + " vezes");
      await new Promise(function(resolve) {
        setTimeout(resolve, 70000);
      });
    } while (i < 100); // Number of times that you want comment
    {
    }
  } catch (e) {
    console.log("our error", e);
  }
})();
