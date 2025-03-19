"use client";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const AnimatedHeading = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 1000); // Every 2 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-fit mx-auto">
      <h3 className="text-4xl font-extrabold text-green-600 dark:text-green-500 tracking-wide text-center uppercase drop-shadow-md">
  You May Also Like
</h3>

      <motion.div
        className="absolute left-0 bottom-0 h-1 bg-red-600 rounded-full"
        initial={{ width: "0%" }}
        animate={{ width: isAnimating ? "100%" : "0%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
};

export default AnimatedHeading;
