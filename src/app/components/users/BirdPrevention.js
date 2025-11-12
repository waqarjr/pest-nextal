"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function BirdPrevention() {
  const sections = [
    { title: "Bird Prevention Tips", desc: "Essential preventive steps to keep birds from nesting, roosting, or causing damage around your property.", points: ["Seal open entry points in attics, vents, and rooftops", "Remove food waste and standing water", "Install spikes or nets in common roosting areas", "Maintain cleanliness around outdoor spaces"], img: "/assets/birds/birds-prevention.webp" },
    { title: "Benefits of Professional Bird Control", desc: "Why hiring experts is the safest and most effective way to handle bird problems for homes and businesses.", points: ["Safe, humane, and eco-friendly deterrents", "Custom solutions for your property", "Protection against property damage & contamination", "Improved hygiene and compliance with safety standards"], img: "/assets/birds/benefits.jpeg" },
  ];

  return (
    <section className="py-16 bg-[var(--color-secondary)]">
      <div className="max-w-[var(--width-custom)] mx-auto px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] text-center mb-12 font-heading">Bird Prevention & Control</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {sections.map((item, i) => (
            <div key={i} className="card hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative w-full h-56">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[var(--color-success)]">{item.title}</h3>
                <p className="mt-2 text-[var(--color-black)]/70">{item.desc}</p>
                <ul className="mt-4 space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-[var(--color-black)]/70">
                      <CheckCircle className="w-5 h-5 text-[var(--color-success)] mr-2 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
