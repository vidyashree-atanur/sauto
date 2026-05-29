// ProductComponents.jsx

import React, { useMemo, useState } from "react";

import {
  FaSearch,
  FaStar,
  FaChevronDown,
  FaTimes,
  FaShoppingCart,
  FaCarSide,
  FaTools,
  FaBolt,
  FaArrowRight,
} from "react-icons/fa";

const ProductComponents = () => {
  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const [sortOption, setSortOption] =
    useState("Relevance");

  const [showDropdown, setShowDropdown] =
    useState(false);

  const [visibleProducts, setVisibleProducts] =
    useState(9);

  const categories = [
    "All",
    "Engine Parts",
    "Brake Systems",
    "Suspension",
    "Lighting",
    "Exhaust Systems",
  ];

  const products = [
    {
      id: 1,
      title: "6-Piston Brake Kit",
      category: "Brake Systems",
      brand: "Brembo",
      price: 899,
      rating: 4.9,
      reviews: 420,
      badge: "Best Seller",
      image:
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1200&auto=format&fit=crop",
      description:
        "Professional racing brake system with maximum stopping power.",
    },

    {
      id: 2,
      title: "Turbo Engine Kit",
      category: "Engine Parts",
      brand: "Garrett",
      price: 1499,
      rating: 4.8,
      reviews: 380,
      badge: "Popular",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop",
      description:
        "Advanced turbo engine performance upgrade system.",
    },

    {
      id: 3,
      title: "LED Projector Lights",
      category: "Lighting",
      brand: "Morimoto",
      price: 399,
      rating: 4.7,
      reviews: 210,
      badge: "Premium",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
      description:
        "Ultra-bright LED lighting with projector technology.",
    },

    {
      id: 4,
      title: "Sports Suspension Kit",
      category: "Suspension",
      brand: "KW",
      price: 1199,
      rating: 4.9,
      reviews: 520,
      badge: "Top Rated",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop",
      description:
        "Professional adjustable sports suspension system.",
    },

    {
      id: 5,
      title: "Performance Exhaust",
      category: "Exhaust Systems",
      brand: "Magnaflow",
      price: 799,
      rating: 4.6,
      reviews: 300,
      badge: "Trending",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
      description:
        "Premium sports exhaust system for powerful sound.",
    },

    {
      id: 6,
      title: "Cold Air Intake",
      category: "Engine Parts",
      brand: "K&N",
      price: 299,
      rating: 4.8,
      reviews: 430,
      badge: "Hot",
      image:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200&auto=format&fit=crop",
      description:
        "Cold air intake system for better performance.",
    },
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(
      (item) =>
        (selectedCategory === "All" ||
          item.category === selectedCategory) &&
        item.title
          .toLowerCase()
          .includes(search.toLowerCase())
    );

    switch (sortOption) {
      case "Price Low to High":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "Price High to Low":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "Top Rated":
        filtered.sort((a, b) => b.rating - a.rating);
        break;

      default:
        break;
    }

    return filtered;
  }, [search, selectedCategory, sortOption]);

  return (
    <div className="min-h-screen bg-[#f5fbff] overflow-hidden">
      {/* TOP BAR */}

      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3">
        <marquee scrollAmount="8" className="font-bold">
          SHOKON AUTO • Premium Automotive Parts •
          Turbo Systems • Brake Systems • Engine Kits •
          Suspension • Trusted By 200+ Brands
        </marquee>
      </div>

      {/* HERO */}

      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <p className="uppercase tracking-[5px] text-cyan-500 font-bold">
            Product Catalog
          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-5 leading-tight text-slate-900 hover:scale-105 transition-all duration-500">
            Explore Automotive Products
          </h1>

          <p className="text-lg md:text-xl mt-8 max-w-3xl leading-9 text-slate-600">
            Discover precision-engineered automotive
            solutions from trusted global brands.
          </p>
        </div>
      </section>

      {/* SEARCH */}

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-5 items-center">
          {/* SEARCH BAR */}

          <div className="flex-1 bg-white rounded-2xl px-6 py-5 flex items-center gap-4 border border-slate-200 shadow-lg">
            <FaSearch className="text-cyan-500 text-xl" />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full outline-none bg-transparent text-lg"
            />

            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all duration-500">
              Search
            </button>
          </div>

          {/* FILTER */}

          <div className="relative">
            <button
              onClick={() =>
                setShowDropdown(!showDropdown)
              }
              className="flex items-center gap-3 px-6 py-5 rounded-2xl border border-slate-200 shadow-lg font-semibold bg-white"
            >
              {sortOption}

              <FaChevronDown />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-3 w-64 rounded-2xl overflow-hidden shadow-2xl z-50 bg-white">
                {[
                  "Relevance",
                  "Price Low to High",
                  "Price High to Low",
                  "Top Rated",
                ].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortOption(option);
                      setShowDropdown(false);
                    }}
                    className={`w-full text-left px-6 py-4 transition-all ${
                      sortOption === option
                        ? "bg-cyan-500 text-white"
                        : "hover:bg-slate-100"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MAIN */}

      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-[280px_1fr] gap-8">
        {/* SIDEBAR */}

        <div className="bg-white rounded-3xl p-6 h-fit shadow-xl sticky top-28">
          <div className="flex items-center gap-3 mb-8">
            <FaTools className="text-cyan-500 text-2xl" />

            <h2 className="uppercase tracking-[3px] font-bold">
              Categories
            </h2>
          </div>

          <div className="space-y-3">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() =>
                  setSelectedCategory(item)
                }
                className={`w-full text-left px-5 py-4 rounded-2xl font-bold transition-all duration-500 ${
                  selectedCategory === item
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    : "hover:bg-slate-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* CARD */}

          <div className="mt-10 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-6 text-white">
            <FaBolt className="text-4xl mb-4" />

            <h3 className="text-2xl font-black">
              Premium Solutions
            </h3>

            <p className="mt-4 leading-8 text-slate-100">
              Performance products engineered for modern
              vehicles and sports cars.
            </p>
          </div>
        </div>

        {/* PRODUCTS */}

        <div>
          {/* TOP */}

          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black text-slate-900">
              {filteredProducts.length} Products Found
            </h2>

            <div className="flex items-center gap-3 text-slate-700 font-semibold">
              <FaCarSide className="text-cyan-500" />

              Professional Catalog
            </div>
          </div>

          {/* GRID */}

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts
              .slice(0, visibleProducts)
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-3 transition-all duration-500"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      className="h-72 w-full object-cover hover:scale-110 transition-all duration-700"
                    />

                    <span className="absolute top-5 left-5 bg-cyan-500 text-white px-4 py-2 rounded-full font-bold">
                      {item.badge}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <p className="text-cyan-500 font-bold">
                        {item.category}
                      </p>

                      <div className="flex items-center gap-2 text-yellow-500 font-bold">
                        <FaStar />

                        {item.rating}
                      </div>
                    </div>

                    <h3 className="text-3xl font-black mt-4 text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-slate-600 leading-7">
                      {item.description}
                    </p>

                    <div className="flex justify-between items-center mt-8">
                      <h2 className="text-3xl font-black text-slate-900">
                        ${item.price}
                      </h2>

                      <button
                        onClick={() =>
                          setSelectedProduct(item)
                        }
                        className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-all duration-500"
                      >
                        Details

                        <FaArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* LOAD MORE */}

          {visibleProducts <
            filteredProducts.length && (
            <div className="flex justify-center mt-14">
              <button
                onClick={() =>
                  setVisibleProducts(
                    visibleProducts + 3
                  )
                }
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all duration-500"
              >
                Load More Products
              </button>
            </div>
          )}
        </div>
      </div>

      {/* MODAL */}

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-6">
          <div className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden">
            <div className="relative">
              <img
                src={selectedProduct.image}
                alt=""
                className="w-full h-[420px] object-cover"
              />

              <button
                onClick={() =>
                  setSelectedProduct(null)
                }
                className="absolute top-5 right-5 bg-red-500 text-white p-4 rounded-full"
              >
                <FaTimes />
              </button>
            </div>

            <div className="p-8">
              <p className="text-cyan-500 font-bold text-lg">
                {selectedProduct.category}
              </p>

              <h2 className="text-5xl font-black mt-4 text-slate-900">
                {selectedProduct.title}
              </h2>

              <div className="flex items-center gap-3 mt-5 text-yellow-500 text-xl">
                <FaStar />

                <span>
                  {selectedProduct.rating}
                </span>
              </div>

              <p className="mt-6 leading-9 text-lg text-slate-600">
                {selectedProduct.description}
              </p>

              <div className="flex justify-between items-center mt-10">
                <h2 className="text-5xl font-black text-slate-900">
                  ${selectedProduct.price}
                </h2>

                <button className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-500">
                  <FaShoppingCart />

                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductComponents;