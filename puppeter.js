const puppeteer = require("puppeteer");

// class

class PuppeterService {
  constructor(puppeteer) {
    this._puppeteer = puppeteer;
  }

  async launchWeb(url) {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: {
        height: 768,
        width: 1366,
      },
      args: ["--start-maximized"],
    });

    const page = await browser.newPage();
    const http = "https://";
    const pages = await browser.pages();
    if (pages.length > 1) {
      pages[0].close();
    }
    await page.goto(http + url);
    // await browser.close();
  }
}

module.exports = PuppeterService;

//   // function/method
//   await page.goto("https://www.dicoding.com/");

//   // await page.screenshot({ path: "example.png" });
//   // await browser.close();
// })();

// class/function routing websocket
// endpoint socketio -> /goto {url: xxxxx}
// funct goto, trigger open page url -> page close
// url merupakan inputan
