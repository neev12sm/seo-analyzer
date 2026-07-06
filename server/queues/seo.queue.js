const { Queue } = require("bullmq");
const connection = require("../config/redis");

const seoQueue = new Queue("seo-analysis", {
  connection,
});

module.exports = seoQueue;