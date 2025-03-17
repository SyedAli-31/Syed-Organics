"use client";

import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-600 mb-4">About Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the story behind Syed Organics and our commitment to providing
            natural herbal products that enhance your well-being.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="prose prose-emerald max-w-none">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* Left Text Content */}
            <div>
              <p className="text-lg">
                Founded with a passion for natural healing and wellness&lsquo; Syed Organics
                has been providing high quality herbal products since its inception. Our
                journey began with a simple mission to make traditional herbal remedies
                accessible to everyone while maintaining their authenticity and effectiveness.
              </p>
              <p className="text-lg mt-4">
                Today&lsquo; we continue to honor that mission by crafting products that combine
                ancient wisdom with modern science. Each item in our collection is carefully
                formulated to provide the maximum benefit while remaining true to nature&rsquo;s
                healing properties.
              </p>
            </div>

            {/* Right Image Section */}
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/about.jpg"
                alt="Our workshop"
                fill
                priority
                className="object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
