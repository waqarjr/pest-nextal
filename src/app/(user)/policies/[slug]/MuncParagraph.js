import { motion } from "framer-motion"

const MuncParagraph = () => {
    const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-6 text-black font-[var(--font-primary)]">

  <motion.p initial="hidden" whileInView="visible" variants={fadeUp} custom={1.5} className="text-base sm:text-lg leading-relaxed text-black font-[var(--font-primary)]">
    With extensive experience in municipality regulations and compliance requirements, we help pest control businesses maintain ongoing compliance with Dubai Municipality pest control standards and documentation.
  </motion.p>

  <motion.ul initial="hidden" whileInView="visible" variants={fadeUp} custom={2} className="list-disc pl-6 space-y-2 text-black font-[var(--font-primary)]">
    <li className="text-base sm:text-lg hover:text-primary transition-colors duration-200">Food Safety Standards</li>
    <li className="text-base sm:text-lg hover:text-primary transition-colors duration-200">Hygiene Requirements</li>
    <li className="text-base sm:text-lg hover:text-primary transition-colors duration-200">Pest Control Protocols</li>
    <li className="text-base sm:text-lg hover:text-primary transition-colors duration-200">Documentation Standards</li>
  </motion.ul>
</div>

  )
}

export default MuncParagraph