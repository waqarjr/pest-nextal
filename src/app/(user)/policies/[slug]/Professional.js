import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react';

const Professional = ({data}) => {

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

  return (
<motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className=" w-custom mx-auto py-16 sm:py-20 px-4 sm:px-6 md:px-12 ">
  <div className="text-center">
    <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold text-primary mb-6 font-[var(--font-heading)]">
      {data.heading}
    </motion.h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mt-10">
      {data.detail.map((items, i) => (
        <motion.div key={i} variants={fadeUp} custom={i + 2} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-accent transition-all duration-200">
          <h3 className="text-xl font-semibold text-black mb-2 font-[var(--font-heading)]">{items.title}</h3>
          <p className="text-black text-sm font-[var(--font-body)]">{items.desc}</p>
          <ul className="space-y-1 text-black" key={i}>
            {items.list.map((data,i)=>{
              <li key={i} ><CheckCircle className="text-success w-5 h-5" />{data}</li>
            })}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>  )
}

export default Professional