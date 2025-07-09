import React, { useId } from "react";
import { motion } from "framer-motion";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", animate = false, ...props },
  ref
) {
  const id = useId();

  const inputElement = (
    <div className="w-full">
      {label && (
        <label
          className="block text-sm font-medium text-gray-700 mb-1"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        type={type}
        className={`w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 ${className}`}
        {...props}
      />
    </div>
  );

  return animate ? (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {inputElement}
    </motion.div>
  ) : (
    inputElement
  );
});

export default Input;
