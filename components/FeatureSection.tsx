"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Lazy load Lucide icons to prevent SSR mismatch
const ShieldCheck = dynamic(() => import("lucide-react").then((mod) => mod.ShieldCheck), { ssr: false });
const Leaf = dynamic(() => import("lucide-react").then((mod) => mod.Leaf), { ssr: false });
const Truck = dynamic(() => import("lucide-react").then((mod) => mod.Truck), { ssr: false });
const BadgeCheck = dynamic(() => import("lucide-react").then((mod) => mod.BadgeCheck), { ssr: false });

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
    title: "100% Natural",
    description: "All products are made with natural ingredients",
  },
  {
    icon: <Leaf className="h-10 w-10 text-green-500" />,
    title: "Eco-Friendly",
    description: "Sustainable packaging and practices",
  },
  {
    icon: <Truck className="h-10 w-10 text-green-500" />,
    title: "Fast Delivery",
    description: "Quick and secure shipping nationwide",
  },
  {
    icon: <BadgeCheck className="h-10 w-10 text-green-500" />,
    title: "Quality Assured",
    description: "Certified and tested products",
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-green-50 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-lg font-semibold mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;

