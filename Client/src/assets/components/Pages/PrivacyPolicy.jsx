import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen px-4 py-10 md:py-16 bg-gradient-to-b from-pink-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 md:p-10">

        <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          At <span className="font-semibold text-secondary">Books Haven</span>,
          we respect your privacy and are committed to protecting your personal
          information. This policy explains how we collect, use, and safeguard
          your data.
        </p>

        <section className="space-y-5 text-gray-700 dark:text-gray-300">

          <div>
            <h2 className="text-xl font-semibold text-pink-500 mb-2">
              1. Information We Collect
            </h2>
            <p>
              We may collect personal information such as your name, email
              address, and activity on our platform (reviews, book uploads,
              ratings).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-pink-500 mb-2">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To authenticate users and manage accounts</li>
              <li>To improve platform functionality</li>
              <li>To display user-generated reviews and ratings</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-pink-500 mb-2">
              3. Data Security
            </h2>
            <p>
              We use secure authentication methods and industry-standard
              practices to protect your data from unauthorized access.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-pink-500 mb-2">
              4. Third-Party Services
            </h2>
            <p>
              We may use third-party services (such as Google authentication)
              which follow their own privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-pink-500 mb-2">
              5. Your Rights
            </h2>
            <p>
              You can request account deletion or data modification at any time
              by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-pink-500 mb-2">
              6. Policy Updates
            </h2>
            <p>
              We may update this policy occasionally. Continued use of Books
              Haven means you accept the updated policy.
            </p>
          </div>

        </section>

        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
