"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white min-h-[90vh] flex items-center overflow-hidden pt-25 md:pt-20">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-5 md:left-10 w-52 h-52 md:w-72 md:h-72 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-5 md:bottom-20 md:right-20 w-40 h-40 md:w-64 md:h-64 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 rounded-full opacity-15 animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        
        {/* Left Side - Text Content */}
        <motion.div 
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-gray-100 leading-snug sm:leading-tight">
            Aspire Beyond Borders
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-full md:max-w-lg text-gray-300">
            Your trusted consultancy for Study Abroad, Visa Processing, and Global Career Guidance.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="/online-consultation"
              className="bg-gray-100 text-black hover:bg-gray-300 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/contact"
              className="border border-gray-400 text-gray-200 hover:bg-gray-100 hover:text-black px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 text-center"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Right Side - Hero Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end relative w-full max-w-md md:max-w-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-[250px] sm:w-[300px] md:w-[450px] h-[250px] sm:h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/heroimage.png"
              alt="Consultancy Hero Image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray-900/80 -z-10"></div>
    </section>
  );
}
