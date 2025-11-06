"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUserCircle, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { Menu, X, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ServicesDropdown from "@/app/components/Navbar/ServicesDropdown";
import ComplianceDropdown from "@/app/components/Navbar/complianceDropdown";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => { const handleScroll = () => setScrolled(window.scrollY > 10); window.addEventListener("scroll", handleScroll); return () => window.removeEventListener("scroll", handleScroll); }, []);
  useEffect(() => { const handleClickOutside = (e) => { if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setShowUserMenu(false); }; document.addEventListener("mousedown", handleClickOutside); return () => document.removeEventListener("mousedown", handleClickOutside); }, []);

  return (
    <motion.nav initial={!hasAnimated.current ? { y: -60, opacity: 0 } : false} animate={!hasAnimated.current ? { y: 0, opacity: 1 } : false} transition={{ duration: 0.5, ease: "easeOut" }} onAnimationComplete={() => (hasAnimated.current = true)} className={`bg-secondary sticky top-0 z-50 transition-shadow duration-300 font-[var(--font-body)] ${scrolled ? "shadow-lg" : "shadow-md"}`}>
      <div className="w-11/12 max-w-7xl mx-auto flex justify-between items-center h-20 sm:h-24 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center"><Image src="/assets/Nextal-logo.png" alt="Nextal Logo" width={130} height={40} className="object-contain w-24 md:w-28" /></Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-black font-medium font-[var(--font-heading)]">
          <Link href="/" className="hover:text-primary transition-colors duration-200">Home</Link>
          <ServicesDropdown />
          <ComplianceDropdown />
          <Link href="/about-us" className="hover:text-primary transition-colors duration-200">About</Link>
          <Link href="/contact-us" className="hover:text-primary transition-colors duration-200">Contact</Link>
        </div>

        {/* Right Section (User + Mobile Toggle) */}
        <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
          <button onClick={() => setShowUserMenu(!showUserMenu)} className="flex items-center space-x-2 text-black hover:text-primary transition-colors duration-200"><FaUserCircle className="text-2xl" /><span className="hidden sm:inline text-sm">Account</span></button>

          {/* User Dropdown */}
          <AnimatePresence mode="wait">
            {showUserMenu && (
              <motion.div key="user-menu" initial={{ opacity: 0, y: -8, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -6, scale: 0.97 }} transition={{ duration: 0.2, ease: "easeOut" }} className="absolute right-0 top-full mt-2 w-48 sm:w-56 bg-white border border-gray-200 rounded-xl shadow-lg py-3 z-50">
                <div className="flex flex-col items-center gap-3 py-3 px-2">
                  <p className="text-black text-md font-[var(--font-body)]">Welcome!</p>
                  <button onClick={() => setShowUserMenu(false)} className="btn-primary w-32 flex items-center justify-center gap-2"><FaSignInAlt /> Sign In</button>
                  <Link href="/signup" onClick={() => setShowUserMenu(false)} className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded hover:bg-secondary transition-colors duration-200 w-32"><FaUserPlus /> Sign Up</Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-black hover:text-primary transition-colors duration-200" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div key="mobile-menu" initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ duration: 0.35, ease: "easeOut" }} className="fixed inset-0 bg-secondary z-40 flex flex-col p-6 overflow-y-auto shadow-lg">
            <div className="flex justify-between items-center mb-6"><Image src="/assets/Nextal-logo.png" alt="Nextal Logo" width={120} height={40} className="object-contain" /><button onClick={() => setMenuOpen(false)} className="text-black hover:text-primary transition-colors duration-200"><X size={26} /></button></div>
            <div className="flex flex-col space-y-5 text-black font-medium text-lg font-[var(--font-heading)]">
              <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors duration-200">Home</Link>
              <ServicesDropdown onClick={() => setMenuOpen(false)} isMobileMenu />
              <ComplianceDropdown onClick={() => setMenuOpen(false)} isMobileMenu />
              <Link href="/about-us" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors duration-200">About</Link>
              <Link href="/contact-us" onClick={() => setMenuOpen(false)} className="hover:text-primary transition-colors duration-200">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
