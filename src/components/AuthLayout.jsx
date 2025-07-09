import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Protected({
  children,
  authentication = true,
  customLoader = null,
}) {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const shouldRedirect =
      (authentication && authStatus !== true) ||
      (!authentication && authStatus === true);

    if (shouldRedirect) {
      navigate(authentication ? "/login" : "/");
    } else {
      setIsLoading(false);
    }
  }, [authStatus, authentication, navigate]);

  if (isLoading) {
    return (
      customLoader || (
        <motion.div
          className="flex justify-center items-center h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="text-lg font-semibold text-blue-600 animate-pulse">
            Loading Protected Page...
          </div>
        </motion.div>
      )
    );
  }

  return <>{children}</>;
}
