

console.log("🚀 SEO Worker Started");

const { Worker } = require("bullmq");
const connection = require("../config/redis");
const Report = require("../models/Report");

const crawlWebsite = require("../services/crawler.service");
const seoAudit = require("../services/seo.service");
const technicalAudit = require("../services/technical.service");
const performanceAudit = require("../services/performance.service");
const contentAudit = require("../services/content.service");
const generateScore = require("../services/score.service");

new Worker(
  "seo-analysis",
  async (job) => {
    console.log("📦 Job received:", job.data);

    const { reportId, url } = job.data;

    try {
      // ==============================
      // 1. Crawl Website
      // ==============================
      console.log("1️⃣ Crawling website...");
      const html = await crawlWebsite(url);

      // ==============================
      // 2. SEO Audit
      // ==============================
      console.log("2️⃣ Running SEO Audit...");
      const seo = seoAudit(html);

      // ==============================
      // 3. Run Technical Audit & Lighthouse together
      // ==============================
      console.log("3️⃣ Running Technical Audit...");
      console.log("4️⃣ Running Lighthouse Performance Audit...");

      const [technical, performance] = await Promise.all([
        technicalAudit(url, html),
        performanceAudit(url),
      ]);

      console.log("Performance Result:");
      console.log(performance);

      // ==============================
      // 5. Content Audit
      // ==============================
      console.log("5️⃣ Running Content Audit...");
      const content = contentAudit(html);

      // ==============================
      // 6. Generate Final Score
      // ==============================
      console.log("6️⃣ Calculating Final Score...");

      const score = generateScore(
        seo,
        technical,
        performance,
        content
      );

      // ==============================
      // 7. Save Report
      // ==============================
      await Report.findByIdAndUpdate(reportId, {
        status: "completed",
        report: {
          seo,
          technical,
          performance,
          content,
        },
        score,
      });

      console.log("✅ Report Saved Successfully");
    } catch (err) {
      console.error("❌ Worker Error:", err);

      await Report.findByIdAndUpdate(reportId, {
        status: "failed",
        error: err.message,
      });
    }
  },
  {
    connection,
  }
);