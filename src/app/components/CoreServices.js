"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function CoreServices() {
const coreServices = [
  {
    title: "Residential Pest Control",
    description: "Protect your home and family from pests with our safe, effective, and eco-friendly residential pest control services. We target common household pests while ensuring the safety of your loved ones and pets.",
    image: "/assets/residential-pest.jpg",
    points: [
      "Customized home inspection and treatment plans",
      "Safe for children and pets",
      "Odorless and eco-friendly products",
      "Protection from ants, cockroaches, bed bugs & more",
    ],
  },
  {
    title: "Commercial Pest Control",
    description: "Our commercial pest management programs are designed to meet industry-specific standards and ensure your workplace remains pest-free, compliant, and hygienic.",
    image: "/assets/control-customized.webp",
    points: [
      "Scheduled maintenance programs",
      "Compliant with local health & safety regulations",
      "Discreet treatments with minimal disruption",
      "Detailed inspection reports for audit compliance",
    ],
  },
  {
    title: "Industrial Pest Control",
    description: "For warehouses, factories, and manufacturing facilities — we provide heavy-duty pest control solutions that safeguard your inventory, machinery, and structural integrity.",
    image: "/assets/mosquito/fog-treatment.avif",
    points: [
      "Targeted treatment for rodents, termites, and crawling insects",
      "Long-term prevention with monitoring systems",
      "Safety-first procedures for industrial environments",
      "24/7 emergency response and on-site support",
    ],
  },
  {
    title: "General Pest Control",
    description: "Our general pest control service provides comprehensive protection against common pests across residential, commercial, and outdoor spaces — ensuring a safe and pest-free environment.",
    image: "/assets/ants/ants5.jpg",
    points: [
      "One-time and annual maintenance plans",
      "Effective against crawling & flying insects",
      "Environmentally safe and long-lasting solutions",
      "Expert team with guaranteed satisfaction",
    ],
  },
];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.2, ease: "easeOut" } }),
  };

  return (
   <section className="bg-black mx-auto w-full max-w-[var(--width-custom)] text-white py-10 xs:py-12 sm:py-16 lg:py-20 3xl:py-24">
  <div className="mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
    
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-10 sm:mb-14"
    >
      <motion.h1
        variants={fadeUp}
        className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-primary font-[var(--font-heading)]"
      >
        Core Services
      </motion.h1>
      <motion.p
        variants={fadeUp}
        custom={1}
        className="text-white text-sm xs:text-base sm:text-lg max-w-2xl mx-auto font-[var(--font-body)] leading-relaxed"
      >
        We offer reliable pest management solutions for homes, businesses, and industries — tailored to your specific needs and delivered by certified professionals.
      </motion.p>
    </motion.div>

    {/* Services Grid */}
    {coreServices.map((service, index) => (
      <motion.div
        key={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`grid gap-8 sm:gap-10 lg:gap-12 items-center mb-10 sm:mb-16 ${
          index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
        } lg:grid-cols-2`}
      >
        {/* Image */}
        <motion.div
          variants={fadeUp}
          className="relative rounded-2xl overflow-hidden shadow-lg w-full h-[220px] xs:h-[280px] sm:h-[350px] lg:h-[400px]"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={fadeUp}
          custom={1}
          className="px-1 xs:px-2 sm:px-4 lg:px-6"
        >
          <motion.h2
            variants={fadeUp}
            custom={0.2}
            className="text-xl xs:text-2xl sm:text-3xl font-bold text-accent mb-3 font-[var(--font-heading)]"
          >
            {service.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.4}
            className="text-white text-sm xs:text-base sm:text-lg mb-6 leading-relaxed font-[var(--font-body)]"
          >
            {service.description}
          </motion.p>

          {/* List Points */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-2 mb-3"
          >
            {service.points.map((point, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                custom={i * 0.2}
                className="flex items-start text-white text-sm xs:text-base font-[var(--font-body)]"
              >
                <CheckCircle
                  size={18}
                  className="text-success mt-1 mr-2 flex-shrink-0"
                />
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    ))}
  </div>
</section>

  );
}