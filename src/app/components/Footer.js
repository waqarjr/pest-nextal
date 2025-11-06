"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, Plus, Minus } from "lucide-react";

const complianceItems = [
  { name: "Trend Analysis", slug: "trend-analysis" },
  { name: "Digital Reporting", slug: "digital-reporting" },
  { name: "Light Trap Analysis", slug: "light-trap-analysis" },
  { name: "Pheromone Monitoring", slug: "pheromone-monitoring" },
  { name: "Ship Sanitation", slug: "ship-sanitation" },
];

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (section) => setOpenSection(openSection === section ? null : section);

  return (
    <footer className="bg-secondary pt-12 md:pt-20 pb-6 border-t border-black/10 px-4 md:px-8 font-body text-sm text-black">
      <div className="mx-auto w-full max-w-7xl grid gap-8 sm:gap-10 md:grid-cols-5">
        {/* Logo + About */}
        <div className="text-center md:text-left space-y-4 md:-translate-y-10">
          <Link href="/" className="inline-block">
            <Image src="/assets/Nextal-logo.png" alt="Nextal Pests" width={140} height={50} className="w-28 h-auto sm:w-32 lg:w-36 mx-auto md:mx-0" />
          </Link>
          <p className="text-black/70 max-w-xs mx-auto md:mx-0 -translate-y-10">Integrated pest management, disinfection, and food safety solutions. Protecting your home & business with care.</p>
        </div>

        {/* Our Services */}
        <div>
          <button className="w-full flex items-center justify-between font-semibold text-primary mb-4 md:cursor-default" onClick={() => toggleSection("services")}>
            Our Services
            <span className="md:hidden">{openSection === "services" ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}</span>
          </button>
          <ul className={`space-y-2 overflow-hidden transition-all duration-300 ${openSection === "services" ? "max-h-96" : "max-h-0 md:max-h-full"}`}>
            <li><Link href="/cockroaches-pest-control" className="hover:text-accent transition-colors">Cockroaches Control</Link></li>
            <li><Link href="/rodent-pest-control" className="hover:text-accent transition-colors">Rodent Control</Link></li>
            <li><Link href="/mosquitoes-pest-control" className="hover:text-accent transition-colors">Mosquitoes Control</Link></li>
            <li><Link href="/termites-pest-control" className="hover:text-accent transition-colors">Termites Control</Link></li>
          </ul>
          <Link href="/services" className="mt-2 inline-block text-primary hover:text-accent font-medium transition-colors">View All Services →</Link>
        </div>

        {/* Policies & Compliance */}
        <div>
          <button className="w-full flex items-center justify-between font-semibold text-primary mb-4 md:cursor-default" onClick={() => toggleSection("compliance")}>
            Policies & Compliance
            <span className="md:hidden">{openSection === "compliance" ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}</span>
          </button>
          <ul className={`space-y-2 overflow-hidden transition-all duration-300 ${openSection === "compliance" ? "max-h-96" : "max-h-0 md:max-h-full"}`}>
            {complianceItems.map((item) => (
              <li key={item.slug}><Link href={`/policies/${item.slug}`} className="hover:text-accent transition-colors">{item.name}</Link></li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <button className="w-full flex items-center justify-between font-semibold text-primary mb-4 md:cursor-default" onClick={() => toggleSection("areas")}>
            Service Areas
            <span className="md:hidden">{openSection === "areas" ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}</span>
          </button>
          <ul className={`space-y-2 overflow-hidden transition-all duration-300 ${openSection === "areas" ? "max-h-96" : "max-h-0 md:max-h-full"}`}>
            <li>Downtown Dubai</li>
            <li>Dubai Marina</li>
            <li>Business Bay</li>
            <li>Jumeirah Lake Towers</li>
          </ul>
          <Link href="/ServiceArea" className="mt-2 inline-block text-primary hover:text-accent font-medium transition-colors">View All Areas →</Link>
        </div>

        {/* Contact Info */}
        <div>
          <p className="font-semibold text-primary mb-4">Contact Us</p>
          <ul className="space-y-3 text-black/70">
            <li className="flex items-start gap-2 sm:gap-3"><Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" /><a href="mailto:info@nextalpestcontrol.com" className="hover:text-accent transition-colors break-words text-xs sm:text-sm">info@nextalpestcontrol.com</a></li>
            <li className="flex items-start gap-2 sm:gap-3"><Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" /><a href="tel:+971503848713" className="hover:text-accent transition-colors text-xs sm:text-sm">+971 50 384 8713</a></li>
            <li className="flex items-start gap-2 sm:gap-3"><Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" /><a href="tel:+97148842612" className="hover:text-accent transition-colors text-xs sm:text-sm">+971 4 884 2612</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-black/10 pt-4">
        <div className="mx-auto w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-black/60 text-center md:text-left">
          <p>© {new Date().getFullYear()} Nextal Pests. All rights reserved.</p>
          <div className="flex gap-4 justify-center md:justify-end">
            <Link href="#" className="hover:text-accent"><Facebook size={18} /></Link>
            <Link href="#" className="hover:text-accent"><Instagram size={18} /></Link>
            <Link href="#" className="hover:text-accent"><Twitter size={18} /></Link>
            <Link href="#" className="hover:text-accent"><Linkedin size={18} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
