import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              
              <div className="">
                <FaBookOpen></FaBookOpen>
                <div className="text-lg font-semibold text-white">Books <span className="text-secondary">Haven</span> </div>
                <div className="text-sm text-gray-400">A cozy place for readers</div>
              </div>
            </div>

            <p className="text-sm text-gray-400 max-w-sm">
              Discover, share and collect books. Join our community to explore curated
              collections and find your next favorite read.
            </p>

            <div className="flex gap-3">
              
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Explore</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a className="hover:text-white" href="/all-books">All Books</a></li>
                <li><a className="hover:text-white" href="/categories">Categories</a></li>
                <li><a className="hover:text-white" href="/top-rated">Top Rated</a></li>
                <li><a className="hover:text-white" href="/blog">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a className="hover:text-white" href="/about">About Us</a></li>
                <li><a className="hover:text-white" href="/careers">Careers</a></li>
                <li><a className="hover:text-white" href="/press">Press</a></li>
                <li><a className="hover:text-white" href="/terms">Terms</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            

            <div className="mt-6">
              <div className="flex items-center gap-3">
                <a className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gray-700" href="#" aria-label="Facebook">f</a>
                <a className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gray-700" href="#" aria-label="Twitter">t</a>
                <a className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gray-700" href="#" aria-label="Instagram">i</a>
                <a className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gray-700" href="#" aria-label="LinkedIn">in</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Books Haven. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="text-sm text-gray-400 hover:text-white" href="/privacy">Privacy</a>
            <a className="text-sm text-gray-400 hover:text-white" href="/help">Help</a>
            <a className="text-sm text-gray-400 hover:text-white" href="/sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
