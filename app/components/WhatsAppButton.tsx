import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/971521361040"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:bottom-6 sm:right-6 sm:h-12 sm:w-12"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={22} />
    </a>
  )
}

export default WhatsAppButton
