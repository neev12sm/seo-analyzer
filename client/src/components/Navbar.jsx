


import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import {
  FaSearch,
  FaChartLine,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 shadow-2xl">

      <div className="absolute inset-0 bg-black/10 backdrop-blur-md"></div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-4 flex justify-between items-center">

        {/* Logo */}

        <RouterLink
          to="/"
          className="flex items-center gap-3 group"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center shadow-xl group-hover:rotate-6 group-hover:scale-110 transition">

            <FaSearch className="text-white text-xl sm:text-2xl" />

          </div>

          <div>

            <h1 className="text-xl sm:text-3xl font-extrabold text-white">
              SEO Analyzer
            </h1>

            <p className="text-blue-200 text-xs sm:text-sm">
              Website Audit Platform
            </p>

          </div>

        </RouterLink>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-10">

          <Link
            to="home"
            smooth
            duration={700}
            offset={-80}
            spy
            className="cursor-pointer text-white font-medium hover:text-cyan-300 transition"
          >
            Home
          </Link>

          <Link
            to="reports"
            smooth
            duration={700}
            offset={-80}
            spy
            className="cursor-pointer text-white font-medium hover:text-cyan-300 transition"
          >
            Reports
          </Link>

          <Link
            to="about"
            smooth
            duration={700}
            offset={-80}
            spy
            className="cursor-pointer text-white font-medium hover:text-cyan-300 transition"
          >
            About
          </Link>

          <Link
            to="contact"
            smooth
            duration={700}
            offset={-80}
            spy
            className="cursor-pointer text-white font-medium hover:text-cyan-300 transition"
          >
            Contact
          </Link>

        </nav>

        {/* Desktop Button */}

        <RouterLink
          to="/"
          className="hidden lg:flex group items-center gap-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-xl hover:scale-105 transition"
        >
          <FaChartLine className="group-hover:rotate-12 transition" />
          New Analysis
        </RouterLink>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-slate-900/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-5">

          <Link
            to="home"
            smooth
            duration={700}
            offset={-80}
            onClick={closeMenu}
            className="cursor-pointer text-white hover:text-cyan-300"
          >
            Home
          </Link>

          <Link
            to="reports"
            smooth
            duration={700}
            offset={-80}
            onClick={closeMenu}
            className="cursor-pointer text-white hover:text-cyan-300"
          >
            Reports
          </Link>

          <Link
            to="about"
            smooth
            duration={700}
            offset={-80}
            onClick={closeMenu}
            className="cursor-pointer text-white hover:text-cyan-300"
          >
            About
          </Link>

          <Link
            to="contact"
            smooth
            duration={700}
            offset={-80}
            onClick={closeMenu}
            className="cursor-pointer text-white hover:text-cyan-300"
          >
            Contact
          </Link>

          <RouterLink
            to="/"
            onClick={closeMenu}
            className="mt-3 flex justify-center items-center gap-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-blue-500 hover:to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-xl transition"
          >
            <FaChartLine />
            New Analysis
          </RouterLink>

        </div>
      </div>

    </header>
  );
};

export default Navbar;