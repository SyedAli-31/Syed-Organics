"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const AboutSection: FC = () => {
  return (
    <section className="bg-green-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Text Section */}
        <div className="animate-fade-in-left opacity-100 transform transition-all duration-700 ease-out">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            About Our Products
          </h2>
          <p className="text-gray-600 mt-4">
            We take pride in creating natural herbal products using traditional recipes and modern techniques.
            Our commitment to quality ensures that you receive the best natural care products for your well-being.
          </p>
          <Link href="/about" passHref>
            <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition-transform duration-300 hover:scale-105 active:scale-95">
              Learn more
            </button>
          </Link>
        </div>

        {/* Right Image Section */}
        <div className="animate-fade-in-right opacity-100 transform transition-all duration-700 ease-out flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/about.jpg"
              alt="About our product"
              width={500}
              height={300}
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
