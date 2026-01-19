"use client";

import Link from "next/link";
// import { usePathname } from "next/navigation";
import Logo from "../atoms/Logo";
// import Button from "../atoms/Button";

export default function Navbar() {
  // const pathname = usePathname();
  // const isServicesPage = pathname === "/services";

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-30 flex items-center justify-between">
        <Link href="/" aria-label="Go to homepage">
          <Logo />
        </Link>


        {/* Navigation */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-red-600">
            Home
          </Link>

          <Link href="/services" className="hover:text-red-600">
            Services
          </Link>

          <Link href="/about" className="hover:text-red-600">
            About
          </Link>

          <Link href="/contact" className="hover:text-red-600">
            Contact
          </Link>

         
        </div>
      </div>
    </nav>
  );
}
