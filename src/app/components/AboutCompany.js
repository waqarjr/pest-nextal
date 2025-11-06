"use client";

import { ShieldCheck, Leaf, Users, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutCompany() {
  const trustPoints = [
    { icon: <ShieldCheck className="w-6 h-6 text-primary shrink-0" />, text: "Dubai Municipality Licensed and Certified" },
    { icon: <Leaf className="w-6 h-6 text-success shrink-0" />, text: "Eco-friendly and Safe Treatments" },
    { icon: <Users className="w-6 h-6 text-primary shrink-0" />, text: "Trained and Experienced Technicians" },
    { icon: <ThumbsUp className="w-6 h-6 text-accent shrink-0" />, text: "100% Customer Satisfaction Guarantee" },
  ];

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "10,000+", label: "Happy Customers" },
    { number: "100%", label: "Licensed & Insured" },
    { number: "24/7", label: "Emergency Service" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" } }),
  };

  return (
    <section className="section bg-secondary py-12 sm:py-16 lg:py-20">
      <div className="w-custom mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center px-4 sm:px-6 lg:px-8">
        <div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-primary leading-snug mb-4 font-[var(--font-heading)]">
            Dubai's Most Trusted Pest Control Company
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="text-black mb-4 leading-relaxed text-sm sm:text-base font-[var(--font-body)]">
            For over 10 years, we've been protecting Dubai homes and businesses from pest infestations. Our team of licensed professionals uses the latest eco-friendly treatments and cutting-edge technology to ensure your property stays pest-free.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className="text-black leading-relaxed mb-6 text-sm sm:text-base font-[var(--font-body)]">
            We understand the unique challenges of pest control in Dubai's climate and have developed specialized solutions that work effectively in our environment. From residential apartments to large commercial complexes — we've got you covered.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3 mb-6">
            {trustPoints.map((item, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} className="flex items-center gap-2 text-black text-sm sm:text-base font-[var(--font-body)]">
                {item.icon}
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.a href="/about-us" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.4, ease: "easeOut" }} viewport={{ once: true }} className="inline-block bg-primary text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-[#6B0F2A] transition text-sm sm:text-base font-[var(--font-body)]">
            Learn More About Us
          </motion.a>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10">
            {stats.map((stat, i) => (
              <motion.div key={i} custom={i} variants={fadeUp} className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-accent font-[var(--font-heading)]">{stat.number}</p>
                <p className="text-black text-xs sm:text-sm font-[var(--font-body)]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative w-full h-64 sm:h-80 md:h-[500px]">
          <Image src="/assets/nextal-about.jpeg" alt="Professional pest control team" fill className="object-cover rounded-2xl shadow-xl" sizes="(max-width: 768px) 100vw, 50vw" priority />
        </motion.div>
      </div>
    </section>
  );
}