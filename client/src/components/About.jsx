

import {
  FaRocket,
  FaGlobe,
  FaSearch,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"></div>

      <div className="absolute -top-32 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-[150px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300">

              <FaRocket />

              AI Powered Website SEO Analyzer

            </div>

            <h1 className="mt-8 text-5xl md:text-6xl font-black leading-tight">

              Analyze.

              <span className="text-cyan-400">
                {" "}Optimize.
              </span>

              <br />

              Rank Higher.

            </h1>

            <p className="mt-8 text-gray-300 text-lg leading-9">

              SEO Analyzer helps developers, businesses and digital
              marketers discover SEO issues, improve technical
              performance, optimize content, and boost search engine
              rankings with one comprehensive report.

            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <button className="flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition font-semibold shadow-xl">

                Analyze Website

                <FaArrowRight />

              </button>

            </div>

            <div className="grid grid-cols-3 gap-6 mt-14">

              <div>

                <h2 className="text-4xl font-bold text-cyan-400">
                  100+
                </h2>

                <p className="text-gray-400">
                  Websites Audited
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-cyan-400">
                  20+
                </h2>

                <p className="text-gray-400">
                  SEO Checks
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-cyan-400">
                  24/7
                </h2>

                <p className="text-gray-400">
                  Availability
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >

            {/* Floating Card */}
            <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 shadow-[0_0_60px_rgba(59,130,246,.2)]">

              <div className="flex justify-between items-center">

                <div>

                  <h2 className="text-2xl font-bold">
                    SEO Dashboard
                  </h2>

                  <p className="text-gray-400">
                    www.example.com
                  </p>

                </div>

                <div className="bg-green-500 text-white px-4 py-2 rounded-full">

                  94%

                </div>

              </div>

              <div className="space-y-7 mt-10">

                {[
                  {
                    title: "SEO Score",
                    score: "94%",
                    width: "94%",
                    color: "bg-cyan-400",
                  },
                  {
                    title: "Performance",
                    score: "88%",
                    width: "88%",
                    color: "bg-green-400",
                  },
                  {
                    title: "Technical SEO",
                    score: "96%",
                    width: "96%",
                    color: "bg-purple-500",
                  },
                  {
                    title: "Content",
                    score: "91%",
                    width: "91%",
                    color: "bg-pink-500",
                  },
                ].map((item) => (

                  <div key={item.title}>

                    <div className="flex justify-between mb-2">

                      <span className="text-gray-300">
                        {item.title}
                      </span>

                      <span className="font-semibold">
                        {item.score}
                      </span>

                    </div>

                    <div className="h-3 bg-slate-700 rounded-full overflow-hidden">

                      <div
                        className={`${item.color} h-full rounded-full`}
                        style={{
                          width: item.width,
                        }}
                      ></div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* Floating Widgets */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute -left-12 top-12 bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-xl"
            >

              <FaSearch className="text-cyan-400 text-3xl" />

              <h3 className="font-bold mt-3">
                SEO Audit
              </h3>

              <p className="text-sm text-gray-400 mt-2">
                Meta Tags
              </p>

            </motion.div>

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -right-10 bottom-10 bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-xl"
            >

              <FaChartLine className="text-green-400 text-3xl" />

              <h3 className="font-bold mt-3">
                Performance
              </h3>

              <p className="text-sm text-gray-400 mt-2">
                Lighthouse
              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Wave */}
      <div className="h-24 bg-gradient-to-b from-transparent to-slate-900"></div>
      {/* ================= WHY CHOOSE US ================= */}

<section className="relative py-28 bg-slate-900">

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="text-center mb-20">

      <span className="text-cyan-400 uppercase tracking-[5px] font-semibold">
        Why Choose Us
      </span>

      <h2 className="text-5xl font-extrabold mt-5">
        Powerful Features For Better Rankings
      </h2>

      <p className="text-gray-400 text-lg max-w-3xl mx-auto mt-6 leading-9">
        Our platform combines SEO analysis, technical audits,
        performance insights, and content optimization into one
        beautiful report that helps improve your website.
      </p>

    </div>

    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

      {[
        {
          icon: <FaSearch />,
          title: "SEO Analysis",
          desc: "Analyze title tags, headings, images, links, metadata and discover SEO opportunities.",
          color: "from-blue-500 to-cyan-500",
        },
        {
          icon: <FaGlobe />,
          title: "Technical SEO",
          desc: "Check HTTPS, robots.txt, sitemap.xml, canonical tags and structured data.",
          color: "from-green-500 to-emerald-500",
        },
        {
          icon: <FaChartLine />,
          title: "Performance",
          desc: "Evaluate website speed, loading metrics, Core Web Vitals and optimization tips.",
          color: "from-purple-500 to-pink-500",
        },
        {
          icon: <FaRocket />,
          title: "Content Audit",
          desc: "Measure content quality, readability and discover thin content issues.",
          color: "from-orange-500 to-red-500",
        },
        {
          icon: <FaCheckCircle />,
          title: "Smart Recommendations",
          desc: "Receive actionable recommendations to fix issues and improve rankings.",
          color: "from-cyan-500 to-blue-600",
        },
        {
          icon: <FaRocket />,
          title: "Professional Reports",
          desc: "Generate clean SEO reports that can be exported and shared instantly.",
          color: "from-indigo-500 to-violet-600",
        },
      ].map((feature, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative"
        >

          {/* Glow */}
          <div
            className={`absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition duration-500 bg-gradient-to-r ${feature.color}`}
          ></div>

          <div className="relative bg-slate-950 border border-slate-800 rounded-3xl p-10 h-full hover:border-cyan-500 transition-all duration-300 hover:-translate-y-3">

            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-r ${feature.color}`}
            >
              {feature.icon}
            </div>

            <h3 className="text-2xl font-bold mt-8">
              {feature.title}
            </h3>

            <p className="text-gray-400 mt-5 leading-8">
              {feature.desc}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>
{/* ================= HOW IT WORKS ================= */}

<section className="relative py-32 bg-slate-950 overflow-hidden">

  {/* Background Glow */}

  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

  <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">

    <div className="text-center mb-24">

      <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">

        How It Works

      </span>

      <h2 className="text-5xl font-black mt-5">

        Analyze Any Website In Minutes

      </h2>

      <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-9">

        Our intelligent SEO engine automatically crawls your website,
        performs detailed technical analysis, evaluates SEO quality,
        and generates a professional report with actionable
        recommendations.

      </p>

    </div>

    {/* Timeline */}

    <div className="relative">

      {/* Vertical Line */}

      <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 -translate-x-1/2 rounded-full"></div>

      {[
        {
          icon: "🌍",
          title: "Enter Website URL",
          desc: "Simply enter any website URL you want to analyze. Our crawler supports most public websites.",
        },
        {
          icon: "🕷️",
          title: "Website Crawling",
          desc: "Puppeteer visits the website, loads the content, and captures all important SEO elements.",
        },
        {
          icon: "🔍",
          title: "SEO Analysis",
          desc: "We inspect title tags, headings, images, metadata, links, keywords, and content quality.",
        },
        {
          icon: "⚙️",
          title: "Technical Audit",
          desc: "HTTPS, Robots.txt, Sitemap, Canonical Tags and Structured Data are thoroughly checked.",
        },
        {
          icon: "⚡",
          title: "Performance Analysis",
          desc: "Core Web Vitals, Lighthouse Performance, Speed Index and loading metrics are analyzed.",
        },
        {
          icon: "📄",
          title: "Generate Report",
          desc: "Receive an easy-to-understand report with score, insights and personalized recommendations.",
        },
      ].map((step, index) => (

        <motion.div

          key={index}

          initial={{ opacity: 0, y: 80 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{
            duration: 0.6,
            delay: index * 0.15,
          }}

          viewport={{ once: true }}

          className={`relative flex items-center mb-24 ${
            index % 2 === 0
              ? "lg:flex-row"
              : "lg:flex-row-reverse"
          }`}
        >

          {/* Card */}

          <div className="lg:w-1/2">

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300 shadow-xl">

              <div className="text-5xl">

                {step.icon}

              </div>

              <h3 className="text-3xl font-bold mt-6">

                {step.title}

              </h3>

              <p className="text-gray-400 mt-5 leading-8">

                {step.desc}

              </p>

            </div>

          </div>

          {/* Timeline Circle */}

          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 items-center justify-center text-white text-2xl font-bold shadow-[0_0_30px_rgba(6,182,212,.5)]">

            {index + 1}

          </div>

          <div className="lg:w-1/2"></div>

        </motion.div>

      ))}

    </div>

  </div>

</section>


    </section>
  );
};

export default About;