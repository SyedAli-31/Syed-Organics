import Container from "@/components/Container";
import React from "react";

const PrivacyPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-80">
      <Container className="max-w-3xl px-6 sm:px-8 lg:px-10 py-12 backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-extrabold text-green-500 text-center drop-shadow-lg">
          Privacy Policy
        </h1>
        <p className="text-gray-300 text-center mt-2">
          Your privacy is important to <span className="text-green-300 font-semibold">Syed Organics</span>. Read how we handle your data.
        </p>

        <div className="mt-6 space-y-6 text-gray-200">
          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-2">1. Information Collection</h2>
            <p>
              We collect the necessary information to provide you with the best herbal organic products and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-2">2. Use of Information</h2>
            <p>
              Your information helps us improve our products, provide support, and keep you updated about <span className="text-green-300 font-semibold">Syed Organics</span>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-2">3. Information Sharing</h2>
            <p>
              We respect your privacy and do not sell or share your personal data with third parties without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-2">4. Data Security</h2>
            <p>
              We implement advanced security measures to keep your data safe and protected from unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-2">5. Your Rights</h2>
            <p>
              You can request to access, update, or delete your personal information. Contact our support team for assistance.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPage;
