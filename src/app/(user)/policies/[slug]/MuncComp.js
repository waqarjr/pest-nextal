import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react";
const MuncComp = () => {
    const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };
  const value = [
      "Food Safety Standards",
      "Hygiene Requirements",
      "Pest Control Protocols",
      "Documentation Standards",
      "Staff Training Records",
      "Treatment Records",
    ]
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
  <motion.h2 initial="hidden" whileInView="visible" variants={fadeUp} className="text-center text-2xl sm:text-3xl font-semibold mb-8 text-primary font-[var(--font-primary)] text-shadow">
    Compliance Areas We Cover
  </motion.h2>

  <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {value.map((area, i) => (
      <motion.li key={i} initial="hidden" whileInView="visible" variants={fadeUp} custom={i} className="flex items-center gap-3 bg-white border border-accent/10 p-5 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 text-black font-[var(--font-primary)]">
        <CheckCircle className="text-success w-5 h-5 flex-shrink-0" />
        <span className="text-base sm:text-lg font-medium">{area}</span>
      </motion.li>
    ))}
  </ul>
</div>

  )
}

export default MuncComp