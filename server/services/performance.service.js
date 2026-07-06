// const chromeLauncher = require("chrome-launcher");

// const performanceAudit = async (url) => {
//   // Import Lighthouse dynamically (required for latest versions)
//   const lighthouse = (await import("lighthouse")).default;

//   // Launch Chrome
//   const chrome = await chromeLauncher.launch({
//     chromeFlags: ["--headless", "--no-sandbox", "--disable-gpu"],
//   });

//   try {
//     const result = await lighthouse(url, {
//       port: chrome.port,
//       output: "json",
//       logLevel: "error",
//     });

//     return {
//       performanceScore:
//         (result.lhr.categories.performance.score || 0) * 100,
//       FCP:
//         result.lhr.audits["first-contentful-paint"]?.displayValue || "N/A",
//       LCP:
//         result.lhr.audits["largest-contentful-paint"]?.displayValue || "N/A",
//       SpeedIndex:
//         result.lhr.audits["speed-index"]?.displayValue || "N/A",
//       TBT:
//         result.lhr.audits["total-blocking-time"]?.displayValue || "N/A",
//       CLS:
//         result.lhr.audits["cumulative-layout-shift"]?.displayValue || "N/A",
//     };
//   } finally {
//     await chrome.kill();
//   }
// };

// module.exports = performanceAudit;


const chromeLauncher = require("chrome-launcher");

const performanceAudit = async (url) => {
  const lighthouse = (await import("lighthouse")).default;

  const chrome = await chromeLauncher.launch({
    chromeFlags: ["--headless", "--no-sandbox", "--disable-gpu"],
  });

  try {
    const result = await lighthouse(url, {
      port: chrome.port,
      output: "json",
      logLevel: "error",
    });

    return {
      performanceScore:
        (result.lhr.categories.performance.score || 0) * 100,

      FCP:
        result.lhr.audits["first-contentful-paint"]?.displayValue || "N/A",

      LCP:
        result.lhr.audits["largest-contentful-paint"]?.displayValue || "N/A",

      SpeedIndex:
        result.lhr.audits["speed-index"]?.displayValue || "N/A",

      TBT:
        result.lhr.audits["total-blocking-time"]?.displayValue || "N/A",

      CLS:
        result.lhr.audits["cumulative-layout-shift"]?.displayValue || "N/A",
    };

  } finally {
    await chrome.kill();
  }
};

module.exports = performanceAudit;