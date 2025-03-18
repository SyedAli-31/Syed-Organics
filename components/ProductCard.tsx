import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PriceView from "./PriceView";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group text-sm rounded-xl overflow-hidden shadow-lg transition-all duration-300 bg-white hover:shadow-xl">
      <div className="relative bg-gray-100 overflow-hidden rounded-t-xl">
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product?.images[0]).url()}
              width={400}
              height={400}
              alt="Product Image"
              priority
              className="w-full h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        )}
        {product?.stock === 0 && (
          <div className="absolute inset-0 bg-darkColor/50 flex items-center justify-center">
            <p className="text-lg md:text-xl text-white font-semibold text-center">
              Out of Stock
            </p>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-2 bg-white border border-t-0 rounded-b-xl">
        <h2 className="font-semibold text-base md:text-lg line-clamp-1 text-gray-900">
          {product?.name}
        </h2>
        <p className="text-sm md:text-base text-gray-600 line-clamp-2">
          {product?.intro}
        </p>
        <div className="flex items-center gap-2 md:gap-3 flex-wrap">
          <PriceView
            className="text-[13px] md:text-lg font-bold text-green-700 whitespace-nowrap"
            price={product?.price}
            discount={product?.discount}
          />
        </div>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
