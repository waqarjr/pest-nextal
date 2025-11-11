"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Home, Building2, Factory, Store,Users,CheckCircle} from "lucide-react";



const Services = ({data}) => {
  
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };
  
  
  return (
          <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto bg-secondary">
        <div className=" text-center">
          <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={1} className="text-3xl md:text-4xl font-bold text-primary mb-6">
            {data.heading}
          </motion.h2>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2} className="text-black max-w-2xl mx-auto mb-12">
            {data.paragraph}
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.details.map((data, i) => (
              <motion.div key={i}  variants={fadeUp} initial="hidden" animate="visible" custom={i * 0.3}
                className="bg-white rounded-xl p-6 shadow-sm  hover:shadow-md transition-all duration-200">
                {data.icon}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {data.title}
                </h3>
                <p className="text-black text-sm">{data.desc}</p>
                <ul className="text-black text-sm space-y-1">
                  {data.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Services