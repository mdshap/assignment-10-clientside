import React from "react";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto mb-20 px-6 2xl:px-0">
      <h3 className="text-2xl font-semibold  text-white mb-7">
        <span className="text-white bg-secondary pt-2 pb-1 px-4 inline-block  clip-trapezium">
          Contact Us
        </span>
        <div className="w-full bg-secondary h-0.5 -mt-0.5"></div>
      </h3>

    <section className="w-full  py-10 bg-linear-to-br from-pink-300 to-pink-200 mx-auto rounded-2xl mb-15">
      <div className="max-w-5xl flex flex-col md:flex-row justify-between items-center md:gap-10 lg:gap-20 xl:gap-30 mx-auto px-4">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-black">
            Get <span className="text-pink-600">Connected</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-600 mb-5">
            Have questions or need guidance? Send us a message.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-sm sm:text-md text-gray-600 mb-12">
            The Book Haven is a centralized platform designed for readers to discover,
review, and manage books with ease. We connect book lovers with a diverse
collection of titles, streamline the process of adding and reviewing books,
and provide transparent ratings and feedback—all in one place. Our goal is to
build a welcoming community where readers can explore, share opinions, and
make informed reading choices.

          </motion.p>
        </div>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-pink-50 w-full  rounded-2xl shadow-xl p-8 grid gap-6 min-w-70 sm:min-w-90">
          <div>
            <label className="block mb-1 font-medium text-black">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full bg-gray-100 border-gray-300 rounded-lg text-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-black">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full bg-gray-100 border-gray-300 rounded-lg text-black"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-black">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="textarea textarea-bordered rounded-lg border-gray-300 w-full bg-gray-100 text-black"></textarea>
          </div>

          <button
            type="button"
            className="btn rounded-lg bg-secondary hover:bg-primary text-white w-full  mx-auto">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
    </div>
  );
};

export default ContactUs;
