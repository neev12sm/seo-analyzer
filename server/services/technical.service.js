const axios = require("axios");

const technicalAudit = async (url, html) => {
  const base = new URL(url).origin;

  let robots = false;
  let sitemap = false;

  try {
    await axios.get(`${base}/robots.txt`);
    robots = true;
  } catch {}

  try {
    await axios.get(`${base}/sitemap.xml`);
    sitemap = true;
  } catch {}

  return {
    https: url.startsWith("https"),
    robots,
    sitemap,
    canonical: html.includes('rel="canonical"'),
    structuredData: html.includes("application/ld+json")
  };
};

module.exports = technicalAudit;