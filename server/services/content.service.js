const cheerio = require("cheerio");

const contentAudit = (html) => {
  const $ = cheerio.load(html);

  const text = $("body").text().replace(/\s+/g, " ").trim();
  const words = text.split(" ");

  return {
    wordCount: words.length,
    contentLengthGood: words.length > 600
  };
};

module.exports = contentAudit;