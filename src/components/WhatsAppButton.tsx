"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  return (<>
  
  <Link
      href="https://wa.me/923178248255" // 👈 replace with your WhatsApp number
      target="_blank"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600
                 text-white p-4 rounded-full shadow-lg transition-all"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </Link>

  </>
    
    
  )
}
