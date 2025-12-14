"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  Briefcase,
  Plane,
  Globe,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
})

const sections = [
  {
    title: "Study Abroad",
    icon: GraduationCap,
    desc:
      "Complete guidance for international education including admissions, documentation, and student visa processing.",
    points: ["University Admissions", "Student Visa", "Scholarship Guidance"],
    countries: "UK • Canada • Australia • USA • Europe",
  },
  {
    title: "Freelance / Digital Nomad",
    icon: Globe,
    desc:
      "Legal residency options for freelancers and remote professionals through digital nomad visas.",
    points: ["Remote Work Visas", "Residency Permits", "Tax Guidance"],
    countries: "Germany • Portugal • Spain • UAE • Estonia",
  },
  {
    title: "Visit Visa",
    icon: Plane,
    desc:
      "Tourist and visit visa services with high approval success and complete embassy filing support.",
    points: ["Tourist Visa", "Family Visit", "Embassy Documentation"],
    countries: "UK • USA • Schengen • Turkey • Malaysia",
  },
  {
    title: "Work Permit",
    icon: Briefcase,
    desc:
      "Employer-sponsored and skilled worker visa solutions for overseas employment.",
    points: ["Job-Based Visa", "Skilled Worker", "Employer Sponsorship"],
    countries: "Canada • Poland • Romania • Saudi Arabia • UAE",
  },
]

export default function DestinationsPage() {
  return (
    <main className="bg-white text-gray-900">
{/* HERO */}
<section className="relative min-h-[75vh] flex items-center">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/dist-banner.png')" }}
  />

  {/* Black Gradient Overlay (Left → Right) */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

  {/* Content */}
  <div className="relative z-10 max-w-[1200px] mx-auto px-10 text-left">
    <motion.h1
      {...fadeUp(0)}
      className="text-5xl md:text-6xl font-bold mb-4 text-white max-w-[700px]"
    >
      Domain Destinations
    </motion.h1>

    <motion.p
      {...fadeUp(0.2)}
      className="text-gray-300 text-lg md:text-xl max-w-[600px]"
    >
      Study • Freelance • Visit Visa • Work Permit
    </motion.p>
  </div>
</section>

      {/* SECTIONS */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-10 space-y-24">
          {sections.map((item, index) => (
            <motion.div
              key={item.title}
              {...fadeUp(index * 0.1)}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-lg">
                <item.icon className="w-12 h-12 mb-6 text-gray-900" />
                <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                <p className="text-gray-600 mb-6">{item.desc}</p>

                <ul className="space-y-3 mb-6">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-gray-900" />
                      {point}
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-gray-500 mb-8">
                  <span className="font-semibold">Countries:</span>{" "}
                  {item.countries}
                </p>

                <Link
                  href="/online-consultation"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
                >
                  Get Started <ArrowRight />
                </Link>
              </div>

              <div className="hidden md:block h-[320px] rounded-3xl bg-white border border-gray-200 shadow-sm" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <motion.h2 {...fadeUp(0)} className="text-4xl font-bold mb-6">
          Start Your Global Journey Today
        </motion.h2>
        <motion.p {...fadeUp(0.1)} className="text-gray-600 mb-10">
          Contact our experts and get personalized guidance.
        </motion.p>

        <Link
          href="/online-consultation"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Contact Us <ArrowRight />
        </Link>
      </section>
    </main>
  )
}
