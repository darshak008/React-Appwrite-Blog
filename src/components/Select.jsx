import React, { useId } from "react";
import { motion } from "framer-motion";

function Select(
  { options = [], label, className = "", animate = false, ...props },
  ref
) {
  const id = useId();

  const selectElement = (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        ref={ref}
        {...props}
        className={`w-full px-4 py-2 rounded-xl bg-white text-gray-900 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 ${className}`}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  return animate ? (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {selectElement}
    </motion.div>
  ) : (
    selectElement
  );
}

export default React.forwardRef(Select);
