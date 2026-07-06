import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import {
  FaSearch,
  FaChartLine,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 shadow-2xl">

      <div className="absolute inset-0 bg-black/10 backdrop-blur-md"></div>

      <div className="relative max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}

        <RouterLink
          to="/"
          className="flex items-center gap-4 group"
        >
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center shadow-xl group-hover:rotate-6 group-hover:scale-110 transition">

            <FaSearch className="text-white text-2xl" />

          </div>

          <div>

            <h1 className="text-3xl font-extrabold text-white">
              SEO Analyzer
            </h1>

            <p className="text-blue-200 text-sm">
              Website Audit Platform
            </p>

          </div>

        </RouterLink>

        {/* Navigation */}

        <nav className="hidden md:flex items-center gap-10">
<Link
  to="home"
  smooth={true}
  duration={700}
  offset={-80}
  spy={true}
  className="cursor-pointer relative text-white font-medium hover:text-cyan-300 transition"
>
  Home
</Link>

           {/* Reports */}

          <Link
            to="reports"
            smooth={true}
            duration={700}
            offset={-80}
            spy={true}
            className="cursor-pointer relative text-white font-medium hover:text-cyan-300 transition"
          >
            Reports
          </Link>

          {/* About */}

          <Link
            to="about"
            smooth={true}
            duration={700}
            offset={-80}
            spy={true}
            className="cursor-pointer relative text-white font-medium hover:text-cyan-300 transition"
          >
            About
          </Link>

          {/* Contact */}

          <Link
            to="contact"
            smooth={true}
            duration={700}
            offset={-80}
            spy={true}
            className="cursor-pointer relative text-white font-medium hover:text-cyan-300 transition"
          >
            Contact
          </Link>

        </nav>

        {/* Button */}

        <RouterLink
          to="/"
          className="group flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-xl hover:scale-105 transition"
        >

          <FaChartLine className="group-hover:rotate-12 transition" />

          New Analysis

        </RouterLink>

      </div>

    </header>
  );
};

export default Navbar;