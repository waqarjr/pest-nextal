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
<section className="section bg-secondary py-8 md:py-12 lg:py-14 xl:py-16">
  <div className="max-w-[var(--width-custom)] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center px-4 md:px-8 lg:px-10">
    
    {/* Content Column */}
    <div className="space-y-3 md:space-y-4">
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary font-[var(--font-heading)] leading-snug">Dubai&apos;s Most Trusted Pest Control Company</motion.h2>

      <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="text-black text-sm sm:text-base md:text-lg leading-relaxed font-[var(--font-body)]">For over 10 years, we&apos;ve been protecting Dubai homes and businesses from pest infestations using eco-friendly treatments and advanced technology.</motion.p>

      <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className="text-black text-sm sm:text-base md:text-lg leading-relaxed font-[var(--font-body)]">Our team understands Dubai&apos;s unique pest control challenges and provides effective solutions for residential, commercial, and industrial properties.</motion.p>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-1.5 md:space-y-2 mt-2">
        {trustPoints.map((item, i) => (
          <motion.div key={i} custom={i} variants={fadeUp} className="flex items-center gap-2 text-black text-sm sm:text-base md:text-lg font-[var(--font-body)]"><span className="text-primary">{item.icon}</span><span>{item.text}</span></motion.div>
        ))}
      </motion.div>

      <motion.a href="/about-us" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.4, ease: "easeOut" }} viewport={{ once: true }} className="inline-block bg-primary text-white font-medium px-5 py-2 rounded-lg shadow-md hover:bg-[#6B0F2A] transition text-sm sm:text-base font-[var(--font-body)] mt-3">Learn More About Us</motion.a>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
        {stats.map((stat, i) => (
          <motion.div key={i} custom={i} variants={fadeUp} className="text-center"><p className="text-lg sm:text-xl font-bold text-accent font-[var(--font-heading)] mb-1">{stat.number}</p><p className="text-black text-xs sm:text-sm font-[var(--font-body)]">{stat.label}</p></motion.div>
        ))}
      </motion.div>
    </div>

    {/* Image Column */}
    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
      <Image src="/assets/nextal-about.jpeg" alt="Professional pest control team" fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" quality={85} />
    </motion.div>
  </div>
</section>

  );
}
