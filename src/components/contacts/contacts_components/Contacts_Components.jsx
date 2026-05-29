// ContactsComponents.jsx

import React, { useState } from "react";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaChevronDown,
  FaChevronUp,
  FaPaperPlane,
  FaMapMarkedAlt,
  FaHeadset,
  FaTools,
  FaCarSide,
} from "react-icons/fa";

const ContactsComponents = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What brands do you carry?",
      answer:
        "We carry over 200 trusted automotive brands including Brembo, KW Suspension, Magnaflow, Michelin, Garrett, and more.",
    },

    {
      question: "Do you offer installation services?",
      answer:
        "Yes. We partner with certified service centers for installation support and professional fitting.",
    },

    {
      question: "What is your return policy?",
      answer:
        "Returns are accepted within 30 days for unused products in original packaging.",
    },

    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping usually takes 3–5 business days across the United States.",
    },
  ];

  return (
    <div className="bg-[#f7fbff] overflow-hidden">
      {/* HERO SECTION */}

      <section className="relative py-14 px-6 md:px-14">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100"></div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="uppercase tracking-[5px] text-cyan-500 font-bold">
            Get in Touch
          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-4 text-slate-900 duration-500 hover:scale-105 transition-all inline-block">
            We're Here to Help
          </h1>

          <p className="text-lg md:text-xl leading-9 mt-5 text-slate-600 max-w-4xl mx-auto">
            Whether you're looking for a specific part,
            need technical advice, or want to discuss
            fleet pricing — our team is ready.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-12 mt-2">
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* SEND MESSAGE CARD */}

          <div className="bg-white rounded-[30px] border border-slate-200 shadow-xl p-7 md:p-8 flex flex-col h-full hover:-translate-y-1 transition-all duration-500">
            {/* HEADER */}

            <div>
              <h2 className="text-3xl font-black text-slate-900 duration-500 hover:scale-105 transition-all inline-block">
                Send Us a Message
              </h2>

              <p className="mt-2 text-slate-500 leading-7 text-sm">
                We respond to all inquiries within one
                business day.
              </p>
            </div>

            {/* FORM */}

            <form className="mt-6 flex flex-col flex-1">
              {/* NAME + EMAIL */}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-bold text-slate-700">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    placeholder="Marcus Reid"
                    className="w-full mt-2 px-4 py-3 rounded-2xl border border-slate-200 outline-none focus:border-cyan-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    placeholder="marcus@example.com"
                    className="w-full mt-2 px-4 py-3 rounded-2xl border border-slate-200 outline-none focus:border-cyan-500 transition-all duration-300"
                  />
                </div>
              </div>

              {/* PHONE + SUBJECT */}

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="text-sm font-bold text-slate-700">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    placeholder="+1 (313) 555-0000"
                    className="w-full mt-2 px-4 py-3 rounded-2xl border border-slate-200 outline-none focus:border-cyan-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700">
                    Subject *
                  </label>

                  <select className="w-full mt-2 px-4 py-3 rounded-2xl border border-slate-200 outline-none focus:border-cyan-500 transition-all duration-300">
                    <option>Select Topic</option>

                    <option>General Inquiry</option>

                    <option>Technical Support</option>

                    <option>Fleet Pricing</option>

                    <option>Order Support</option>
                  </select>
                </div>
              </div>

              {/* MESSAGE */}

              <div className="mt-4 flex-1">
                <label className="text-sm font-bold text-slate-700">
                  Message *
                </label>

                <textarea
                  rows="7"
                  placeholder="Tell us more about your automotive requirements..."
                  className="w-full mt-2 px-4 py-4 rounded-2xl border border-slate-200 outline-none resize-none focus:border-cyan-500 transition-all duration-300"
                ></textarea>
              </div>

              {/* BUTTON */}

              <button
                type="submit"
                className="mt-5 flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3.5 px-7 rounded-2xl font-bold hover:scale-[1.02] transition-all duration-500 shadow-lg"
              >
                <FaPaperPlane className="text-lg" />

                Send Message
              </button>
            </form>
          </div>

          {/* COMPANY INFORMATION CARD */}

          <div className="bg-white rounded-[30px] border border-slate-200 shadow-xl p-7 md:p-8 flex flex-col h-full hover:-translate-y-1 transition-all duration-500">
            {/* HEADER */}

            <div>
              <h2 className="text-3xl font-black text-slate-900 duration-500 hover:scale-105 transition-all inline-block">
                Company Information
              </h2>

              <p className="mt-2 text-slate-500 leading-7 text-sm">
                Reach our automotive specialists through
                the channels below.
              </p>
            </div>

            {/* CONTENT */}

            <div className="mt-6 space-y-4 flex-1">
              {/* ADDRESS */}

              <div className="flex items-start gap-4 border border-slate-100 rounded-2xl p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="min-w-[50px] h-[50px] rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-lg">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    Visit Us
                  </h3>

                  <p className="mt-1 text-slate-500 leading-7 text-sm">
                    4821 Auto Drive
                    <br />
                    Detroit, MI 48201
                    <br />
                    United States
                  </p>
                </div>
              </div>

              {/* CALL */}

              <div className="flex items-start gap-4 border border-slate-100 rounded-2xl p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="min-w-[50px] h-[50px] rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-lg">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    Call Us
                  </h3>

                  <p className="mt-1 text-slate-500 leading-7 text-sm">
                    Main: +1 (313) 555-0123
                    <br />
                    Fleet: +1 (313) 555-0199
                    <br />
                    Support: +1 (313) 555-0188
                  </p>
                </div>
              </div>

              {/* EMAIL */}

              <div className="flex items-start gap-4 border border-slate-100 rounded-2xl p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="min-w-[50px] h-[50px] rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-lg">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    Email Us
                  </h3>

                  <p className="mt-1 text-slate-500 leading-7 text-sm">
                    info@shokon.auto
                    <br />
                    orders@shokon.auto
                    <br />
                    fleet@shokon.auto
                  </p>
                </div>
              </div>

              {/* HOURS */}

              <div className="flex items-start gap-4 border border-slate-100 rounded-2xl p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="min-w-[50px] h-[50px] rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-lg">
                  <FaClock />
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-900">
                    Business Hours
                  </h3>

                  <p className="mt-1 text-slate-500 leading-7 text-sm">
                    Mon–Fri: 7:00 AM – 7:00 PM
                    <br />
                    Saturday: 8:00 AM – 5:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}

      <section className="max-w-7xl mx-auto px-6 md:px-14 pb-12">
        <div
          className="relative overflow-hidden rounded-[35px] min-h-[340px] flex items-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1800&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 w-full text-center px-8">
            <div className="w-20 h-20 rounded-full bg-cyan-500 flex items-center justify-center mx-auto shadow-2xl">
              <FaMapMarkedAlt className="text-white text-3xl" />
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mt-8 duration-500 hover:scale-105 transition-all inline-block">
              4821 Auto Drive, Detroit, MI 48201
            </h2>

            <p className="text-white/80 mt-4 text-lg">
              Visit our premium automotive workshop and
              service center.
            </p>

            <a
              href="https://maps.google.com/?q=4821+Auto+Drive+Detroit+MI+48201"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 mt-8 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-500 hover:scale-105"
            >
              <FaMapMarkedAlt />

              Open Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* SUPPORT SECTION */}

      <section className="max-w-7xl mx-auto px-6 md:px-14 pb-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[28px] p-7 border border-slate-200 shadow-lg hover:-translate-y-2 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-xl">
              <FaHeadset />
            </div>

            <h3 className="text-2xl font-black mt-5">
              Technical Support
            </h3>

            <p className="mt-4 text-slate-600 leading-8">
              Automotive specialists ready to help with
              compatibility and support.
            </p>
          </div>

          <div className="bg-white rounded-[28px] p-7 border border-slate-200 shadow-lg hover:-translate-y-2 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
              <FaTools />
            </div>

            <h3 className="text-2xl font-black mt-5">
              Installation Help
            </h3>

            <p className="mt-4 text-slate-600 leading-8">
              Complete installation guidance and workshop
              assistance.
            </p>
          </div>

          <div className="bg-white rounded-[28px] p-7 border border-slate-200 shadow-lg hover:-translate-y-2 transition-all duration-500">
            <div className="w-14 h-14 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-xl">
              <FaCarSide />
            </div>

            <h3 className="text-2xl font-black mt-5">
              Vehicle Solutions
            </h3>

            <p className="mt-4 text-slate-600 leading-8">
              Premium automotive performance solutions
              for every vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}

      <section className="max-w-7xl mx-auto px-6 md:px-14 pb-14">
        <div className="text-center">
          <p className="uppercase tracking-[5px] text-cyan-500 font-bold">
            FAQ
          </p>

          <h2 className="text-5xl font-black mt-5 text-slate-900 duration-500 hover:scale-105 transition-all inline-block">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-[25px] border border-slate-200 shadow-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenFAQ(
                    openFAQ === index ? null : index
                  )
                }
                className="w-full flex justify-between items-center px-7 py-5 text-left"
              >
                <span className="text-lg font-bold text-slate-900">
                  {faq.question}
                </span>

                {openFAQ === index ? (
                  <FaChevronUp className="text-cyan-500" />
                ) : (
                  <FaChevronDown className="text-cyan-500" />
                )}
              </button>

              {openFAQ === index && (
                <div className="px-7 pb-6 text-slate-600 leading-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactsComponents;