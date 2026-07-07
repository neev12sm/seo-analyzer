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

const worker = new Worker(
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
      // 3. Technical + Performance
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
      // 4. Content Audit
      // ==============================
      console.log("5️⃣ Running Content Audit...");
      const content = contentAudit(html);

      // ==============================
      // 5. Generate Score
      // ==============================
      console.log("6️⃣ Calculating Final Score...");

      const score = generateScore(
        seo,
        technical,
        performance,
        content
      );

      // ==============================
      // 6. Update MongoDB
      // ==============================
      console.log("Updating Report:", reportId);

      const updatedReport = await Report.findByIdAndUpdate(
        reportId,
        {
          status: "completed",
          report: {
            seo,
            technical,
            performance,
            content,
          },
          score,
        },
        {
          new: true,
        }
      );

      console.log("Updated Report:");
      console.log(updatedReport);

      if (!updatedReport) {
        console.error("❌ No report found with ID:", reportId);
      } else {
        console.log("✅ Report Saved Successfully");
      }
    } catch (err) {
      console.error("❌ Worker Error:", err);

      try {
        const failedReport = await Report.findByIdAndUpdate(
          reportId,
          {
            status: "failed",
            error: err.message,
          },
          {
            new: true,
          }
        );

        console.log("Failed Report:");
        console.log(failedReport);
      } catch (dbErr) {
        console.error("❌ Failed to update report status:", dbErr);
      }
    }
  },
  {
    connection,
  }
);

// Worker Events
worker.on("completed", (job) => {
  console.log(`🎉 Job ${job.id} completed`);
});

worker.on("failed", (job, err) => {
  console.error(`💥 Job ${job?.id} failed:`, err);
});

worker.on("error", (err) => {
  console.error("🚨 Worker Error Event:", err);
});