require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

// 👇 THIS MUST EXIST
require("./workers/seo.worker");

const seoRoutes = require("./routes/seo.routes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", seoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});