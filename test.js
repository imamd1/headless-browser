const puppeteer = require("puppeteer");

// class
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1366, height: 768 },
  });
  const page = await browser.newPage();
  // await page.setViewport({
  //   height: 768,
  //   width: 1440,
  //   deviceScaleFactor: 1,
  // });

  // function/method
  await page.goto("https://www.dicoding.com/");

  // await page.screenshot({ path: "example.png" });
  // await browser.close();
})();

// class/function routing websocket
// endpoint socketio -> /goto {url: xxxxx}
// funct goto, trigger open page url -> page close
// url merupakan inputan
