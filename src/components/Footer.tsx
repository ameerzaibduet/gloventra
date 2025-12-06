"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gray-800 rounded-full opacity-20 animate-spin-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12">

        {/* LOGO + ABOUT */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" width={50} height={50} alt="Gloventra Logo" />
            <span className="text-xl font-bold text-gray-100">Gloventra Consultancy</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Trusted partner for Study Abroad, Visa Processing, and Global Career Guidance.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3 mt-3">
            {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
              <Link key={idx} href="#" className="group relative w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700 transition">
                <Icon size={20} className="text-gray-400 group-hover:text-white transition" />
                <span className="absolute inset-0 rounded-full border border-gray-700 opacity-0 group-hover:opacity-100 transition"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-gray-100 font-semibold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            {["Home","About Us","Services","Destinations","Events","Blogs","Contact"].map((link, idx) => (
              <li key={idx}>
                <Link href={`/${link.toLowerCase().replace(/ /g,"")}`} className="hover:text-white transition duration-300">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-gray-100 font-semibold mb-4 text-lg">Our Services</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            {["Study Abroad Consultation","Visa Processing","Career Counselling","University Admissions","Scholarship Assistance"].map((service, idx) => (
              <li key={idx} className="hover:text-white transition duration-300">{service}</li>
            ))}
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-gray-100 font-semibold mb-4 text-lg">Contact Info</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start space-x-3 hover:text-white transition">
              <MapPin size={18} className="mt-1" />
              <span>2nd Floor, 20-C, Ittehad Lane-12, Phase 2 Extension, DHA Karachi</span>
            </li>
            <li className="flex items-start space-x-3 hover:text-white transition">
              <Phone size={18} className="mt-1" />
              <span>+923087601311</span>
            </li>
            <li className="flex items-start space-x-3 hover:text-white transition">
              <Mail size={18} className="mt-1" />
              <span>gloventraconsultancy@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT + BACK TO TOP */}
      <div className="relative mt-12 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <span>© {new Date().getFullYear()} Gloventra Consultancy. All Rights Reserved.</span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-3 md:mt-0 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition shadow-lg animate-bounce hover:animate-none"
        >
          <ArrowUp size={18} className="text-gray-400 hover:text-white transition" />
        </button>
      </div>
    </footer>
  );
}
