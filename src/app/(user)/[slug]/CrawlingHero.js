"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Phone, MessageCircle, ArrowRight } from "lucide-react";

const CrawlingHero = ({pest}) => {

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } };
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };

  return (
    <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={container} className="relative my-8 sm:my-14 flex items-center bg-secondary overflow-hidden py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">

          <motion.div variants={fadeUp} className="space-y-5 sm:space-y-6 text-left max-w-xl mx-auto lg:mx-0 order-2 lg:order-1">
            <motion.h1 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase text-primary tracking-tight font-[var(--font-heading)]">
              {pest.heading}
              <span className="block text-black text-xl sm:text-2xl md:text-3xl mt-2 font-semibold normal-case">Pest Control</span>
            </motion.h1>

            <motion.ul variants={container} className="space-y-3 sm:space-y-4 list-none pt-2">
              {pest.listing.map((feature, i) => (
                <motion.li key={i} variants={fadeUp} className="flex items-start gap-3">
                  <CheckCircle className="text-success w-5 h-5 sm:w-6 sm:h-6 mt-[2px] flex-shrink-0" />
                  <span className="text-black text-sm sm:text-base lg:text-lg font-medium font-[var(--font-body)]">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <motion.a href={`tel:${process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} 
              className="bg-primary hover:bg-[#6B0F2A] text-white px-5 sm:px-3 lg:px-4 py-2 lg:py-2 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-xl font-[var(--font-body)]">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">{process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}</span>
              </motion.a>
              <motion.a href={`https://wa.me/${process.env.NEXT_PUBLIC_AUTH_WHATS_NUBER}`} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} 
              className="bg-success hover:bg-[#218838] text-white px-5 sm:px-3 lg:px-4 py-2 lg:py-2  rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-xl font-[var(--font-body)]">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">WhatsApp</span>
              </motion.a>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-primary hover:border-accent text-primary hover:text-accent px-5 sm:px-3 lg:px-4 py-2 lg:py-2  rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all bg-white hover:bg-secondary font-[var(--font-body)]">
                <span className="text-sm sm:text-base">Free Quote</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative flex justify-center lg:justify-end items-center order-1 lg:order-2">
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative w-full max-w-[450px] sm:max-w-[500px] lg:max-w-[520px] aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3] ">
              <Image src={pest.image} alt="Professional pest control service in Dubai" fill className="object-cover rounded-2xl" priority sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 520px" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default CrawlingHero;