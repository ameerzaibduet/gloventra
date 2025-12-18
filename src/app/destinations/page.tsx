"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  GraduationCap,
  Briefcase,
  Plane,
  Globe,
  ArrowRight,
  CheckCircle,
} from "lucide-react"

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
  viewport: { once: true },
})

const sections = [
  {
    title: "Study Abroad",
    icon: GraduationCap,
    image: "/studybanner.png",
    desc:
      "Complete guidance for international education including admissions, documentation, and student visa processing.",
    points: ["University Admissions", "Student Visa", "Scholarship Guidance"],
    countries: "UK • Canada • Australia • USA • Europe",
  },
  {
    title: "Freelance / Digital Nomad",
    icon: Globe,
    image: "/freelancebanner.avif",
    desc:
      "Legal residency options for freelancers and remote professionals through digital nomad visas.",
    points: ["Remote Work Visas", "Residency Permits", "Tax Guidance"],
    countries: "Germany • Portugal • Spain • UAE • Estonia",
  },
  {
    title: "Visit Visa",
    icon: Plane,
    image: "/visitbanner.avif",
    desc:
      "Tourist and visit visa services with high approval success and complete embassy filing support.",
    points: ["Tourist Visa", "Family Visit", "Embassy Documentation"],
    countries: "UK • USA • Schengen • Turkey • Malaysia",
  },
  {
    title: "Work Permit",
    icon: Briefcase,
    image: "/workbanner.avif",
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
      <section className="relative min-h-[70vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/dist-banner.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-10">
          <motion.h1 {...fadeUp(0)} className="text-5xl md:text-6xl font-bold text-white mb-4">
          Destinations
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="text-gray-300 text-lg">
            Study • Freelance • Visit Visa • Work Permit
          </motion.p>
        </div>
      </section>

      {/* SERVICES GRID – 2 CARDS */}
<section className="py-24 bg-gray-50">
  <div className="max-w-[1200px] mx-auto px-10">
    <div className="grid md:grid-cols-2 gap-12">

      {sections.map((item, index) => (
        <motion.div
          key={item.title}
          {...fadeUp(index * 0.1)}
          className="bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden"
        >

          {/* IMAGE */}
          <div className="relative h-[280px] overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority={index === 0}
            />

            {/* BLACK GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

            {/* TITLE ON IMAGE */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white text-2xl font-bold">
                {item.title}
              </h3>
              <p className="text-gray-200 text-sm mt-1">
                {item.countries}
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-8">
            <item.icon className="w-10 h-10 text-gray-900 mb-4" />

            <p className="text-gray-600 mb-6">
              {item.desc}
            </p>

            <ul className="space-y-3 mb-8">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <CheckCircle className="w-4 h-4 text-gray-900" />
                  {point}
                </li>
              ))}
            </ul>

            <Link
              href="/online-consultation"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
            >
              Get Started <ArrowRight size={16} />
            </Link>
          </div>

        </motion.div>
      ))}

    </div>
  </div>
</section>

{/* ROADMAP CTA */}
<section className="py-28 bg-gray-50">
  <div className="max-w-[1200px] mx-auto px-10 text-center">

    <motion.h2
      {...fadeUp(0)}
      className="text-4xl font-bold mb-4"
    >
      Your Global Journey Starts Here
    </motion.h2>

    <motion.p
      {...fadeUp(0.1)}
      className="text-gray-600 mb-20 max-w-[650px] mx-auto"
    >
      A clear roadmap designed to guide you from consultation to success.
    </motion.p>

    {/* ROADMAP */}
    <div className="relative">
      {/* LINE */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300 -translate-y-1/2" />

      <div className="grid md:grid-cols-4 gap-14 relative z-10">

        {/* STEP 1 – CLICKABLE */}
        <Link href="/online-consultation">
          <motion.div
            {...fadeUp(0)}
            className="cursor-pointer group bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gray-900 text-white flex items-center justify-center text-xl font-bold group-hover:scale-110 transition">
              1
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Free Consultation
            </h3>
            <p className="text-sm text-gray-600">
              Discuss your goals with our experts.
            </p>
          </motion.div>
        </Link>

        {/* STEP 2 */}
        <motion.div
          {...fadeUp(0.1)}
          className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md"
        >
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gray-800 text-white flex items-center justify-center text-xl font-bold">
            2
          </div>
          <h3 className="font-semibold text-lg mb-2">
            Documentation
          </h3>
          <p className="text-sm text-gray-600">
            Prepare and verify required documents.
          </p>
        </motion.div>

        {/* STEP 3 */}
        <motion.div
          {...fadeUp(0.2)}
          className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md"
        >
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gray-800 text-white flex items-center justify-center text-xl font-bold">
            3
          </div>
          <h3 className="font-semibold text-lg mb-2">
            Application Filing
          </h3>
          <p className="text-sm text-gray-600">
            Submission with embassy compliance.
          </p>
        </motion.div>

        {/* STEP 4 */}
        <motion.div
          {...fadeUp(0.3)}
          className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md"
        >
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gray-800 text-white flex items-center justify-center text-xl font-bold">
            4
          </div>
          <h3 className="font-semibold text-lg mb-2">
            Approval & Travel
          </h3>
          <p className="text-sm text-gray-600">
            Visa approval and journey begins.
          </p>
        </motion.div>

      </div>
    </div>

    {/* FINAL CTA BUTTON */}
    <motion.div {...fadeUp(0.4)} className="mt-20">
      <Link
        href="/online-consultation"
        className="inline-flex items-center gap-2 bg-gray-900 text-white px-12 py-4 rounded-full font-semibold hover:bg-gray-800 transition"
      >
        Start with Free Consultation <ArrowRight />
      </Link>
    </motion.div>

  </div>
</section>

    </main>
  )
}
