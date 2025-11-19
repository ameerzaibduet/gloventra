"use client";

import Image from "next/image";
import { Globe2, GraduationCap, FileText, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* ---------------------- Animation ---------------------- */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
  viewport: { once: true },
});

/* -------------------- Journey Step -------------------- */
type JourneyStep = {
  number: number;
  icon: ReactNode;
  title: string;
  desc: string;
};

const journeySteps: JourneyStep[] = [
  {
    number: 1,
    icon: <Globe2 />,
    title: "Consultation",
    desc: "We discuss your goals and recommend the best study or career options.",
  },
  {
    number: 2,
    icon: <GraduationCap />,
    title: "Profile Evaluation",
    desc: "We analyze your strengths and suggest the most suitable destinations.",
  },
  {
    number: 3,
    icon: <FileText />,
    title: "Visa & Admission Support",
    desc: "We assist with documentation, applications, and visa filing.",
  },
  {
    number: 4,
    icon: <Briefcase />,
    title: "Career Counselling",
    desc: "We guide you toward global career opportunities and growth.",
  },
];

/* -------------------- Journey Map -------------------- */
function JourneyMap() {
  return (
    <div className="max-w-[1200px] mx-auto px-10 py-20 relative">
      <motion.h2
        {...fadeUp(0)}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Your Journey With Us
      </motion.h2>

      {/* Thin Curved Line Behind Icons */}
      <svg
        className="absolute top-20 left-0 w-full h-40 z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50,80 C350,0 850,180 1150,40"
          stroke="#b3b3b3"
          strokeWidth="1.2"
          fill="transparent"
          strokeDasharray="6,6"
        />
      </svg>

      <div className="relative flex flex-col md:flex-row justify-between items-center gap-16">
        {journeySteps.map((step, idx) => (
          <motion.div
            key={idx}
            {...fadeUp(idx * 0.2)}
            className="relative flex flex-col items-center text-center md:w-1/4 z-10 h-full"
          >
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-lg mb-4 text-gray-900 text-3xl">
              {step.icon}
            </div>
            <p className="font-bold text-lg mb-1">{step.title}</p>
            <p className="text-gray-600 text-sm flex-grow">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* -------------------- Services Section -------------------- */
const services = [
  {
    icon: <Globe2 />,
    title: "Global Reach",
    desc: "Partnered with top universities worldwide.",
  },
  {
    icon: <GraduationCap />,
    title: "Study Abroad",
    desc: "Guidance for the best study programs.",
  },
  {
    icon: <FileText />,
    title: "Visa Support",
    desc: "Complete documentation & visa assistance.",
  },
  {
    icon: <Briefcase />,
    title: "Career Counselling",
    desc: "Professional growth and global opportunities.",
  },
];

function ServicesSection() {
  return (
    <div className="max-w-[1200px] mx-auto px-10 py-20">
      <motion.h2
        {...fadeUp(0)}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Our Services
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 items-stretch">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            {...fadeUp(idx * 0.2)}
            className="p-6 bg-white rounded-2xl shadow-lg text-center hover:shadow-2xl transition h-full flex flex-col items-center"
          >
            <div className="text-4xl text-gray-900 mb-4">{service.icon}</div>
            <p className="font-bold mb-2">{service.title}</p>
            <p className="text-gray-600 text-sm flex-grow">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* -------------------- Stats Strip -------------------- */
function StatsStrip() {
  const stats = [
    { number: "500+", label: "Students Guided" },
    { number: "50+", label: "Global Universities" },
    { number: "95%", label: "Visa Success Rate" },
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700">
      <div className="max-w-[1000px] mx-auto px-10 flex justify-around text-center gap-10">
        {stats.map((stat, idx) => (
          <motion.div key={idx} {...fadeUp(idx * 0.2)}>
            <p className="text-3xl md:text-4xl font-bold text-white">
              {stat.number}
            </p>
            <p className="text-white mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* -------------------- Testimonials Section -------------------- */
const testimonials = [
  {
    name: "Aisha Khan",
    role: "Student",
    text: "Gloventra helped me get admission to my dream university with ease!",
  },
  {
    name: "Hamza Ali",
    role: "Professional",
    text: "Professional and reliable service, highly recommended!",
  },
  {
    name: "Sara Malik",
    role: "Parent",
    text: "Thanks to Gloventra, my child’s visa process was smooth and stress-free.",
  },
];

function TestimonialsSection() {
  return (
    <div className="max-w-[1200px] mx-auto px-10 py-20">
      <motion.h2
        {...fadeUp(0)}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        What Our Clients Say
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 items-stretch mb-12">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            {...fadeUp(idx * 0.2)}
            className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition text-center h-full flex flex-col justify-between"
          >
            <p className="text-gray-600 italic mb-4 flex-grow">"{t.text}"</p>
            <div>
              <p className="font-bold text-gray-900">{t.name}</p>
              <p className="text-gray-500 text-sm">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp(0.4)} className="text-center">
        <a
          className="inline-block px-8 py-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition"
          href="/book-consultation"
        >
          Book Free Consultation
        </a>
      </motion.div>
    </div>
  );
}

/* -------------------- About Section -------------------- */
export default function AboutSection() {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Intro */}
      <div className="max-w-[1200px] mx-auto px-10 py-20 flex flex-col md:flex-row items-center gap-16">
        <motion.div {...fadeUp(0)} className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">
            Why Choose Gloventra Consultancy
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            We help students, professionals, and families start their global
            journey with trusted consultancy, expert visa support, and
            world-class career guidance.
          </p>
        </motion.div>

      <motion.div
  {...fadeUp(0.2)}
  className="md:w-1/2 relative w-full h-96 rounded-3xl overflow-hidden shadow-lg"
>
  <Image src="/about-image.webp" alt="About" fill className="object-cover" />

  {/* Stronger Black Gradient from Bottom */}
  <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black/100 to-transparent" />
</motion.div>
      </div>

      <JourneyMap />
      <StatsStrip />
      <ServicesSection />
      <TestimonialsSection />
    </section>
  );
}
