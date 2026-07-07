const puppeteer = require("puppeteer");

const crawlWebsite = async (url) => {
  let browser;

  try {
    console.log("Launching browser...");

    browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-gpu",
      ],
    });

    console.log("Creating page...");
    const page = await browser.newPage();

    console.log("Navigating...");
    await page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 60000,
    });

    console.log("Getting HTML...");
    const html = await page.content();

    return html;
  } catch (err) {
    console.error("Crawler Error:", err);
    throw err;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};

module.exports = crawlWebsite;