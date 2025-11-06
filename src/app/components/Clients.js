"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  "/assets/clients/company1.webp",
  "/assets/clients/company2.webp",
  "/assets/clients/company3.webp",
  "/assets/clients/company4.webp",
  "/assets/clients/company5.webp",
  "/assets/clients/company6.webp",
  "/assets/clients/company7.webp",
  "/assets/clients/company8.webp",
  "/assets/clients/company9.webp",
  "/assets/clients/company10.webp",
  "/assets/clients/company11.webp",
  "/assets/clients/company12.webp",
];

export default function Clients({ images = clients }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, type: "spring", stiffness: 90, damping: 18 } }),
  };

  return (
    <section className="w-custom mx-auto py-12 sm:py-16 lg:py-20 bg-secondary">
      <div className=" text-center px-4 sm:px-6 lg:px-8">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="text-3xl md:text-5xl font-bold text-primary mb-10 font-[var(--font-heading)]">
          Trusted by Leading Clients
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {images.map((src, i) => (
            <motion.div key={`client-${i}`} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i + 1} className="relative w-28 h-16 md:w-36 md:h-20 transition-transform duration-300 ease-in-out hover:scale-105 grayscale hover:grayscale-0">
              <Image src={src} alt={`Client logo ${i + 1}`} fill sizes="(max-width: 768px) 120px, 150px" className="object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}