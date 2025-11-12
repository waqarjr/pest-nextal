"use client";

import { Phone } from "lucide-react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export const MosquitoTypes = () => {
  const mosquitoes = [
    { name: "Aedes Mosquitoes", desc: "Day-biting mosquitoes that breed in artificial containers and can transmit diseases like dengue, chikungunya, and Zika.", habits: "Artificial containers, flower pots, gutters, and any standing water.", control: "Elimination of breeding sites, larval control, and barrier treatments.", img: "/assets/mosquito/aedes.jpeg" },
    { name: "Culex Mosquitoes", desc: "Night-biting mosquitoes that breed in standing water and can transmit West Nile virus and other diseases.", habits: "Standing water, ponds, ditches, and storm drains.", control: "Water source elimination, larval treatment, and adult mosquito control.", img: "/assets/mosquito/culex.jpeg" },
    { name: "Anopheles Mosquitoes", desc: "Mosquitoes that can transmit malaria and prefer clean, fresh water for breeding.", habits: "Clean water sources, ponds, and slow-moving streams.", control: "Water source management, larval control, and preventive measures.", img: "/assets/mosquito/anopheles.webp" },
  ];

  return (
    <section className="py-16 bg-[var(--color-secondary)]" aria-labelledby="mosquito-heading">
      <div className="max-w-[var(--width-custom)] mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-14">
          <h2 id="mosquito-heading" className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-2 font-heading">Types of Mosquitoes We Control</h2>
          <p className="text-[var(--color-black)]/70 max-w-2xl mx-auto">Understanding different mosquito species helps us provide targeted and effective control solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mosquitoes.map((item, i) => (
            <article key={i} className="card hover:shadow-lg transition p-6 flex flex-col">
              <div className="relative w-full h-56 sm:h-64 lg:h-60 rounded-xl overflow-hidden mb-5">
                <Image src={item.img} alt={`${item.name} illustration`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-3">{item.name}</h3>
              <p className="text-[var(--color-black)]/70 mb-4">{item.desc}</p>
              <dl className="space-y-3">
                <div>
                  <dt className="font-medium text-[var(--color-success)]">Breeding Habits:</dt>
                  <dd className="text-[var(--color-black)]/70">{item.habits}</dd>
                </div>
                <div>
                  <dt className="font-medium text-[var(--color-success)]">Control Methods:</dt>
                  <dd className="text-[var(--color-black)]/70">{item.control}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MosquitoTypes;
