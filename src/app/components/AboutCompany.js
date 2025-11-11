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
<section className="section bg-secondary py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24">
  <div className="w-full max-w-[var(--width-custom)] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16 items-center px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
    
    {/* Content Column */}
    <div className="space-y-4 xs:space-y-5 sm:space-y-6">
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-2xl xs:text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-primary leading-snug mb-3 xs:mb-4 sm:mb-5 font-[var(--font-heading)]">
        Dubai&apos;s Most Trusted Pest Control Company
      </motion.h2>
      
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} className="text-black mb-3 xs:mb-4 leading-relaxed text-sm xs:text-base sm:text-lg md:text-base lg:text-lg xl:text-xl font-[var(--font-body)]">
        For over 10 years, we&apos;ve been protecting Dubai homes and businesses from pest infestations. Our team of licensed professionals uses the latest eco-friendly treatments and cutting-edge technology to ensure your property stays pest-free.
      </motion.p>
      
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} viewport={{ once: true }} className="text-black leading-relaxed mb-4 xs:mb-5 sm:mb-6 text-sm xs:text-base sm:text-lg md:text-base lg:text-lg xl:text-xl font-[var(--font-body)]">
        We understand the unique challenges of pest control in Dubai&apos;s climate and have developed specialized solutions that work effectively in our environment. From residential apartments to large commercial complexes — we&apos;ve got you covered.
      </motion.p>
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-2 xs:space-y-2.5 sm:space-y-3 mb-4 xs:mb-5 sm:mb-6">
        {trustPoints.map((item, i) => (
          <motion.div key={i} custom={i} variants={fadeUp} className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 text-black text-sm xs:text-base sm:text-lg md:text-base lg:text-lg xl:text-xl font-[var(--font-body)]">
            <span className="text-primary flex-shrink-0">{item.icon}</span>
            <span>{item.text}</span>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.a href="/about-us" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.4, ease: "easeOut" }} viewport={{ once: true }} className="inline-block bg-primary text-white font-medium px-5 xs:px-6 sm:px-7 md:px-6 lg:px-7 xl:px-8 py-2 xs:py-2.5 sm:py-3 md:py-2.5 lg:py-3 xl:py-3.5 rounded-lg shadow-lg hover:bg-[#6B0F2A] transition text-sm xs:text-base sm:text-lg md:text-base lg:text-lg xl:text-xl font-[var(--font-body)]">
        Learn More About Us
      </motion.a>
      
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-4 lg:gap-6 xl:gap-8 mt-6 xs:mt-7 sm:mt-8 md:mt-9 lg:mt-10 xl:mt-12">
        {stats.map((stat, i) => (
          <motion.div key={i} custom={i} variants={fadeUp} className="text-center">
            <p className="text-lg xs:text-xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-accent font-[var(--font-heading)] mb-1">{stat.number}</p>
            <p className="text-black text-xs xs:text-sm sm:text-base md:text-sm lg:text-base xl:text-lg font-[var(--font-body)]">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
    
    {/* Image Column */}
    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative w-full h-56 xs:h-64 sm:h-80 md:h-96 lg:h-[450px] xl:h-[500px] 2xl:h-[550px] rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
      <Image src="/assets/nextal-about.jpeg" alt="Professional pest control team" fill priority sizes="(max-width: 420px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw" className="object-cover object-center" quality={85} />
    </motion.div>
    
  </div>
</section>
  );
}
