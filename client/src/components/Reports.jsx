import { motion } from "framer-motion";

import {
  FaChartLine,
  FaGlobe,
  FaSearch,
  FaRocket,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaGlobe />,
    value: "500+",
    title: "Websites Analyzed",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: <FaSearch />,
    value: "20+",
    title: "SEO Checks",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaChartLine />,
    value: "95%",
    title: "Average SEO Score",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <FaRocket />,
    value: "24/7",
    title: "AI Monitoring",
    color: "from-orange-500 to-red-500",
  },
];

const Reports = () => {
  return (
    <section
      id="reports"
      className="relative py-32 bg-[#374aa0] overflow-hidden"
    >

      {/* Background */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-8 relative">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <div className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">

            AI Reports Dashboard

          </div>

          <h2 className="mt-8 text-6xl font-black text-white">

            Powerful

            <span className="text-cyan-400">

              {" "}SEO Reports

            </span>

          </h2>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto leading-9">

            Analyze websites with AI-powered SEO auditing,
            performance tracking, technical health reports,
            and intelligent recommendations.

          </p>

        </motion.div>

        {/* Statistics */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: .6,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                relative
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                overflow-hidden
              "
            >

              {/* Glow */}

              <div
                className={`
                  absolute
                  inset-0
                  opacity-10
                  bg-gradient-to-br
                  ${item.color}
                `}
              />

              <div
                className={`
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-br
                  ${item.color}
                  flex
                  items-center
                  justify-center
                  text-white
                  text-2xl
                  shadow-xl
                `}
              >
                {item.icon}
              </div>

              <h3 className="text-5xl font-black text-white mt-8">

                {item.value}

              </h3>

              <p className="text-gray-400 mt-3 text-lg">

                {item.title}

              </p>

            </motion.div>

          ))}

        </div>

                {/* ================= Recent Reports ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-28"
        >

          <h3 className="text-4xl font-bold text-white text-center">

            Recent Website Reports

          </h3>

          <p className="text-gray-400 text-center mt-4 text-lg">

            Explore AI-generated reports with detailed SEO insights.

          </p>

          <div className="grid lg:grid-cols-3 gap-8 mt-14">

            {[
              {
                website: "google.com",
                score: 96,
                status: "Excellent",
                color: "text-green-400",
              },
              {
                website: "github.com",
                score: 91,
                status: "Very Good",
                color: "text-cyan-400",
              },
              {
                website: "amazon.com",
                score: 84,
                status: "Needs Improvement",
                color: "text-yellow-400",
              },
            ].map((report, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  shadow-xl
                  hover:border-cyan-500/40
                "
              >

                <div className="flex justify-between items-center">

                  <div>

                    <p className="text-gray-400 text-sm">

                      Website

                    </p>

                    <h4 className="text-2xl font-bold text-white mt-1">

                      {report.website}

                    </h4>

                  </div>

                  <div
                    className="
                      w-20
                      h-20
                      rounded-full
                      border-4
                      border-cyan-500
                      flex
                      items-center
                      justify-center
                      text-white
                      font-bold
                      text-xl
                    "
                  >

                    {report.score}

                  </div>

                </div>

                <div className="mt-8 space-y-4">

                  <div className="flex justify-between">

                    <span className="text-gray-400">

                      SEO Score

                    </span>

                    <span className="text-white">

                      {report.score}/100

                    </span>

                  </div>

                  <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">

                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      style={{
                        width: `${report.score}%`,
                      }}
                    ></div>

                  </div>

                  <div className="flex justify-between mt-6">

                    <span className="text-gray-400">

                      Status

                    </span>

                    <span className={`${report.color} font-semibold`}>

                      {report.status}

                    </span>

                  </div>

                </div>


              </motion.div>

            ))}

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Reports;