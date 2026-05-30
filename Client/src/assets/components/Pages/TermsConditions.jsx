import React from "react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen px-4 py-10 md:py-16 bg-gradient-to-b from-pink-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 md:p-10">

        <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Welcome to <span className="font-semibold text-secondary">Books Haven</span>.
          By accessing or using our platform, you agree to comply with the
          following terms and conditions.
        </p>

        <section className="space-y-5 text-gray-700 dark:text-gray-300">

          <div>
            <h2 className="text-xl font-semibold text-pink-500 mb-2">
              1. User Accounts
            </h2>
            <p>
              Users must provide accurate information during registration and
              are responsible for maintaining account security.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-pink-500 mb-2">
              2. User Content
            </h2>
            <p>
              Reviews, ratings, and uploaded books must be respectful and
              relevant. Inappropriate content may be removed.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-pink-500 mb-2">
              3. Intellectual Property
            </h2>
            <p>
              All platform content, excluding user submissions, belongs to
              Books Haven and may not be copied without permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-pink-500 mb-2">
              4. Prohibited Activities
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Spamming or misuse of the platform</li>
              <li>Uploading copyrighted content illegally</li>
              <li>Attempting to breach platform security</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-pink-500 mb-2">
              5. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate accounts that violate
              these terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-pink-500 mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              Books Haven is not liable for user-generated content or external
              links provided on the platform.
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

export default TermsConditions;
