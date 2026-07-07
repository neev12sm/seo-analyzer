

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../services/api";

import {
  FaRocket,
  FaSearch,
  FaGlobe,
} from "react-icons/fa";

import Globe from "./Globe";
import HeroStats from "./HeroStats";

const Hero = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!url.trim()) {
      alert("Please enter a website URL");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/analyze", {
        url,
      });

      navigate(`/results/${res.data.jobId}`);
    } catch (err) {
      console.error(err);
      alert("Unable to analyze website.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section 
      id="home"
    className="relative min-h-screen overflow-hidden bg-[#151e4b]">
   

      {/* Grid Background */}

      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),
          linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
          bg-[size:75px_75px]
        "
      />

      {/* Glow Effects */}

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-600/20 blur-[180px] rounded-full"></div>

      {/* Floating Particles */}

      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + Math.random() * 3,
          }}
        />
      ))}

    <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-8 min-h-screen">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-screen py-20">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 backdrop-blur-xl">

              <FaRocket />

              AI Powered Website Analyzer

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-black leading-tight text-white">

              Analyze

              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">

                Your Website

              </span>

              <br />

              Like a Pro

            </h1>

            {/* Description */}
             <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-300 leading-7 sm:leading-9 max-w-xl">

              Discover SEO issues, technical SEO, page speed,
              content quality, security checks and AI-powered
              recommendations in seconds.

            </p>
                        {/* ================= URL Input ================= */}

            <form
              onSubmit={submitHandler}
              className="mt-12 max-w-2xl"
            >
           <div
className="
flex
flex-col
sm:flex-row
overflow-hidden
rounded-2xl
border
border-white/10
bg-white/10
backdrop-blur-xl
shadow-[0_20px_60px_rgba(0,0,0,0.35)]
"
>

                <input
                  type="text"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
               className="
flex-1
bg-transparent
px-5
py-5
text-base
sm:text-lg
text-white
placeholder:text-gray-400
outline-none
"
                />

                <button
                  type="submit"
                  disabled={loading}
            className="
w-full
sm:w-auto
flex
justify-center
items-center
gap-3
px-8
py-5
bg-gradient-to-r
from-cyan-500
to-blue-600
hover:from-blue-600
hover:to-indigo-600
text-white
font-semibold
transition
duration-300
disabled:opacity-60
"
                >
                  <FaSearch />

                  {loading ? "Analyzing..." : "Analyze"}
                </button>
              </div>
            </form>

            {/* Small text */}

            <p className="mt-4 text-sm text-gray-400">
              ✔ Free SEO Audit • No Signup Required • Results in Seconds
            </p>

            {/* ================= Hero Stats ================= */}

          <div className="mt-10 lg:mt-14">
              <HeroStats />
            </div>

          </motion.div>

          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center items-center mt-12 lg:mt-0"
          >
         <div className="scale-75 sm:scale-90 lg:scale-100">
    <Globe />
</div>
          </motion.div>

        </div>

      </div>
            {/* ================= Scroll Indicator ================= */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="
hidden
lg:flex
absolute
bottom-8
left-1/2
-translate-x-1/2
flex-col
items-center
text-gray-400
"
      >
        <p className="text-xs tracking-[4px] uppercase mb-3">
          Scroll Down
        </p>

        <div className="w-7 h-12 rounded-full border-2 border-cyan-400 flex justify-center">
          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;