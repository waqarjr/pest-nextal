import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";


const HeroSection = ({data}) => {
  
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (<>
  <section className="w-custom mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 py-16 sm:py-20 lg:py-24 bg-secondary ">
  <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} className="text-4xl md:text-5xl font-extrabold text-primary mb-4 font-[var(--font-heading)]">
    {data.heading}
  </motion.h1>
  <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2} className="text-lg md:text-xl text-black max-w-2xl mx-auto mb-8 font-[var(--font-body)]">
    {data.paragraph}
  </motion.p>
  <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.2} className="flex flex-row gap-3 pt-4">
    <a href={`tel:${process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}`} className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#6B0F2A] text-white px-6 py-3 rounded-lg transition-all duration-300 text-base font-semibold shadow-lg hover:shadow-xl font-[var(--font-body)]">
      <Phone className="w-4 h-4" />
      <span>{process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}</span>
    </a>
    <a href={`https://wa.me/${process.env.NEXT_PUBLIC_AUTH_WHATS_NUBER}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-success hover:bg-[#218838] text-white p-3 rounded-lg transition-all duration-200 text-base font-semibold shadow-lg hover:shadow-xl" aria-label="Chat on WhatsApp">
      <FaWhatsapp className="w-6 h-6" />
    </a>
    <a href={`mailto:${process.env.NEXT_PUBLIC_AUTH_EMAIL}`} className="inline-flex items-center justify-center bg-accent hover:bg-[#C4A20F] text-white p-3 rounded-lg transition-all duration-200 text-base font-semibold shadow-lg hover:shadow-xl" aria-label="Go to Contact Us page">
      <FaEnvelope className="w-6 h-6" />
    </a>
  </motion.div>
</section>
  </>)
}

export default HeroSection