"use client";

import Image from "next/image";
import { Users, Award, Globe2, Star, Heart } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* -------------------- Scroll Animation -------------------- */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
  viewport: { once: true },
});

/* -------------------- Hero / Company Story -------------------- */
function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white py-32">
      <div className="max-w-[1200px] mx-auto px-10 flex flex-col md:flex-row items-center gap-16">
        <motion.div {...fadeUp(0)} className="md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Journey Towards Excellence
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Since our founding, Gloventra Consultancy has helped countless students
            and professionals navigate the complexities of global education and career paths.
            Our mission is to turn dreams into reality through personalized guidance and expert support.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.3)} className="md:w-1/2 relative w-full h-96 rounded-3xl overflow-hidden shadow-lg">
          <Image src="/aboutushero.jpg" alt="About Us" fill className="object-cover"/>
          <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black/90 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------- Our Story / Milestones -------------------- */
type Milestone = { year: string; title: string; desc: string; image: string };
const milestones: Milestone[] = [
  { year: "2015", title: "Founded Gloventra", desc: "Started with a vision to guide students globally.", image: "/milestone1.webp" },
  { year: "2017", title: "First 100 Students", desc: "Successfully assisted 100 students in achieving admissions abroad.", image: "/milestone2.webp" },
  { year: "2020", title: "Global Partnerships", desc: "Partnered with top universities and institutions worldwide.", image: "/milestone3.webp" },
  { year: "2023", title: "500+ Students Guided", desc: "Expanded our services to professionals and families.", image: "/milestone4.webp" },
];

function StorySection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-10">
        <motion.h2 {...fadeUp(0)} className="text-4xl font-bold text-center mb-16">
          Our Story
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          {milestones.map((m, idx) => (
            <motion.div key={idx} {...fadeUp(idx * 0.2)} className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                <Image src={m.image} alt={m.title} fill className="object-cover"/>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <p className="text-gray-500 font-semibold mb-2">{m.year}</p>
                <h3 className="text-2xl font-bold mb-2">{m.title}</h3>
                <p className="text-gray-600">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Core Values -------------------- */
type Value = { icon: ReactNode; title: string; desc: string };
const values: Value[] = [
  { icon: <Star className="text-4xl text-gray-900" />, title: "Excellence", desc: "We strive for excellence in everything we do." },
  { icon: <Heart className="text-4xl text-gray-900" />, title: "Integrity", desc: "Our guidance is honest, transparent, and reliable." },
  { icon: <Globe2 className="text-4xl text-gray-900" />, title: "Global Perspective", desc: "Helping students succeed worldwide with knowledge and experience." },
  { icon: <Award className="text-4xl text-gray-900" />, title: "Achievement", desc: "Celebrating the success of our students and partners." },
];

function ValuesSection() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-10">
        <motion.h2 {...fadeUp(0)} className="text-4xl font-bold text-center mb-16">
          Our Core Values
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {values.map((v, idx) => (
            <motion.div key={idx} {...fadeUp(idx * 0.2)} className="bg-white rounded-3xl p-8 shadow-lg text-center hover:shadow-2xl transition flex flex-col items-center">
              <div className="mb-4">{v.icon}</div>
              <h3 className="font-bold text-lg mb-2">{v.title}</h3>
              <p className="text-gray-600 text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Global Impact / Achievements -------------------- */
const achievements = [
  { number: "500+", label: "Students Successfully Guided" },
  { number: "50+", label: "Global University Partnerships" },
  { number: "95%", label: "Visa Approval Rate" },
  { number: "1000+", label: "Applications Processed" },
];

function AchievementsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
      <div className="max-w-[1200px] mx-auto px-10 flex justify-around flex-wrap gap-10 text-center">
        {achievements.map((a, idx) => (
          <motion.div key={idx} {...fadeUp(idx * 0.2)}>
            <p className="text-3xl md:text-4xl font-bold text-white">{a.number}</p>
            <p className="text-white mt-2">{a.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- Team Philosophy Section (Updated) -------------------- */
const teamFounder = {
  name: "HAKIM KHAN",
  role: "Founder & CEO",
  desc: `With a vision to guide students and professionals globally, 
Gloventra Consultancy was built on trust, transparency, and 
personalized support. Under his leadership, the company has grown 
into one of the most reliable consultancy platforms for global 
education and career pathways.`,
  image: "/ceo.jpeg",
};

function TeamSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-10">
        
        <motion.h2 {...fadeUp(0)} className="text-4xl font-bold text-center mb-16">
          Meet Our Founder
        </motion.h2>

        {/* Founder Left - Text Right */}
        <motion.div
          {...fadeUp(0.2)}
          className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl shadow-lg p-10"
        >
          {/* Founder Image */}
          <div className="relative w-full md:w-1/2 h-96 rounded-3xl overflow-hidden shadow-xl">
            <Image 
              src={teamFounder.image}
              alt={teamFounder.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Founder Text */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold mb-2">{teamFounder.name}</h3>
            <p className="text-gray-500 font-semibold mb-4">{teamFounder.role}</p>
            <p className="text-gray-600 leading-relaxed text-lg">
              {teamFounder.desc}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


/* -------------------- Call To Action -------------------- */
function CallToAction() {
  return (
    <section className="py-24 bg-gray-900 text-white text-center">
      <motion.h2 {...fadeUp(0)} className="text-4xl md:text-5xl font-bold mb-6">
        Ready to Start Your Global Journey?
      </motion.h2>
      <motion.p {...fadeUp(0.2)} className="text-gray-300 mb-10">
        Book a free consultation today and let us guide you toward success.
      </motion.p>
      <motion.a
        {...fadeUp(0.4)}
        href="/book-consultation"
        className="inline-block px-8 py-4 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 font-semibold rounded-full shadow-lg hover:shadow-2xl transition"
      >
        Book Free Consultation
      </motion.a>
    </section>
  );
}

/* -------------------- Complete About Us Page -------------------- */
export default function AboutUsNewPage() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <AchievementsSection />
      <TeamSection />
      <CallToAction />
    </main>
  );
}
