"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
  viewport: { once: true },
});

export default function ContactPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 text-center">
        <motion.h1 {...fadeUp(0)} className="text-5xl md:text-6xl font-bold mb-6">
          Get in Touch
        </motion.h1>
        <motion.p {...fadeUp(0.2)} className="text-gray-300 text-lg md:text-xl">
          We are here to help you start your global journey. Reach out for inquiries, consultation, or support.
        </motion.p>
      </section>

      {/* Contact Info */}
      <section className="py-24 max-w-[1200px] mx-auto px-10">
        <motion.h2 {...fadeUp(0)} className="text-4xl font-bold text-center mb-16">
          Contact Information
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <motion.a
            href="https://goo.gl/maps/your-office-location" // Replace with actual Google Maps link
            target="_blank"
            rel="noopener noreferrer"
            {...fadeUp(0.1)}
            className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition cursor-pointer"
          >
            <MapPin className="w-10 h-10 text-gray-900 mb-4" />
            <p className="font-semibold">Our Office</p>
            <p className="text-gray-600 mt-2">2nd Floor, 20-C, Ittehad Lane-12, Phase 2 Extension, DHA Karachi</p>
            <span className="flex items-center gap-1 mt-2 text-gray-500">
              <ExternalLink className="w-4 h-4" /> View on Map
            </span>
          </motion.a>

          <motion.a
            href="mailto:contact@gloventra.com"
            {...fadeUp(0.2)}
            className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition cursor-pointer"
          >
            <Mail className="w-10 h-10 text-gray-900 mb-4" />
            <p className="font-semibold">Email Us</p>
            <p className="text-gray-600 mt-2">gloventraconsultancy@gmail.com</p>
          </motion.a>

          <motion.a
            href="tel:+1234567890"
            {...fadeUp(0.3)}
            className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition cursor-pointer"
          >
            <Phone className="w-10 h-10 text-gray-900 mb-4" />
            <p className="font-semibold">Call Us</p>
            <p className="text-gray-600 mt-2">+923087601311</p>
          </motion.a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-[800px] mx-auto px-10">
          <motion.h2 {...fadeUp(0)} className="text-4xl font-bold text-center mb-16">
            Send Us
          </motion.h2>

          <motion.form {...fadeUp(0.2)} className="grid gap-6" action="mailto:contact@gloventra.com" method="POST" encType="text/plain">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              required
              className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
              className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              required
              className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows={6}
              required
              className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white font-semibold py-4 rounded-full shadow-lg hover:shadow-2xl transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>

      {/* Google Map Embed */}
      <section className="relative h-[500px]">
        <iframe
          src="https://www.google.com/maps?q=2nd+Floor,+20-C,+Ittehad+Lane-12,+Phase+2+Extension,+DHA+Karachi&output=embed"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
}
