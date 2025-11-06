"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Crawling Insects",
    items: [
      { name: "Cockroaches", slug: "cockroaches-pest-control" },
      { name: "Ants", slug: "ants-pest-control-2" },
      { name: "Silverfish", slug: "silverfish-pest-control" },
      { name: "Beetles", slug: "beetles-pest-control" },
    ],
  },
  {
    title: "Flying Insects",
    items: [
      { name: "Flies", slug: "flies-pest-control-2" },
      { name: "Mosquitoes", slug: "mosquitoes-pest-control" },
      { name: "Wasps", slug: "wasps-pest-control" },
      { name: "Moths", slug: "moths-pest-control" },
    ],
  },
  {
    title: "Blood-Feeding Pests",
    items: [
      { name: "Bedbugs", slug: "bedbugs-pest-control" },
      { name: "Fleas", slug: "fleas-pest-control-2" },
      { name: "Ticks", slug: "ticks-pest-control-2" },
    ],
  },
  {
    title: "Structural Pests",
    items: [
      { name: "Termites", slug: "termites-pest-control" },
      { name: "Rodents", slug: "rodent-pest-control" },
      { name: "Carpet Beetles", slug: "carpet-beetles-pest-control" },
      { name: "Bird Mites", slug: "bird-mites-pest-control" },
    ],
  },
  {
    title: "Outdoor Pests",
    items: [
      { name: "Spiders", slug: "spiders-pest-control-2" },
      { name: "Lizards", slug: "house-lizards-pest-control" },
      { name: "Birds", slug: "birds-control-deterrent-service" },
      { name: "Bees", slug: "bees-pest-control" },
      { name: "Wild Life", slug: "wild-life-pest-control" },
    ],
  },
  {
    title: "Core Services",
    items: [
      { name: "Sanitization & Disinfection", slug: "sanitization-and-disinfection" },
      { name: "Residential Pest Control", slug: "residential-pest-control" },
      { name: "Commercial Pest Control", slug: "commercial-pest-control" },
      { name: "Industrial Pest Control", slug: "industrial-pest-control" },
      { name: "General Pest Control", slug: "general-pest-control" },
    ],
  },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -8, scale: 0.98, transition: { duration: 0.2 } },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.15 },
  }),
};

export default function ServicesDropdown({ onClick, isMobileMenu = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimeout = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const toggleSection = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
  };

const handleMouseLeave = (e) => {
  const target = e?.relatedTarget;
  const dropdownEl = dropdownRef.current;

  if (!dropdownEl || !(target instanceof Node) || !dropdownEl.contains(target)) {
    closeTimeout.current = setTimeout(() => setIsOpen(false), 400);
  }
};

  const handleLinkClick = () => {
    setIsOpen(false);
    setOpenIndex(null);
    if (onClick) onClick();
  };

  if (isMobileMenu || isMobile) {
    return (
      <div className="flex flex-col text-black font-medium text-lg font-[var(--font-heading)]">
        <button onClick={handleToggle} className="flex justify-between items-center py-2 hover:text-primary transition-colors duration-200">
          <span>Services</span>
          <ChevronDown size={18} className={`transition-transform duration-200 ${isOpen ? "rotate-180 text-primary" : ""}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="pl-3 border-l-2 border-primary ml-2">
              {services.map((section, idx) => (
                <div key={idx} className="pt-2">
                  <button onClick={() => toggleSection(idx)} className="w-full flex justify-between items-center text-black hover:text-primary text-base py-1 transition-colors duration-200 font-[var(--font-body)]">
                    {section.title}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${openIndex === idx ? "rotate-180 text-primary" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {openIndex === idx && (
                      <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="pl-4 text-black text-sm space-y-1 font-[var(--font-body)]">
                        {section.items.map((item, i) => (
                          <motion.li key={item.slug} custom={i} initial="hidden" animate="visible" variants={listItemVariants}>
                            <Link href={`/services/${item.slug}`} onClick={handleLinkClick} className="block py-1 w-full text-left hover:text-accent transition-colors duration-200">
                              {item.name}
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="flex items-center gap-1 font-medium text-black hover:text-primary transition-colors duration-200 font-[var(--font-heading)]" onClick={handleToggle}>
        Services
        <ChevronDown size={18} className={`transition-transform duration-200 ${isOpen ? "rotate-180 text-primary" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && !isMobile && (
          <motion.div initial="hidden" animate="visible" exit="exit" variants={dropdownVariants} className="absolute left-1/2 -translate-x-1/2 mt-3 bg-white shadow-2xl rounded-2xl border border-gray-100 z-50 w-[95vw] sm:w-[600px] md:w-[700px] lg:w-[850px] max-w-[850px] overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 max-h-[70vh] overflow-y-auto">
              {services.map((section, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-primary mb-3 border-b-2 border-accent pb-1 font-[var(--font-heading)]">
                    {section.title}
                  </h4>
                  <ul className="space-y-1">
                    {section.items.map((item, i) => (
                      <motion.li key={item.slug} custom={i} initial="hidden" animate="visible" variants={listItemVariants}>
                        <Link href={`/services/${item.slug}`} onClick={handleLinkClick} className="text-black hover:text-primary transition-all duration-200 text-sm w-full text-left px-3 py-1.5 rounded-md hover:bg-secondary hover:pl-4 flex items-center font-[var(--font-body)]">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-60" />
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}