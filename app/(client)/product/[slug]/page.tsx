"use client";

import { useState } from "react";
import Image from "next/image";

interface Product {
  name?: string;
  images?: { asset?: { url?: string } }[];
  intro?: string;
  description?: string;
  price?: number;
  discount?: number;
  stock?: number;
  status?: "new" | "hot" | "sale";
  variant?: "beauty" | "herbal" | "skincare" | "handwash" | "others";
}

interface SingleProdProps {
  product: Product;
}

const SingleProd: React.FC<SingleProdProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  // Ensure stock is always defined (default to 0 if undefined)
  const stock = product?.stock ?? 0;

  const handleIncrease = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="p-5">
      {/* Product Images */}
      {product.images && product.images.length > 0 && (
        <Image
          src={product.images[0].asset?.url || "/placeholder.jpg"}
          alt={product.name || "Product Image"}
          width={500}
          height={500}
        />
      )}

      {/* Product Details */}
      <h1 className="text-xl font-bold">{product.name}</h1>
      <p className="text-gray-600">{product.intro}</p>
      <p className="text-gray-800">{product.description}</p>

      {/* Pricing */}
      <p className="text-lg font-semibold">
        ${product.price}{" "}
        {product.discount && <span className="text-red-500">-{product.discount}%</span>}
      </p>

      {/* Stock Status */}
      <p className={`text-sm ${stock > 0 ? "text-green-500" : "text-red-500"}`}>
        {stock > 0 ? `In Stock (${stock} available)` : "Out of Stock"}
      </p>

      {/* Quantity Selector */}
      {stock > 0 && (
        <div className="flex items-center mt-2">
          <button onClick={handleDecrease} className="px-3 py-1 bg-gray-200">
            -
          </button>
          <span className="px-4">{quantity}</span>
          <button onClick={handleIncrease} className="px-3 py-1 bg-gray-200">
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default SingleProd;
