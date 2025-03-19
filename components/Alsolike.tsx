"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "@/sanity.types";
import ProductCard from "./ProductCard";
import { motion, AnimatePresence } from "motion/react";
import { Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedHeading from "./youmay";

const Alsolike = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(
          `*[_type == "product"] | order(_createdAt desc)`
        );
        setProducts(response);
      } catch (error) {
        console.error("Error fetching recommended products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendedProducts();
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + productsPerPage);

  return (
    <div className="w-full mt-16">
   <AnimatedHeading/>
   <br />

      {loading ? (
        <div className="flex items-center justify-center py-10">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          <span className="ml-2 text-xl font-semibold text-gray-700">
            Loading...
          </span>
        </div>
      ) : products.length > 0 ? (
        <>
          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {paginatedProducts.map((product) => (
              <AnimatePresence key={product._id}>
                <motion.div
                  layout
                  initial={{ opacity: 0.2, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              </AnimatePresence>
            ))}
          </div>

          {/* Stylish Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center mt-8">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 flex items-center space-x-2 rounded-full shadow-md border border-gray-300 transition-all ${
                  currentPage === 1
                    ? "text-gray-400 cursor-not-allowed bg-gray-100"
                    : "text-blue-600 hover:bg-blue-100"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="hidden sm:block font-medium">Previous</span>
              </button>

              <span className="mx-4 text-lg font-semibold text-gray-800">
                {currentPage} / {totalPages}
              </span>

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 flex items-center space-x-2 rounded-full shadow-md border border-gray-300 transition-all ${
                  currentPage === totalPages
                    ? "text-gray-400 cursor-not-allowed bg-gray-100"
                    : "text-blue-600 hover:bg-blue-100"
                }`}
              >
                <span className="hidden sm:block font-medium">Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-lg text-gray-500">
          No similar products found.
        </p>
      )}
    </div>
  );
};

export default Alsolike;
