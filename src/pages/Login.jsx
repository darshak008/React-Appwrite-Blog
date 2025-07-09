import React from "react";
import { Login as LoginComponent } from "../components";
import { motion } from "framer-motion";

function Login() {
  return (
    <motion.div
      className="py-10 min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-2xl"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <LoginComponent />
      </motion.div>
    </motion.div>
  );
}

export default Login;
