// const generateScore = (seo, technical, performance, content) => {
//   let score = 0;

//   if (technical.https) score += 10;
//   if (technical.robots) score += 5;
//   if (technical.sitemap) score += 5;
//   if (seo.titleLength >= 30 && seo.titleLength <= 60) score += 10;
//   if (seo.h1Count === 1) score += 10;
//   if (content.contentLengthGood) score += 10;

//   score += Math.floor(performance.performanceScore / 2);

//   return Math.min(score, 100);
// };

// module.exports = generateScore;


const generateScore = (
  seo,
  technical,
  performance,
  content
) => {
  let score = 100;

  // ================= SEO =================

  if (!seo.title) score -= 8;

  if (!seo.metaDescription) score -= 8;

  if (!seo.h1) score -= 5;

  if (seo.imagesWithoutAlt > 0) {
    score -= Math.min(seo.imagesWithoutAlt * 2, 12);
  }

  if (!seo.canonical) score -= 5;

  // ================= Technical =================

  if (!technical.https) score -= 10;

  if (!technical.robotsTxt) score -= 5;

  if (!technical.sitemap) score -= 5;

  // ================= Content =================

  if (content.wordCount < 300) score -= 10;

  // ================= Lighthouse =================

  if (performance.performanceScore !== undefined) {
    score = Math.round((score + performance.performanceScore) / 2);
  }

  // Keep score between 0 and 100
  score = Math.max(0, Math.min(100, score));

  return score;
};

module.exports = generateScore;