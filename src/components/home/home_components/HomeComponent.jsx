// HomeComponents.jsx

import React from "react";

import {
  FaArrowRight,
  FaCheckCircle,
  FaTools,
  FaBolt,
  FaShieldAlt,
  FaShippingFast,
  FaHeadset,
  FaPhoneAlt,
  FaCarSide,
  FaStar,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const HomeComponents = () => {
  const products = [
    {
      id: 1,
      badge: "Best Seller",
      category: "Brake Systems",
      title: "High-Performance Brake Kit",
      desc: "6-piston calipers with cross-drilled rotors for maximum stopping power and fade resistance.",
      image:
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 2,
      badge: "New Arrival",
      category: "Suspension",
      title: "Sport Suspension System",
      desc: "Adjustable coilover system engineered for precision handling and ride comfort.",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 3,
      badge: "Popular",
      category: "Engine Parts",
      title: "Turbo Intercooler Kit",
      desc: "Bar-and-plate intercooler with silicone couplers for maximum heat dissipation.",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 4,
      badge: "Top Rated",
      category: "Lighting",
      title: "LED Headlight Assembly",
      desc: "Plug-and-play LED projector headlights with 6000K output and DRL halos.",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* HERO SECTION */}

      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1800&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/60"></div>

        {/* ROTATING CAR ICON */}

        <div className="absolute right-10 bottom-10 hidden md:flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border-4 border-cyan-400 flex items-center justify-center animate-spin-slow bg-white/70 backdrop-blur-lg shadow-2xl">
            <FaCarSide className="text-4xl text-cyan-500" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}

          <div>
            <p className="uppercase tracking-[6px] text-cyan-500 font-black text-sm animate-pulse">
              PREMIUM AUTOMOTIVE SOLUTIONS
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mt-5 text-slate-900 hover:scale-105 transition-all duration-500">
              Drive Beyond
              <br />

              <span className="text-cyan-500">
                Limits.
              </span>
            </h1>

            <p className="text-slate-700 text-lg leading-9 mt-8 max-w-2xl">
              Precision-engineered auto parts and expert
              service. Whether you're building a weekend
              racer or keeping your daily driver in top
              shape — we have exactly what you need.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <Link to="/products">
                <button className="flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-500 shadow-xl">
                  Explore Products
                  <FaArrowRight />
                </button>
              </Link>

              <Link to="/contact">
                <button className="border border-slate-300 text-slate-800 px-8 py-4 rounded-2xl font-bold hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-500">
                  Contact Us
                </button>
              </Link>
            </div>

            {/* STATS */}

            <div className="flex flex-wrap gap-10 mt-14 border-t border-slate-300 pt-8">
              <div>
                <h2 className="text-5xl font-black text-slate-900">
                  15K+
                </h2>

                <p className="text-slate-600 mt-2 font-semibold">
                  Products
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-black text-slate-900">
                  18yr
                </h2>

                <p className="text-slate-600 mt-2 font-semibold">
                  Experience
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-black text-slate-900">
                  98%
                </h2>

                <p className="text-slate-600 mt-2 font-semibold">
                  Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="hidden lg:flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="w-full max-w-[550px] rounded-[40px] shadow-2xl hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}

      <section className="py-16 px-6 md:px-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div>
              <p className="uppercase tracking-[5px] text-cyan-500 font-bold">
                Featured Products
              </p>

              <h2 className="text-5xl font-black mt-4 text-slate-900 hover:translate-x-2 transition-all duration-500">
                Top-Selling Parts
              </h2>
            </div>

            <Link to="/products">
              <button className="flex items-center gap-3 text-cyan-500 font-bold hover:gap-5 transition-all duration-500">
                View All Products
                <FaArrowRight />
              </button>
            </Link>
          </div>

          {/* PRODUCT CAROUSEL */}

          <div className="overflow-hidden mt-14">
            <div className="flex gap-8 animate-scroll w-max">
              {[...products, ...products].map(
                (item, index) => (
                  <div
                    key={index}
                    className="w-[330px] bg-white rounded-[30px] overflow-hidden shadow-xl border border-slate-100 hover:-translate-y-3 transition-all duration-500"
                  >
                    <div className="overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-64 w-full object-cover hover:scale-110 transition-all duration-700"
                      />

                      <span className="absolute top-5 left-5 bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        {item.badge}
                      </span>
                    </div>

                    <div className="p-7">
                      <p className="text-cyan-500 font-bold">
                        {item.category}
                      </p>

                      <h3 className="text-3xl font-black mt-4 text-slate-900">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 leading-8 mt-5">
                        {item.desc}
                      </p>

                      <Link to="/products">
                        <button className="flex items-center gap-3 mt-8 text-cyan-500 font-bold hover:gap-5 transition-all duration-500">
                          View Details
                          <FaArrowRight />
                        </button>
                      </Link>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <style>
          {`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }

              100% {
                transform: translateX(-50%);
              }
            }

            .animate-scroll {
              animation: scroll 35s linear infinite;
            }

            .animate-scroll:hover {
              animation-play-state: paused;
            }

            @keyframes spinSlow {
              from {
                transform: rotate(0deg);
              }

              to {
                transform: rotate(360deg);
              }
            }

            .animate-spin-slow {
              animation: spinSlow 6s linear infinite;
            }
          `}
        </style>
      </section>

      {/* WHY CHOOSE */}

      <section className="py-16 px-6 md:px-14 bg-[#f7fbff]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="uppercase tracking-[5px] text-cyan-500 font-bold">
              Why Shokon Auto
            </p>

            <h2 className="text-5xl font-black mt-4 text-slate-900 hover:scale-105 transition-all duration-500">
              Built on Trust and Performance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {[
              {
                icon: <FaStar />,
                title: "Premium Quality",
                desc: "OEM-grade and aftermarket parts sourced from certified manufacturers worldwide.",
              },

              {
                icon: <FaShippingFast />,
                title: "Fast Delivery",
                desc: "Same-day dispatch on in-stock items. Free shipping on orders over $150.",
              },

              {
                icon: <FaShieldAlt />,
                title: "Trusted Service",
                desc: "2-year warranty on all products. 30-day no-hassle returns policy.",
              },

              {
                icon: <FaHeadset />,
                title: "Expert Support",
                desc: "Our certified technicians are available 7 days a week to assist you.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-100 text-cyan-500 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-black mt-6 text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-8 mt-5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section className="py-16 px-6 md:px-14">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* IMAGE */}

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="rounded-[40px] shadow-2xl hover:scale-105 transition-all duration-700"
            />

            <div className="absolute -bottom-8 right-8 bg-[#1e293b] text-white p-8 rounded-3xl shadow-2xl">
              <p className="text-cyan-400 font-bold">
                Industry Leader
              </p>

              <h2 className="text-5xl font-black mt-3">
                18+
              </h2>

              <p className="mt-2 text-slate-300 font-semibold">
                Years in Business
              </p>
            </div>
          </div>

          {/* CONTENT */}

          <div>
            <p className="uppercase tracking-[5px] text-cyan-500 font-bold">
              About Shokon Auto
            </p>

            <h2 className="text-5xl font-black mt-5 leading-tight text-slate-900">
              Detroit's Premier
              <br />
              Automotive Source
            </h2>

            <p className="mt-8 text-slate-600 leading-9 text-lg">
              Founded in 2008, Shokon Auto began as a
              single-bay workshop with a mission: deliver
              the parts performance drivers need without
              compromise.
            </p>

            <p className="mt-6 text-slate-600 leading-9 text-lg">
              Today, we stock over 15,000 SKUs from 200+
              top brands and serve customers across North
              America.
            </p>

            <div className="space-y-5 mt-10">
              {[
                "ISO-certified quality control on all inventory",
                "Partnerships with 200+ OEM and aftermarket brands",
                "Dedicated tech support from certified mechanics",
                "30-day hassle-free returns on all orders",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <FaCheckCircle className="text-cyan-500 text-2xl" />

                  <p className="text-slate-700 font-semibold">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-3 mt-10 bg-[#1e293b] text-white px-8 py-4 rounded-2xl font-bold hover:bg-cyan-500 transition-all duration-500">
              Learn More
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="py-16 px-6 md:px-14 bg-[#f7fbff]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="uppercase tracking-[5px] text-cyan-500 font-bold">
              Our Services
            </p>

            <h2 className="text-5xl font-black mt-4 text-slate-900">
              Full-Spectrum Automotive Support
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            {[
              {
                icon: <FaTools />,
                title: "Parts Supply",
                desc: "OEM and performance aftermarket parts for all makes and models.",
              },

              {
                icon: <FaBolt />,
                title: "Performance Tuning",
                desc: "Custom dyno tuning and ECU remapping by certified specialists.",
              },

              {
                icon: <FaShieldAlt />,
                title: "Warranty & Support",
                desc: "Industry-leading 2-year warranty with 24/7 technical assistance.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-10 shadow-xl hover:-translate-y-3 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-100 text-cyan-500 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-black mt-6 text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 text-slate-600 leading-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-16 px-6 md:px-14 bg-gradient-to-r from-cyan-400 to-blue-500">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-black text-white hover:scale-105 transition-all duration-500">
            Need Automotive Solutions?
          </h2>

          <p className="text-white/90 text-xl leading-9 mt-8">
            Our expert team is ready to help you find the
            right parts and services for your vehicle. Get
            in touch today.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <Link to="/contact">
              <button className="bg-white text-cyan-500 px-8 py-4 rounded-2xl font-black hover:scale-105 transition-all duration-500 shadow-xl">
                Contact Our Team
              </button>
            </Link>

            <Link to="/products">
              <button className="border border-white text-white px-8 py-4 rounded-2xl font-black hover:bg-white hover:text-cyan-500 transition-all duration-500">
                Browse Products
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeComponents;