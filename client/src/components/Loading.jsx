import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24">

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        className="w-16 h-16 rounded-full border-4 border-blue-500 border-t-transparent"
      />

      <h2 className="mt-8 text-3xl font-bold">
        Analyzing Website...
      </h2>

      <p className="text-gray-500 mt-4">
        Please wait while we generate your SEO report.
      </p>

    </div>
  );
};

export default Loading;