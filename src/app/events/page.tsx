"use client";

import Image from "next/image";
import { Calendar, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

/* -------------------- Scroll Animation -------------------- */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay },
  viewport: { once: true },
});

/* -------------------- Sample Events Data -------------------- */
type Event = {
  title: string;
  date: string;
  location: string;
  attendees?: string;
  desc: string;
  image: string;
};

const upcomingEvents: Event[] = [
  {
    title: "Study Abroad Webinar",
    date: "Dec 5, 2025",
    location: "Online",
    attendees: "200+ Students",
    desc: "Join our free webinar to learn about study abroad opportunities and scholarships.",
    image: "/event1.webp",
  },
  {
    title: "Career Growth Workshop",
    date: "Jan 10, 2026",
    location: "Gloventra Office, Lahore",
    attendees: "50+ Professionals",
    desc: "Hands-on workshop on career planning, resume building, and international opportunities.",
    image: "/event2.webp",
  },
  {
    title: "University Fair 2026",
    date: "Feb 20, 2026",
    location: "Karachi Expo Center",
    attendees: "500+ Visitors",
    desc: "Meet top universities and learn about programs, scholarships, and admissions.",
    image: "/event3.webp",
  },
];

const pastEvents: Event[] = [
  {
    title: "Global Education Seminar 2024",
    date: "Nov 15, 2024",
    location: "Online",
    desc: "Successful seminar on studying abroad and visa guidance.",
    image: "/past1.webp",
  },
  {
    title: "Student Orientation 2023",
    date: "Dec 5, 2023",
    location: "Lahore Campus",
    desc: "Orientation for students starting their global journey.",
    image: "/past2.webp",
  },
];

/* -------------------- Hero Section -------------------- */
function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white py-32">
      <div className="max-w-[1200px] mx-auto px-10 text-center">
        <motion.h1 {...fadeUp(0)} className="text-5xl md:text-6xl font-bold mb-6">
          Our Events & Workshops
        </motion.h1>
        <motion.p {...fadeUp(0.2)} className="text-gray-300 text-lg md:text-xl">
          Join our upcoming events and webinars to enhance your global education and career opportunities.
        </motion.p>
      </div>
    </section>
  );
}

/* -------------------- Upcoming Events Section -------------------- */
function UpcomingEvents() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-10">
        <motion.h2 {...fadeUp(0)} className="text-4xl font-bold text-center mb-16">
          Upcoming Events
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
          {upcomingEvents.map((event, idx) => (
            <motion.div
              key={idx}
              {...fadeUp(idx * 0.2)}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col"
            >
              <div className="relative w-full h-64">
                <Image src={event.image} alt={event.title} fill className="object-cover"/>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                <p className="text-gray-500 text-sm mb-2 flex items-center gap-2">
                  <Calendar className="inline-block w-4 h-4" /> {event.date}
                </p>
                <p className="text-gray-500 text-sm mb-2 flex items-center gap-2">
                  <MapPin className="inline-block w-4 h-4" /> {event.location}
                </p>
                {event.attendees && (
                  <p className="text-gray-500 text-sm mb-2 flex items-center gap-2">
                    <Users className="inline-block w-4 h-4" /> {event.attendees}
                  </p>
                )}
                <p className="text-gray-600 text-sm flex-grow">{event.desc}</p>
                <a
                  href="/register"
                  className="mt-4 inline-block text-center px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition"
                >
                  Register Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Past Events Section -------------------- */
function PastEvents() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-10">
        <motion.h2 {...fadeUp(0)} className="text-4xl font-bold text-center mb-16">
          Past Events & Highlights
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {pastEvents.map((event, idx) => (
            <motion.div
              key={idx}
              {...fadeUp(idx * 0.2)}
              className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row"
            >
              <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                <Image src={event.image} alt={event.title} fill className="object-cover"/>
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                <p className="text-gray-500 text-sm mb-2">
                  <Calendar className="inline-block w-4 h-4 mr-1" /> {event.date} | {event.location}
                </p>
                <p className="text-gray-600 text-sm">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Call To Action -------------------- */
function EventCTA() {
  return (
    <section className="py-24 bg-gray-900 text-white text-center">
      <motion.h2 {...fadeUp(0)} className="text-4xl md:text-5xl font-bold mb-6">
        Don’t Miss Our Next Event!
      </motion.h2>
      <motion.p {...fadeUp(0.2)} className="text-gray-300 mb-10">
        Stay updated with our latest workshops, webinars, and fairs. Register today!
      </motion.p>
      <motion.a
        {...fadeUp(0.4)}
        href="/register"
        className="inline-block px-8 py-4 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 font-semibold rounded-full shadow-lg hover:shadow-2xl transition"
      >
        Subscribe / Register
      </motion.a>
    </section>
  );
}

/* -------------------- Complete Events Page -------------------- */
export default function EventsPage() {
  return (
    <main>
      <HeroSection />
      <UpcomingEvents />
      <PastEvents />
      <EventCTA />
    </main>
  );
}
