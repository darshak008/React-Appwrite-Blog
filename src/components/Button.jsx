import React from "react";
import { motion } from "framer-motion";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "text-white",
  hoverBg = "hover:bg-blue-700",
  className = "",
  animate = false,
  ...props
}) {
  const baseClasses = `px-5 py-2 rounded-full font-medium transition duration-300 ease-in-out shadow-sm ${bgColor} ${textColor} ${hoverBg} ${className}`;

  const ButtonElement = (
    <button type={type} className={baseClasses} {...props}>
      {children}
    </button>
  );

  return animate ? (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {ButtonElement}
    </motion.div>
  ) : (
    ButtonElement
  );
}
