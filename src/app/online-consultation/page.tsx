"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.8 }},
});

export default function OnlineConsultation() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await res.json();

      if (result.success) {
        // Show success popup
        setShowSuccess(true);

        // Clear form fields
        setForm({
          name: "",
          email: "",
          phone: "",
          country: "",
          message: "",
        });

        // Hide success popup after 3 seconds
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* ----------------------------- HERO SECTION ----------------------------- */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-28">
        <div className="max-w-[1200px] mx-auto px-8">
          <motion.h1 {...fadeUp(0)} className="text-5xl font-bold leading-tight">
            Book Your Online Consultation
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="mt-6 text-lg text-gray-300 max-w-xl">
            Get expert guidance for visa, admission, career counselling, and global opportunities — all from the comfort of your home.
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-10">
            <Link
              href="#consultation-form"
              className="inline-block px-10 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition"
            >
              Start Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ----------------------------- FORM SECTION ----------------------------- */}
      <section id="consultation-form" className="py-24 bg-gray-50">
        <div className="max-w-[850px] mx-auto px-8 bg-white shadow-xl rounded-3xl p-12">

          <motion.h2 {...fadeUp(0)} className="text-3xl font-bold mb-10 text-center">
            Consultation Form
          </motion.h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>

            {/* NAME */}
            <motion.div {...fadeUp(0.1)} className="flex flex-col">
              <label className="font-medium mb-2">Full Name</label>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-gray-800 outline-none"
                placeholder="Enter your name"
              />
            </motion.div>

            {/* EMAIL */}
            <motion.div {...fadeUp(0.15)} className="flex flex-col">
              <label className="font-medium mb-2">Email</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-gray-800 outline-none"
                placeholder="Enter your email"
              />
            </motion.div>

            {/* PHONE */}
            <motion.div {...fadeUp(0.2)} className="flex flex-col">
              <label className="font-medium mb-2">Phone Number</label>
              <input
                required
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-gray-800 outline-none"
                placeholder="03XX-XXXXXXX"
              />
            </motion.div>

            {/* COUNTRY */}
            <motion.div {...fadeUp(0.25)} className="flex flex-col">
              <label className="font-medium mb-2">Country of Interest</label>
              <select
                required
                name="country"
                value={form.country}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl p-4 focus:ring-2 focus:ring-gray-800 outline-none"
              >
                <option value="">Select Country</option>
                <option>UK</option>
                <option>USA</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>Europe</option>
              </select>
            </motion.div>

            {/* MESSAGE */}
            <motion.div {...fadeUp(0.3)} className="flex flex-col md:col-span-2">
              <label className="font-medium mb-2">Your Message</label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl p-4 h-32 focus:ring-2 focus:ring-gray-800 outline-none"
                placeholder="Tell us about your case or requirements..."
              ></textarea>
            </motion.div>

            {/* SUBMIT BUTTON */}
            <motion.div {...fadeUp(0.4)} className="text-center md:col-span-2 mt-6">
              <button
                type="submit"
                className="px-12 py-4 bg-gradient-to-r from-black via-gray-800 to-gray-700 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition"
              >
                Submit Request
              </button>
            </motion.div>
          </form>
        </div>
      </section>

      {/* ----------------------------- SUCCESS POPUP ----------------------------- */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/40 flex justify-center items-center z-50"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              🎉 Request Submitted Successfully!
            </h2>

            <p className="text-gray-600 mb-6">
              Our team will contact you shortly. Thank you for reaching out!
            </p>

            <button
              className="px-8 py-3 bg-gradient-to-r from-black via-gray-800 to-gray-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition"
              onClick={() => setShowSuccess(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
