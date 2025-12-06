"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Destinations", href: "/destinations" },
    { name: "Events", href: "/events" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white text-gray-800 shadow-md fixed w-full z-50 border-b border-gray-100 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Gloventra Logo"
              width={45}
              height={45}
              priority
            />
            <div className="w-px h-8 bg-gray-300"></div>
            <span className="text-lg font-normal tracking-wide text-gray-900">
              Gloventra Consultancy
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-7 items-center text-gray-800">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group text-sm font-light hover:text-gray-700"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <Link
              href="/online-consultation"
              className="bg-green-500 text-black px-5 py-1.5 rounded-full font-medium shadow hover:bg-green-600 transition-all"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-7 h-7 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white border-t border-gray-200 shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="block text-base font-light py-2 hover:text-gray-700 transition"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/online-consultation"
            onClick={closeMenu}
            className="block bg-green-500 text-black px-4 py-2 rounded-full text-center font-medium shadow hover:bg-green-600 transition"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>

      {/* Click-Out Background Overlay */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden"
        ></div>
      )}
    </nav>
  );
}
