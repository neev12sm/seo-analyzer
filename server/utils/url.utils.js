const normalizeUrl = (url) => {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return `https://${url}`;
  }
  return url;
};

const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const extractDomain = (url) => {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
};

module.exports = {
  normalizeUrl,
  isValidUrl,
  extractDomain
};