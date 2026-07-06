import { motion } from "framer-motion";
import {
  FaSearch,
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowRight,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-slate-950 pt-24"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/20 blur-[180px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-blue-700 to-cyan-600 p-12 text-center shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Improve Your Website?
          </h2>

          <p className="text-blue-100 mt-6 text-lg max-w-2xl mx-auto">
            Analyze your website in seconds and discover SEO opportunities,
            technical issues, performance bottlenecks, and content insights.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-3 mt-10 bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
          >
            Analyze Website
            <FaArrowRight />
          </a>
        </motion.div>

        {/* Main Footer */}
        <div className="grid lg:grid-cols-4 gap-12 py-20">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">

              <div className="bg-blue-600 p-3 rounded-xl">
                <FaSearch className="text-white text-xl" />
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">
                  SEO Analyzer
                </h3>

                <p className="text-cyan-400 text-sm">
                  Professional Website Audit Platform
                </p>
              </div>

            </div>

            <p className="text-gray-400 mt-6 leading-8">
              Powerful SEO auditing platform built to help developers,
              businesses, and marketers optimize website performance,
              technical SEO, content quality, and search visibility.
            </p>
          </div>

          {/* Quick Links */}
          <div>

            <h4 className="text-white text-xl font-semibold mb-6">
              Quick Links
            </h4>

            <div className="space-y-4">

              <a
                href="#home"
                className="block text-gray-400 hover:text-cyan-400 transition"
              >
                Home
              </a>

              <a
                href="#about"
                className="block text-gray-400 hover:text-cyan-400 transition"
              >
                About
              </a>

              <a
                href="#features"
                className="block text-gray-400 hover:text-cyan-400 transition"
              >
                Reports
              </a>

              <a
                href="#contact"
                className="block text-gray-400 hover:text-cyan-400 transition"
              >
                Contact
              </a>

            </div>

          </div>

          {/* Resources */}
          <div>

            <h4 className="text-white text-xl font-semibold mb-6">
              Resources
            </h4>

            <div className="space-y-4 text-gray-400">

              <p>SEO Audit</p>

              <p>Technical SEO</p>

              <p>Performance Audit</p>

              <p>Content Analysis</p>

              <p>PDF Reports</p>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h4 className="text-white text-xl font-semibold mb-6">
              Contact
            </h4>

            <div className="space-y-5">

              <div>

                <p className="text-gray-500 text-sm">
                  Email
                </p>

                <p className="text-white">
                  support@seoanalyzer.com
                </p>

              </div>

              <div>

                <p className="text-gray-500 text-sm">
                  Platform
                </p>

                <p className="text-white">
                  React • Node.js • MongoDB
                </p>

              </div>

            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">

              {[
                FaGithub,
                FaLinkedinIn,
                FaTwitter,
                FaEnvelope,
              ].map((Icon, index) => (

                <motion.a
                  key={index}
                  href="#"
                  whileHover={{
                    scale: 1.15,
                    y: -4,
                  }}
                  className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white hover:bg-blue-600 transition"
                >
                  <Icon />
                </motion.a>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 py-8 flex flex-col md:flex-row items-center justify-between">

          <p className="text-gray-500 text-center md:text-left">
            © 2026 SEO Analyzer. All rights reserved.
          </p>

          <p className="text-gray-500 mt-4 md:mt-0">
            Built by ❤️ Ravikant Sharma
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;