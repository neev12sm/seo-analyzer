const express = require("express");
const {
  analyzeWebsite,
  getResults
} = require("../controllers/seo.controller");

const router = express.Router();

router.post("/analyze", analyzeWebsite);
router.get("/results/:id", getResults);

module.exports = router;