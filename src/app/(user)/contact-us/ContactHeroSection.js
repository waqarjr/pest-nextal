"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const ContactHeroSection = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } })
  };

  const phone = process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER || "+92 315 6417097";
  const email = process.env.NEXT_PUBLIC_AUTH_EMAIL || "waqarjr03@gmail.com";
  const address = process.env.NEXT_PUBLIC_AUTH_ADDRESS || "Nextal Pests Control LLC, Dubai";
  const workingHours = process.env.NEXT_PUBLIC_AUTH_TIME || "24/7 Emergency Service";
  const whatsappNumber = process.env.NEXT_PUBLIC_AUTH_WHATS_NUBER || "923156417097";

  const phoneClean = phone.replace(/\s+/g, '');

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, title: "Call Us", info: phone, link: `tel:${phoneClean}` },
    { icon: <Mail className="w-5 h-5" />, title: "Email Us", info: email, link: `mailto:${email}` },
    { icon: <MapPin className="w-5 h-5" />, title: "Visit Us", info: address, link: "#" },
    { icon: <Clock className="w-5 h-5" />, title: "Working Hours", info: workingHours, link: "#" },
  ];

  return (
    <section className="relative min-h-[600px] sm:min-h-[650px] lg:min-h-[700px] w-full flex items-center bg-gradient-to-br from-primary via-[#6B0F2A] to-black overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 w-custom mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          <motion.div initial="hidden" animate="visible" className="text-white space-y-6 sm:space-y-8 text-center lg:text-left">
            <motion.div variants={fadeUp} custom={0} className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-semibold font-[var(--font-heading)]">
                <MessageCircle className="w-4 h-4" />
                Get In Touch
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} custom={1} className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-[var(--font-heading)]">
              Need Expert Pest Control?
              <span className="block text-accent mt-2">We&apos;re Here to Help!</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} custom={2} className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-[var(--font-body)]">
              Contact Nextal Pest Control for immediate assistance. Our certified technicians are ready to provide safe, effective, and eco-friendly pest management solutions for your home or business.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a href={`tel:${phoneClean}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-[#C4A20F] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl font-[var(--font-body)]">
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </motion.a>
              
              <motion.a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center justify-center gap-2 bg-success hover:bg-[#218838] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl font-[var(--font-body)]">
                <FaWhatsapp className="w-5 h-5" />
                <span>WhatsApp</span>
              </motion.a>
            </motion.div>

            <motion.div variants={fadeUp} custom={4} className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium font-[var(--font-body)]">{workingHours}</span>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" className="space-y-4 sm:space-y-5">
            {contactInfo.map((item, index) => (
              <motion.a key={index} href={item.link} variants={fadeUp} custom={index + 5} whileHover={{ scale: 1.02, x: 10 }} className="flex items-start gap-4 p-4 sm:p-5 lg:p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 group">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-accent font-semibold mb-1 font-[var(--font-heading)] text-sm sm:text-base">{item.title}</h3>
                  <p className="text-white text-sm sm:text-base font-[var(--font-body)] break-words">{item.info}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "10,000+", label: "Happy Clients" },
            { number: "100%", label: "Licensed" },
            { number: "24/7", label: "Support" },
          ].map((stat, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <p className="text-2xl sm:text-3xl font-bold text-accent font-[var(--font-heading)]">{stat.number}</p>
              <p className="text-white text-xs sm:text-sm mt-1 font-[var(--font-body)]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHeroSection;