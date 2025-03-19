import Container from "@/components/Container";
import React from "react";

const TermsPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-80">
      <Container className="max-w-3xl px-6 sm:px-8 lg:px-10 py-12 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-extrabold text-green-500 text-center drop-shadow-lg">
          Terms &amp; Conditions
        </h1>
        <p className="text-gray-300 text-center mt-2">
          Please read these terms carefully before using Syed Organics&apos; services.
        </p>

        <div className="mt-6 space-y-6 text-gray-200">
          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing and using <span className="text-green-300 font-semibold">Syed Organics</span>&apos; services, you agree to abide by these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-2">2. Use of Services</h2>
            <p>
              You agree to use <span className="text-green-300 font-semibold">Syed Organics</span>&apos; products and services responsibly, solely for personal wellness and in compliance with these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-2">3. Intellectual Property</h2>
            <p>
              All herbal formulas, branding, and content on <span className="text-green-300 font-semibold">Syed Organics</span> are our exclusive property, protected by intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-2">4. Product Disclaimer</h2>
            <p>
              Our herbal products are crafted for wellness support. They are not intended to diagnose, treat, cure, or prevent any medical condition. Please consult a healthcare provider before use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-2">5. Governing Law</h2>
            <p>
              These Terms &amp; Conditions are governed by the laws of the jurisdiction in which <span className="text-green-300 font-semibold">Syed Organics</span> operates.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default TermsPage;
