import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }: { product: Product }) => {
  const actualPrice: number = product?.price ?? 0;
  const discountAmount: number = product?.discount ?? 0;
  const discountedPrice: number = actualPrice - discountAmount;

  return (
    <div className="group text-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300 bg-white hover:shadow-xl border">
      <div className="relative bg-gray-100 overflow-hidden rounded-t-xl">
         {/* ✅ Discount Badge (Fixed with z-index) */}
        {discountAmount > 0 && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs md:text-sm font-bold px-2 py-1 rounded z-10">
            -{discountAmount}%
          </div>
        )}

        {/* Product Image Hover Effect (With Error Handling) */}
        {Array.isArray(product?.images) && product.images.length > 1 ? (
          <Link href={`/product/${product?.slug?.current}`} className="block relative w-full">
            {/* Default Image */}
            <Image
              src={urlFor(product.images[0]).url()}
              width={400}
              height={400}
              alt="Product Image"
              priority
              className="w-full h-auto object-cover transition-opacity duration-500 group-hover:opacity-0"
            />

            {/* Hover Image */}
            <Image
              src={urlFor(product.images[1]).url()}
              width={400}
              height={400}
              alt="Product Hover Image"
              priority
              className="w-full h-auto object-cover absolute top-0 left-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </Link>
        ) : (
          // Agar sirf ek image ho ya images undefined ho, to default image show karega
          <Link href={`/product/${product?.slug?.current}`} className="block">
            <Image
              src={urlFor(product?.images?.[0] || "").url()}
              width={400}
              height={400}
              alt="Product Image"
              priority
              className="w-full h-auto object-cover"
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
        <h2 className="font-semibold text-base md:text-lg text-gray-900 line-clamp-2">
          {product?.name}
        </h2>
        <p className="font-medium text-[12px] md:text-[14px] text-gray-700 line-clamp-2">
          {product?.intro}
        </p>

        {/* Price Section */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 md:gap-3 text-lg md:text-xl font-semibold">
            {discountAmount > 0 && (
              <span className="text-gray-500 line-through text-sm">{`Rs ${actualPrice}`}</span>
            )}
            <span className="text-red-600">{`Rs ${discountedPrice}`}</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <AddToCartButton
          product={product}
          className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 w-full py-2 rounded-md font-semibold"
        />
      </div>
    </div>
  );
};

export default ProductCard;
