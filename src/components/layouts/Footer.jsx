// Footer.jsx

import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCarSide,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f5fbff] border-t border-slate-200 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* MAIN FOOTER */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* BRAND */}

          <div>
            {/* LOGO */}

            <div className="flex items-center gap-4">
              {/* CAR LOGO */}

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-500">
                <FaCarSide className="text-white text-3xl" />
              </div>

              {/* LOGO TEXT */}

              <div className="leading-none">
                <h1
                  className="text-3xl text-black tracking-[4px]"
                  style={{
                    fontFamily: "'Pacifico', cursive",
                  }}
                >
                  SHOKON
                </h1>

                <span
                  className="text-cyan-500 text-2xl tracking-[8px]"
                  style={{
                    fontFamily: "'Pacifico', cursive",
                  }}
                >
                  AUTO
                </span>
              </div>
            </div>

            <p className="mt-6 text-slate-600 leading-8">
              Your trusted partner for premium automotive
              solutions. Quality parts, expert service,
              and unmatched reliability since 2008.
            </p>

            {/* SOCIAL */}

            <div className="flex gap-4 mt-8">
              {[
                <FaFacebookF />,
                <FaTwitter />,
                <FaInstagram />,
                <FaYoutube />,
              ].map((icon, index) => (
                <a
                  key={index}
                  href="/"
                  className="w-12 h-12 rounded-2xl bg-white shadow-lg hover:bg-cyan-500 hover:text-white transition-all duration-500 flex items-center justify-center text-slate-700"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}

          <div>
            <h2 className="text-2xl font-black mb-6 text-slate-900">
              Quick Links
            </h2>

            <div className="space-y-4">
              <Link
                to="/"
                className="block text-slate-600 hover:text-cyan-500 font-semibold transition-all duration-500"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="block text-slate-600 hover:text-cyan-500 font-semibold transition-all duration-500"
              >
                Products
              </Link>

              <Link
                to="/contacts"
                className="block text-slate-600 hover:text-cyan-500 font-semibold transition-all duration-500"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* PRODUCTS */}

          <div>
            <h2 className="text-2xl font-black mb-6 text-slate-900">
              Products
            </h2>

            <div className="space-y-4">
              {[
                "Engine Parts",
                "Brake Systems",
                "Suspension",
                "Lighting",
                "Exhaust Systems",
              ].map((item, index) => (
                <a
                  key={index}
                  href="/"
                  className="block text-slate-600 hover:text-cyan-500 font-semibold transition-all duration-500"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}

          <div>
            <h2 className="text-2xl font-black mb-6 text-slate-900">
              Contact
            </h2>

            <div className="space-y-5">
              {/* ADDRESS */}

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500 text-white flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>

                <p className="text-slate-600 leading-7">
                  4821 Auto Drive,
                  <br />
                  Detroit, MI 48201
                </p>
              </div>

              {/* PHONE */}

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500 text-white flex items-center justify-center">
                  <FaPhoneAlt />
                </div>

                <p className="text-slate-600">
                  +1 (313) 555-0123
                </p>
              </div>

              {/* EMAIL */}

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500 text-white flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <p className="text-slate-600">
                  info@shokon.auto
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="border-t border-slate-300 mt-12 pt-6 flex flex-col lg:flex-row justify-between items-center gap-5">
          <p className="text-slate-500 text-sm text-center">
            © 2026 Shokon Auto. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="/"
              className="text-slate-500 hover:text-cyan-500 transition-all duration-500 text-sm"
            >
              Privacy Policy
            </a>

            <a
              href="/"
              className="text-slate-500 hover:text-cyan-500 transition-all duration-500 text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;