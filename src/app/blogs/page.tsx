"use client";

import Image from "next/image";
import { Calendar, User } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
  viewport: { once: true },
});

type Blog = {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  link: string;
};

const featuredBlogs: Blog[] = [
  {
    title: "Top 10 Scholarships for International Students",
    date: "Nov 10, 2025",
    author: "Aisha Khan",
    excerpt: "Explore the best scholarship opportunities available for students planning to study abroad...",
    image: "/blog-featured1.webp",
    link: "/blogs/scholarships-2025",
  },
  {
    title: "How to Prepare a Strong Visa Application",
    date: "Oct 25, 2025",
    author: "Hamza Ali",
    excerpt: "Learn the key steps and tips to ensure your visa application is successful and stress-free...",
    image: "/blog-featured2.webp",
    link: "/blogs/visa-preparation-guide",
  },
];

const allBlogs: Blog[] = [
  {
    title: "Career Opportunities After Studying Abroad",
    date: "Oct 5, 2025",
    author: "Sara Malik",
    excerpt: "Studying abroad opens doors to international careers. Discover how to plan your career path effectively...",
    image: "/blog1.webp",
    link: "/blogs/career-opportunities",
  },
  {
    title: "Top Universities in Europe for 2026",
    date: "Sep 20, 2025",
    author: "Ali Rehman",
    excerpt: "A detailed guide to the top European universities and programs suitable for international students...",
    image: "/blog2.webp",
    link: "/blogs/europe-universities-2026",
  },
  {
    title: "Tips for a Successful University Interview",
    date: "Sep 5, 2025",
    author: "Aisha Khan",
    excerpt: "Master the university interview process with these practical tips and insights from experts...",
    image: "/blog3.webp",
    link: "/blogs/university-interview-tips",
  },
  {
    title: "How to Choose the Right Study Program",
    date: "Aug 28, 2025",
    author: "Hamza Ali",
    excerpt: "Choosing the right program is crucial. Learn how to match your strengths and goals with the perfect study path...",
    image: "/blog4.webp",
    link: "/blogs/choosing-study-program",
  },
];

/* -------------------- Hero Section -------------------- */
function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white py-32">
      <div className="max-w-[1200px] mx-auto px-10 text-center">
        <motion.h1 {...fadeUp(0)} className="text-5xl md:text-6xl font-bold mb-6">
          Our Blog & Insights
        </motion.h1>
        <motion.p {...fadeUp(0.2)} className="text-gray-300 text-lg md:text-xl">
          Stay updated with our latest articles, tips, and guides on studying abroad, career growth, and visa assistance.
        </motion.p>
      </div>
    </section>
  );
}

/* -------------------- Featured Blogs -------------------- */
function FeaturedBlogs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-10">
        <motion.h2 {...fadeUp(0)} className="text-4xl font-bold text-center mb-16">
          Featured Blogs
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {featuredBlogs.map((blog, idx) => (
            <motion.a
              key={idx}
              href={blog.link}
              {...fadeUp(idx * 0.2)}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col md:flex-row"
            >
              <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                <Image src={blog.image} alt={blog.title} fill className="object-cover"/>
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="font-bold text-2xl mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-3">{blog.excerpt}</p>
                <p className="text-gray-500 text-sm flex items-center gap-4">
                  <span className="flex items-center gap-1"><User className="w-4 h-4" /> {blog.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {blog.date}</span>
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- All Blogs Grid -------------------- */
function AllBlogs() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-10">
        <motion.h2 {...fadeUp(0)} className="text-4xl font-bold text-center mb-16">
          All Blogs
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allBlogs.map((blog, idx) => (
            <motion.a
              key={idx}
              href={blog.link}
              {...fadeUp(idx * 0.2)}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col"
            >
              <div className="relative w-full h-64">
                <Image src={blog.image} alt={blog.title} fill className="object-cover"/>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-xl mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">{blog.excerpt}</p>
                <p className="text-gray-500 text-sm mt-2 flex items-center gap-4">
                  <span className="flex items-center gap-1"><User className="w-4 h-4" /> {blog.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {blog.date}</span>
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CTA Section -------------------- */
function BlogCTA() {
  return (
    <section className="py-24 bg-gray-900 text-white text-center">
      <motion.h2 {...fadeUp(0)} className="text-4xl md:text-5xl font-bold mb-6">
        Subscribe to Our Blog
      </motion.h2>
      <motion.p {...fadeUp(0.2)} className="text-gray-300 mb-10">
        Get the latest articles, tips, and updates directly in your inbox.
      </motion.p>
      <motion.a
        {...fadeUp(0.4)}
        href="/subscribe"
        className="inline-block px-8 py-4 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 font-semibold rounded-full shadow-lg hover:shadow-2xl transition"
      >
        Subscribe Now
      </motion.a>
    </section>
  );
}

/* -------------------- Complete Blogs Page -------------------- */
export default function BlogsPage() {
  return (
    <main>
      <HeroSection />
      <FeaturedBlogs />
      <AllBlogs />
      <BlogCTA />
    </main>
  );
}
