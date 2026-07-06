import { motion } from "framer-motion";
import {
  FaGlobe,
  FaSearch,
  FaChartLine,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";

const Globe = () => {
  return (
    <div className="relative flex justify-center items-center h-[700px]">

      {/* Background Glow */}
      <div className="absolute w-[620px] h-[620px] rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Outer Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 45,
          ease: "linear",
        }}
        className="absolute w-[560px] h-[560px] rounded-full border border-cyan-400/20"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <div className="bg-cyan-500 p-4 rounded-full shadow-xl">
            <FaSearch className="text-white text-2xl" />
          </div>
        </div>
      </motion.div>

      {/* Ring 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 32,
          ease: "linear",
        }}
        className="absolute w-[450px] h-[450px] rounded-full border border-blue-400/20"
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <div className="bg-blue-500 p-4 rounded-full shadow-xl">
            <FaChartLine className="text-white text-2xl" />
          </div>
        </div>
      </motion.div>

      {/* Ring 3 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 24,
          ease: "linear",
        }}
        className="absolute w-[340px] h-[340px] rounded-full border border-purple-400/20"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <div className="bg-purple-500 p-4 rounded-full shadow-xl">
            <FaRocket className="text-white text-2xl" />
          </div>
        </div>
      </motion.div>

      {/* Ring 4 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="absolute w-[240px] h-[240px] rounded-full border border-green-400/20"
      >
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <div className="bg-green-500 p-4 rounded-full shadow-xl">
            <FaShieldAlt className="text-white text-2xl" />
          </div>
        </div>
      </motion.div>

      {/* Floating Particles */}

      <div className="absolute top-12 left-16 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />

      <div className="absolute top-32 right-16 w-2 h-2 bg-blue-400 rounded-full animate-ping" />

      <div className="absolute bottom-20 left-12 w-3 h-3 bg-purple-400 rounded-full animate-bounce" />

      <div className="absolute bottom-24 right-12 w-2 h-2 bg-green-400 rounded-full animate-pulse" />

      <div className="absolute top-1/2 left-8 w-2 h-2 bg-cyan-300 rounded-full animate-pulse" />

      <div className="absolute top-1/3 right-6 w-2 h-2 bg-indigo-400 rounded-full animate-pulse" />

      {/* Earth */}

      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="relative"
      >
        {/* Glow */}

        <div className="absolute inset-0 rounded-full bg-cyan-400 blur-[80px] opacity-40" />

        {/* Outer Glow Ring */}

        <div className="absolute -inset-6 rounded-full border border-cyan-400/20" />

        <div className="absolute -inset-12 rounded-full border border-cyan-400/10" />

        {/* Earth */}

        <div
          className="
            relative
            w-56
            h-56
            rounded-full
            bg-gradient-to-br
            from-cyan-300
            via-blue-500
            to-indigo-900
            shadow-[0_0_120px_rgba(34,211,238,0.8)]
            flex
            items-center
            justify-center
            overflow-hidden
          "
        >
          {/* Grid Overlay */}

          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:18px_18px]" />

          {/* Shine */}

          <motion.div
            animate={{
              x: [-200, 200],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "linear",
            }}
            className="absolute w-20 h-80 bg-white/20 rotate-12 blur-xl"
          />

          <FaGlobe className="text-white text-8xl z-10 drop-shadow-xl" />
        </div>

      </motion.div>

    </div>
  );
};

export default Globe;