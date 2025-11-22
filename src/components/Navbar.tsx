"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className="bg-white text-gray-800 shadow-md fixed w-full z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between h-16 items-center">

          {/* Logo + Name */}
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
          <div className="hidden md:flex space-x-6 items-center text-gray-800">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group text-sm font-light text-gray-800 hover:text-gray-600 transition-colors duration-200"
              >
                {item.name}
                {/* Underline */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link
              href="/online-consultation"
              className="bg-green-500 hover:bg-gray-700 text-black  px-4 py-1.5 rounded-full font-medium transition-all duration-200 shadow-lg"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-3 pb-4 space-y-2 border-t border-gray-200">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} className="block text-sm font-light hover:text-gray-600 transition-colors duration-200">
              {item.name}
            </Link>
          ))}
          <Link
            href="/online-consultation"
            className="block bg-gray-800 hover:bg-gray-700 text-white px-4 py-1.5 rounded-full font-medium mt-2 transition-all duration-200 shadow-sm"
          >
            Get Free Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
