// Navbar.jsx

import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaCarSide,
} from "react-icons/fa";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "Contact",
      path: "/contacts",
    },
  ];

  return (
    <header
      className="
        sticky
        top-0
        z-50
        backdrop-blur-2xl
        bg-white/20
        border-b
        border-white/30
        shadow-lg
      "
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-3 md:py-4 flex items-center justify-between">
        {/* LOGO */}

        <Link to="/">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 cursor-pointer group">
            {/* CAR ICON */}

            <div
              className="
                w-12 h-12
                sm:w-14 sm:h-14
                md:w-16 md:h-16
                rounded-2xl
                bg-white/20
                backdrop-blur-xl
                border border-white/30
                flex items-center justify-center
                shadow-xl
                transition-all
                duration-500
                group-hover:scale-110
              "
            >
              <FaCarSide className="text-cyan-500 text-2xl md:text-3xl" />
            </div>

            {/* TEXT */}

            <div className="leading-none">
              <h1
                className="
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  lg:text-4xl
                  text-black
                  tracking-[2px]
                  md:tracking-[4px]
                "
                style={{
                  fontFamily: "'Pacifico', cursive",
                }}
              >
                SHOKON
              </h1>

              <span
                className="
                  text-cyan-500
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  lg:text-3xl
                  tracking-[4px]
                  md:tracking-[8px]
                "
                style={{
                  fontFamily: "'Pacifico', cursive",
                }}
              >
                AUTO
              </span>
            </div>
          </div>
        </Link>

        {/* DESKTOP MENU */}

        <ul className="hidden md:flex items-center gap-8 lg:gap-10 font-bold text-lg">
          {navLinks.map((item) => (
            <Link key={item.path} to={item.path}>
              <li
                className={`
                  relative
                  transition-all
                  duration-500
                  hover:text-cyan-500
                  ${
                    location.pathname === item.path
                      ? "text-cyan-500"
                      : "text-slate-700"
                  }
                `}
              >
                {item.name}

                {location.pathname === item.path && (
                  <span className="absolute -bottom-3 left-0 w-full h-[4px] rounded-full bg-cyan-500"></span>
                )}
              </li>
            </Link>
          ))}
        </ul>

        {/* DESKTOP BUTTON */}

        <div className="hidden md:flex">
          <button
            onClick={() => navigate("/contacts")}
            className="
              flex
              items-center
              gap-3
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              text-white
              px-6
              lg:px-7
              py-3
              lg:py-4
              rounded-2xl
              font-bold
              hover:scale-105
              transition-all
              duration-500
              shadow-xl
            "
          >
            <FaPhoneAlt />
            Get Quote
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            md:hidden
            w-11
            h-11
            rounded-xl
            bg-white/20
            backdrop-blur-xl
            border
            border-white/30
            flex
            items-center
            justify-center
            text-slate-800
            text-2xl
          "
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* MOBILE MENU */}

      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-500
          ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div className="px-4 pb-4">
          <div
            className="
              bg-white/20
              backdrop-blur-2xl
              border
              border-white/30
              rounded-3xl
              shadow-2xl
              p-6
            "
          >
            <ul className="space-y-5">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                >
                  <li
                    className={`
                      py-2
                      font-bold
                      text-lg
                      transition-all
                      duration-300
                      ${
                        location.pathname === item.path
                          ? "text-cyan-500"
                          : "text-slate-700"
                      }
                    `}
                  >
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>

            <button
              onClick={() => {
                navigate("/contacts");
                setMenuOpen(false);
              }}
              className="
                w-full
                flex
                justify-center
                items-center
                gap-3
                mt-6
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                text-white
                py-4
                rounded-2xl
                font-bold
                shadow-lg
              "
            >
              <FaPhoneAlt />
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;