import React from "react";
import { FaBookOpen } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer
      className="
        bg-gradient-to-b
        from-pink-100 via-pink-50 to-white
        dark:from-gray-950 dark:via-gray-900 dark:to-gray-900
        border-t border-pink-200 dark:border-gray-800
      "
    >
      <div className="max-w-[1400px] px-4 md:px-6 lg:px-8 py-14 mx-auto">

        <div className="
          flex flex-col gap-12
          lg:flex-row lg:justify-between lg:items-start
        ">

          <div className="max-w-sm text-center lg:text-left not-lg:mx-auto">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <FaBookOpen className="text-3xl text-secondary" />
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                Books <span className="text-secondary">Haven</span>
              </h2>
            </div>

            <p className="mt-4 text-sm text-gray-700 dark:text-gray-400 leading-relaxed">
              A modern platform to discover, review, and manage books with ease.
              Share your thoughts, explore new reads, and connect with fellow
              book lovers.
            </p>

            <div className="flex justify-center lg:justify-start gap-4 mt-6">
              {[
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaGithub />, link: "https://github.com/mdshap" },
                { icon: <FaLinkedinIn />, link: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-11 h-11 flex items-center justify-center
                    rounded-full
                    bg-white dark:bg-gray-800
                    shadow-md
                    text-pink-500
                    hover:bg-gradient-to-r
                    hover:from-pink-500 hover:via-rose-500 hover:to-fuchsia-500
                    hover:text-white
                    transition-all duration-300
                  "
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="
            grid grid-cols-2 gap-12
            text-center lg:text-left
          ">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Explore & Support
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
                <li className="hover:text-secondary transition">
                  <Link to="/all-books">All Books</Link>
                </li>
                <li className="hover:text-secondary transition">
                  <Link to="/reviews">Reviews</Link>
                </li>
                <li className="hover:text-secondary transition">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="hover:text-secondary transition">
                  <Link to="/contact">Contact Support</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400">
                <li className="hover:text-secondary transition">
                  <Link to="/terms-conditions">Terms & Conditions</Link>
                </li>
                <li className="hover:text-secondary transition">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="hover:text-secondary transition">
                  <Link to="/cookies">Cookie Policy</Link>
                </li>
                <li className="hover:text-secondary transition">
                  <Link to="/disclaimer">Disclaimer</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Crafted By
            </h4>

            <div className="relative group">
              <div className="
                absolute -inset-3 rounded-full
                bg-gradient-to-tr from-pink-500 via-rose-400 to-fuchsia-500
                blur-2xl opacity-50 group-hover:opacity-80 transition
              "></div>

              <div className="
                relative w-36 h-36 rounded-full
                bg-gradient-to-tr from-pink-500 via-rose-500 to-fuchsia-500
                p-[3px]
              ">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-1 overflow-hidden">
                  <img
                    src="https://i.ibb.co/RTSpdLw6/myimage.jpg"
                    alt="Md. Shaptarshi"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <p className="
                text-lg font-bold
                bg-gradient-to-r from-pink-600 via-rose-500 to-fuchsia-500
                bg-clip-text text-transparent
              ">
                Md. Shaptarshi
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-400 mt-1">
                Aspiring Software Developer
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-pink-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-700 dark:text-gray-400">
            © {new Date().getFullYear()} Books Haven · All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
