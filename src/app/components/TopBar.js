"use client";

import { Mail, Phone, Star } from "lucide-react";
import Image from "next/image";

export default function Topbar() {
  return (
    <div className=" bg-black text-secondary text-sm font-[var(--font-body)] shadow-sm">
      <div className="flex flex-row items-center justify-between px-4 sm:px-6 py-2 mx-auto gap-2 sm:gap-0">
        
        {/* Rating Section */}
        <div className="flex items-center gap-2">
          <div className="relative w-6 h-6">
            <Image src="/assets/google-logo.png" alt="Google Logo" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 200px" className="object-contain" priority />
          </div>
          <span className="flex items-center gap-1 font-[var(--font-heading)] text-xs sm:text-sm">
            <span className="font-semibold text-accent">4.9</span>
            {[...Array(5)].map((_, i) => (<Star key={i} className="w-3 sm:w-4 h-3 sm:h-4 fill-accent text-accent" />))}
          </span>
        </div>

        {/* Contact Section */}
        <div className="flex flex-row items-center gap-1 sm:gap-4 md:gap-6 mt-1 sm:mt-0">
          <a href={`tel:${process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}`} className=" mx-3 flex items-center gap-1 text-secondary hover:text-accent transition-colors duration-200 text-xs sm:text-sm font-medium" title={`Call us: ${process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}`}>
            <Phone className="w-3 sm:w-4 h-3 sm:h-4" />
            <span className="hidden sm:inline">{process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}</span>
          </a>
          <a  href={`mailto:${process.env.NEXT_PUBLIC_AUTH_EMAIL}`} className="flex items-center gap-1 text-secondary hover:text-accent transition-colors duration-200 text-xs sm:text-sm font-medium" title="Email us: info@nextalpestcontrol.com">
            <Mail className="w-3 sm:w-4 h-3 sm:h-4" />
            <span className="hidden lg:inline">{process.env.NEXT_PUBLIC_AUTH_EMAIL}</span>
          </a>
        </div>

      </div>
    </div>
  );
}
