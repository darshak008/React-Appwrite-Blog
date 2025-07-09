import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../index";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white pt-12 pb-8 mt-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap gap-y-10 justify-between">
          {/* Logo & Copyright */}
          <div className="w-full md:w-1/2 lg:w-5/12">
            <div className="mb-6">
              <Logo width="120px" />
            </div>
            <p className="text-sm text-indigo-100">
              &copy; 2025 DevBlog. All Rights Reserved.
            </p>
          </div>

          {/* Column 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/12">
            <h3 className="text-sm font-semibold uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-white transition" to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Affiliate
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/12">
            <h3 className="text-sm font-semibold uppercase mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-white transition" to="/">
                  Account
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Help
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-3/12">
            <h3 className="text-sm font-semibold uppercase mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-white transition" to="/">
                  Terms
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Privacy
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
