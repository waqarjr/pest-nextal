"use client";

import { ShieldCheck, SprayCan, Clock, Leaf, Award, PhoneCall } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Proven Expertise", desc: "Our licensed technicians have years of experience dealing with mosquito infestations of all sizes." },
  { icon: SprayCan, title: "Advanced Treatments", desc: "We use ULV fogging, misting, and targeted solutions that attack mosquitoes at every stage of their lifecycle." },
  { icon: Clock, title: "Long-Term Protection", desc: "Our mosquito management programs are designed to provide continuous control, with regular treatments for best results." },
  { icon: Leaf, title: "Eco-Friendly Options", desc: "We offer safe and environmentally responsible mosquito solutions for homes, businesses, and outdoor spaces." },
  { icon: Award, title: "Trusted by Communities", desc: "Partnered with global leaders and recognized organizations to deliver high-quality pest control solutions." },
  { icon: PhoneCall, title: "Quick Response", desc: "Fast inspections and same-day service available to ensure your comfort and safety." },
];

export const MosquitoControl = () => {
  return (
    <section className="py-20 bg-[var(--color-secondary)]">
      <div className="max-w-[var(--width-custom)] mx-auto px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-primary)] mb-12 font-heading">Why Choose Our Mosquito Control Services?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="card hover:shadow-lg hover:scale-[1.02] transition-all duration-300 text-center flex flex-col items-center">
                <span role="img" aria-hidden="true" className="mb-4"><Icon className="w-8 h-8 text-[var(--color-success)]" /></span>
                <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">{item.title}</h3>
                <p className="text-[var(--color-black)]/70">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
