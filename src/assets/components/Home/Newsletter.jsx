
import React, { useState } from "react";
import { FaPaperPlane, FaCheck } from "react-icons/fa";

export default function Newsletter({ initialEmail = "" }) {
  const [email, setEmail] = useState(initialEmail);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const validateEmail = (e) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return re.test(e);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setError("");
    if (!email.trim()) {
      setError("Please enter an email address.");
      return;
    }
    if (!validateEmail(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    try {
      setStatus("success");
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setStatus("idle"), 1000);
    } catch (err) {
        console.log(err)
      setStatus("error");
      setError("Subscription failed. Try again.");
    }
  };

  const reset = () => {
    setSubscribed(false);
    setStatus("idle");
    setError("");
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto mb-20 px-6 2xl:px-0">
      <h3 className="text-2xl font-semibold  text-white mb-7">
        <span className="text-white bg-secondary pt-2 pb-1 px-4 inline-block  clip-trapezium">
          Newsletter
        </span>
        <div className="w-full bg-secondary h-0.5 -mt-0.5"></div>
      </h3>
    <section
      aria-labelledby="newsletter-title"
      className="px-4 sm:px-0 w-full max-w-[1400px] mx-auto">
      <div className=" mx-auto">
        <div className="bg-base-200 text-white border border-base-200 rounded-2xl p-6 sm:p-8 shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h3
                id="newsletter-title"
                className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
                Subscribe to <span className="text-secondary">Newsletter</span> 
              </h3>
              <p className="mt-2 text-sm text-black dark:text-white">
                Weekly tips, code snacks and new releases — hand-picked and
                delivered once a week.
              </p>

              <ul className="mt-4 text-sm  space-y-2">
                <li className="flex items-start gap-3">
                  <span className="inline-block mt-1 w-3 h-3 rounded-full bg-secondary" />
                  <span className="text-black dark:text-white">Concise tutorials & code examples</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block mt-1 w-3 h-3 rounded-full bg-secondary" />
                  <span className="text-black dark:text-white">Early access and community perks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="inline-block mt-1 w-3 h-3 rounded-full bg-secondary" />
                  <span className="text-black dark:text-white">No spam — unsubscribe any time</span>
                </li>
              </ul>
            </div>

            <div>
              {subscribed && status === "success" ? (
                <div className="flex items-center gap-4 bg-secondary/5 border border-secondary/10 rounded-xl p-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary">
                    <FaCheck className="text-black w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-base-content">
                      You're subscribed!
                    </p>
                    <p className="text-sm text-base-content/70">
                      Expect our next email soon.
                    </p>
                  </div>
                  <div className="ml-auto">
                    <button
                      onClick={reset}
                      className="btn btn-ghost btn-sm text-xs"
                      aria-label="Reset subscription">
                      Reset
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex gap-3">
                    <label htmlFor="nh-email" className="sr-only text-secondary">
                      Email address
                    </label>

                    <input
                      id="nh-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white input input-lg rounded-xl px-4 py-3  focus:outline-none focus:ring-2 focus:ring-primary/40 text-black border-secondary"
                      aria-invalid={!!error}
                      aria-describedby={error ? "nh-error" : undefined}
                    />

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-xl px-4 py-3 shadow-sm bg-secondary text-white font-semibold hover:opacity-95 disabled:opacity-60"
                      aria-label="Subscribe"
                      disabled={status === "sending"}>
                      <span className="text-sm text-secondary text-white ">
                        {status === "sending" ? "Subscribing..." : "Subscribe"}
                      </span>
                      <FaPaperPlane className="w-4 h-4 text-white" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    
                    {error ? (
                      <p id="nh-error" className="text-xs text-red-600">
                        {error}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="mt-6 h-1 rounded-full w-full bg-primary dark:bg-white" />
        </div>
      </div>
    </section>
    </div>
  );
}
