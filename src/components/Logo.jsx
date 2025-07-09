import React from "react";
import { motion } from "framer-motion";

function Logo({ width = "120px" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-2xl font-bold"
      style={{ width }}
    >
      <span className="text-white bg-gradient-to-r from-purple-600 to-indigo-600 px-3 py-1 rounded-lg shadow">
        Dev<span className="text-yellow-300">Blog</span>
      </span>
    </motion.div>
  );
}

export default Logo;
