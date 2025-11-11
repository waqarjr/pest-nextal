import React from 'react'
import { motion } from 'framer-motion'

const Documentation = ({data}) => {

  const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};


  return (<>
  <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className=" w-custom mx-auto py-16 sm:py-20 px-4 sm:px-6 md:px-12 bg-secondary">
  <div className=" text-center">
    <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-primary mb-6 font-[var(--font-heading)]">
      {data.heading}
    </motion.h2>
    <motion.p variants={fadeUp} custom={2} className="text-base md:text-lg text-black max-w-2xl mx-auto mb-12 font-[var(--font-body)]">
      {data.paragraph}
    </motion.p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
      {data.detail.map(({ num, title, desc }, i) => (
        <motion.div key={i} variants={fadeUp} custom={i * 0.3} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-accent transition-all duration-200">
          <div className="text-accent text-2xl font-bold mb-2 font-[var(--font-heading)]">{num}</div>
          <h3 className="text-xl font-semibold text-primary mb-2 font-[var(--font-heading)]">{title}</h3>
          <p className="text-base text-black font-[var(--font-body)]">{desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>
  </>)
}

export default Documentation