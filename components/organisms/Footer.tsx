import Link from "next/link";
import Logo from "../atoms/Logo";
import { FaWhatsapp, FaInstagram, FaLocationArrow, FaPhone, FaClock  } from "react-icons/fa";
import {
  WHATSAPP_NUMBER,
  WHATSAPP_MESSAGES,
} from "@/constants/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-zinc-50 mt-24 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3">

        {/* Brand */}
        <div>
          <Logo />
          <p className="mt-4 text-sm text-zinc-600 leading-relaxed">
            SG Auto Care provides professional car wash and
            detailing services with premium quality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li>
              <Link href="/" className="hover:text-red-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-red-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-red-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-zinc-600">
            <li>
              <a
                href="https://maps.app.goo.gl/t7cxGLsaL66GbLnw8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-red-600"
              >
                <FaLocationArrow  className="text-green-500" />
                <span>Medan, Indonesia</span>
              </a>
            </li>

            <li>
              <a
                href="tel:+6281168856700"
                className="flex items-center gap-2 hover:text-red-600"
              >
                <FaPhone  className="text-red-500" />
                <span>+62 811-6885-6700</span>
              </a>
            </li>

            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  WHATSAPP_MESSAGES.contact
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-red-600"
              >
                <FaWhatsapp className="text-green-500" />
                <span>WhatsApp Chat</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/sgautocaree?igsh=dWpvMGtnZ2l3a2ty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-red-600"
              >
                <FaInstagram className="text-pink-600" />
                <span>sgautocaree</span>
              </a>
            </li>


            <li className="flex items-center gap-2">
              <FaClock  className="text-black-500" />
                <span>08.30 – 17.30</span>
              </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-zinc-500 py-4 border-t">
        © {new Date().getFullYear()} SG Auto Care. All rights reserved.
      </div>
    </footer>
  );
}
