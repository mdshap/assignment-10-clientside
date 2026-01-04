import React from "react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen px-4 py-10 md:py-16 bg-gradient-to-b from-pink-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 md:p-10">

        <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
          Disclaimer
        </h1>

        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          The information provided on <span className="font-semibold text-secondary">Books Haven</span> is
          for general informational purposes only.
        </p>

        <section className="space-y-6 text-gray-700 dark:text-gray-300">

          <div>
            <h2 className="text-xl font-semibold text-pink-500 mb-2">
              User-Generated Content
            </h2>
            <p>
              Reviews, ratings, and comments published on this platform are
              created by users. Books Haven does not guarantee the accuracy,
              completeness, or reliability of user-submitted content.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-pink-500 mb-2">
              External Links
            </h2>
            <p>
              Our platform may contain links to external websites. We do not
              control or endorse the content, privacy policies, or practices of
              third-party sites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-pink-500 mb-2">
              No Professional Advice
            </h2>
            <p>
              Content on Books Haven should not be considered professional,
              legal, or academic advice. Users are encouraged to verify
              information independently.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-pink-500 mb-2">
              Limitation of Liability
            </h2>
            <p>
              Books Haven will not be held responsible for any losses or damages
              arising from the use of this platform.
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

export default Disclaimer;
