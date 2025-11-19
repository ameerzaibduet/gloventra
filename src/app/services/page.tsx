"use client";

import { motion } from "framer-motion";
import { GraduationCap, Stamp, Briefcase, FileText, Award, Plane, MessageSquare, FileCheck, Building2 } from "lucide-react";

export default function ServicesPage() {
  const consultancyServices = [
    {
      title: "Study Abroad Guidance",
      description:
        "Personalized counselling to help you choose the best country, university, and program for your future.",
      icon: GraduationCap,
    },
    {
      title: "Visa Application Assistance",
      description:
        "Step-by-step support with documentation, financial guidance, and visa interview preparation.",
      icon: Stamp,
    },
    {
      title: "Career Counselling",
      description: "Professional advice to help you choose the right career path and international opportunities.",
      icon: Briefcase,
    },
    {
      title: "Document Preparation",
      description: "We assist with SOPs, CVs, admission letters, and all required documents.",
      icon: FileText,
    },
    {
      title: "Scholarship Assistance",
      description: "Guidance in finding and applying for international scholarships and financial aid.",
      icon: Award,
    },
    {
      title: "Travel & Pre-Departure Guidance",
      description:
        "Complete support including accommodation, travel planning, and country-specific guidelines.",
      icon: Plane,
    },
  ];

  const consultancySteps = [
    { step: "Free Consultation", icon: MessageSquare },
    { step: "Document Evaluation", icon: FileCheck },
    { step: "University / Job Matching", icon: Building2 },
    { step: "Visa Submission", icon: Stamp },
    { step: "Approval & Pre-Departure", icon: Plane },
  ];

  return (
    <div className="relative min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Subtle Gradient Background Shapes */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-100 to-blue-50 rounded-full blur-[150px] animate-pulse opacity-70" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-100 to-purple-50 rounded-full blur-[150px] animate-pulse opacity-70" />

      {/* Hero Section */}
      <section className="py-24 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold mb-6 text-gray-900"
        >
          Our Consultancy Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto text-lg text-gray-600"
        >
          Trusted consultancy for international study, visas, career guidance, and global opportunities.
        </motion.p>
      </section>

      {/* Consultancy Process */}
      <section className="max-w-6xl mx-auto px-6 mb-28 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900"
        >
          Our Process
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {consultancySteps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white shadow-md border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg hover:scale-105 transition cursor-pointer"
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 text-indigo-500" />
              <h3 className="font-semibold text-gray-900">{item.step}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Consultancy Services */}
      <section className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900"
        >
          What We Offer
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {consultancyServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white shadow-md border border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:scale-105 transition text-center"
            >
              <div className="flex justify-center mb-6">
                <service.icon className="w-14 h-14 text-indigo-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
