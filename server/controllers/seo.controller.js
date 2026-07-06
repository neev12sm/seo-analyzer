const Report = require("../models/Report");
const seoQueue = require("../queues/seo.queue");

const {
  normalizeUrl,
  isValidUrl,
} = require("../utils/url.utils");

exports.analyzeWebsite = async (req, res) => {
  try {
    let { url } = req.body;

    // Check if URL was provided
    if (!url) {
      return res.status(400).json({
        message: "Website URL is required",
      });
    }

    // Remove extra spaces
    url = url.trim();

    // Add https:// if missing
    url = normalizeUrl(url);

    // Validate URL
    if (!isValidUrl(url)) {
      return res.status(400).json({
        message: "Invalid URL",
      });
    }

    // Create report
    const report = await Report.create({
      url,
      status: "pending",
    });

    // Add job to BullMQ queue
    await seoQueue.add("seo-analysis", {
      reportId: report._id.toString(),
      url,
    });

    return res.status(200).json({
      jobId: report._id,
      status: "processing",
    });

  } catch (err) {
    console.error("Analyze Error:", err);

    return res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }
};

exports.getResults = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);

    if (!report) {
      return res.status(404).json({
        message: "Report not found",
      });
    }

    return res.status(200).json(report);

  } catch (err) {
    console.error("Get Result Error:", err);

    return res.status(500).json({
      message: "Server Error",
      error: err.message,
    });
  }
};