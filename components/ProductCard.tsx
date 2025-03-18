import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }: { product: Product }) => {
  // Prices from backend
  const actualPrice: number = product?.price ?? 0; // Original Price
  const discountAmount: number = product?.discount ?? 0; // Discount from Backend
  const discountedPrice: number = actualPrice - discountAmount; // Discounted Price

  return (
    <div className="group text-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300 bg-white hover:shadow-xl border">
      <div className="relative bg-gray-100 overflow-hidden rounded-t-xl">
        {/* Discount Badge from Backend */}
        {discountAmount > 0 && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs md:text-sm font-bold px-2 py-1 rounded">
            -{discountAmount}%
          </div>
        )}

        {/* Product Image */}
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product?.images[0]).url()}
              width={400}
              height={400}
              alt="Product Image"
              priority
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        )}

        {/* Out of Stock Overlay */}
        {product?.stock === 0 && (
          <div className="absolute inset-0 bg-darkColor/50 flex items-center justify-center">
            <p className="text-lg md:text-xl text-white font-semibold text-center">
              Out of Stock
            </p>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-2 bg-white border-t-0 rounded-b-xl text-center">
        {/* Product Name */}
        <h2 className="font-semibold text-base md:text-lg text-gray-900 line-clamp-2">
          {product?.name}
          
        </h2>
        <p className="font-medium text-[12px] md:text-[14px] text-gray-700 line-clamp-2">{product?.intro}</p>

        {/* Price Section (Grey Actual Price, Red Discounted Price) */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 md:gap-3 text-lg md:text-xl font-semibold">
            {discountAmount > 0 && (
              <span className="text-gray-500 line-through text-sm">{`Rs ${actualPrice}`}</span>
            )}
            <span className="text-red-600">{`Rs ${discountedPrice}`}</span>
          </div>
        </div>

        {/* Add to Cart Button (Full Width, Red Border) */}
        <AddToCartButton
          product={product}
          className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 w-full py-2 rounded-md font-semibold"
        />
      </div>
    </div>
  );
};

export default ProductCard;
