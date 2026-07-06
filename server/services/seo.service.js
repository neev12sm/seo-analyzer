const cheerio = require("cheerio");

const seoAudit = (html) => {
  const $ = cheerio.load(html);

  return {
    title: $("title").text(),
    titleLength: $("title").text().length,
    metaDescription: $('meta[name="description"]').attr("content") || "",
    h1Count: $("h1").length,
    imagesWithoutAlt: $("img:not([alt])").length,
    internalLinks: $("a[href^='/']").length,
    externalLinks: $("a[href^='http']").length
  };
};

module.exports = seoAudit;