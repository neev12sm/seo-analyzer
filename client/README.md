# 🚀 SEO Analyzer

An AI-ready SEO Analyzer built with **React**, **Node.js**, **Express**, **MongoDB**, **Redis**, **BullMQ**, and **Google Lighthouse**. The application analyzes websites and generates comprehensive SEO, technical, content, and performance reports with an intuitive modern interface.

---

## 📖 Overview

SEO Analyzer helps developers, businesses, and digital marketers identify SEO issues, technical problems, and website performance bottlenecks.

Users simply enter a website URL, and the application performs automated analysis using multiple auditing services before generating a detailed report.

---

# ✨ Features

## 🔍 Website Analysis

- Analyze any public website
- Automatic URL validation
- HTTPS normalization
- Background processing using BullMQ

---

## 📈 SEO Audit

- Page Title
- Meta Description
- Canonical Tag
- H1 Tag Detection
- Image ALT Attribute Check
- Internal Links
- External Links
- Open Graph Tags
- Twitter Cards
- Robots Meta Tag

---

## ⚙️ Technical SEO Audit

- HTTPS Detection
- robots.txt Availability
- sitemap.xml Detection
- HTTP Status Check
- Response Validation

---

## ⚡ Performance Audit

Powered by **Google Lighthouse**

Measures:

- Performance Score
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Speed Index
- Total Blocking Time (TBT)
- Cumulative Layout Shift (CLS)

---

## 📝 Content Analysis

- Word Count
- Content Quality Metrics
- Basic Content Evaluation

---

## 📊 Report Generation

Generates a complete SEO report containing:

- SEO Score
- Technical Analysis
- Performance Metrics
- Content Analysis
- Overall Website Score

---

## 🎨 Modern UI

- Responsive Design
- Animated Hero Section
- Interactive Dashboard
- Glassmorphism Effects
- Smooth Animations using Framer Motion
- Professional Landing Page

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router
- Tailwind CSS
- Framer Motion
- React Icons
- Axios

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Redis
- BullMQ
- Google Lighthouse
- Chrome Launcher
- Cheerio

---

# 📂 Project Structure

```
seo-analyzer/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── queues/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── workers/
│   └── server.js
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/yourusername/seo-analyzer.git
```

---

## 2. Install Frontend

```bash
cd client

npm install

npm run dev
```

---

## 3. Install Backend

```bash
cd server

npm install

npm run dev
```

---

## 4. Configure Environment Variables

Create a `.env` file inside the server folder.

Example:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

REDIS_HOST=localhost

REDIS_PORT=6379

CLIENT_URL=http://localhost:5173
```

---

# 🚀 How It Works

1. User enters a website URL.
2. URL is validated and normalized.
3. A BullMQ job is created.
4. The worker crawls the website.
5. SEO analysis is performed.
6. Technical audit is executed.
7. Lighthouse generates performance metrics.
8. Content analysis is completed.
9. Final SEO score is calculated.
10. Report is stored in MongoDB.
11. Results are displayed on the frontend.

---

# 📊 Lighthouse Metrics

The application measures:

- Performance Score
- FCP
- LCP
- CLS
- TBT
- Speed Index

using **Google Lighthouse**.

---

# 🔄 Queue Processing

Website analysis runs asynchronously using **BullMQ** and **Redis**, ensuring that lengthy audits do not block API requests.

Workflow:

```
User
   ↓
Express API
   ↓
BullMQ Queue
   ↓
Worker
   ↓
SEO Services
   ↓
MongoDB
   ↓
Frontend Report
```

---

# 📷 Screenshots

## Home Page

_Add screenshot here_

---

## About Section

_Add screenshot here_

---

## Report Dashboard

_Add screenshot here_

---

## Results Page

_Add screenshot here_

---

# 🎯 Future Improvements

- PDF Report Export
- Email Report Delivery
- User Authentication
- Website History Tracking
- Keyword Analysis
- Accessibility Audit
- Best Practices Audit
- Dark / Light Theme
- AI-powered SEO Recommendations
- Competitor Comparison
- Multi-page Website Crawling

---

# 👨‍💻 Author

**Ravikant Sharma**

Full Stack Developer

---

# 📄 License

This project is developed for educational and portfolio purposes.

---

## ⭐ Support

If you found this project useful, consider giving it a **⭐ Star** on GitHub.