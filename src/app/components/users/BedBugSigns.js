"use client";
import Image from "next/image";
import { AlertTriangle, HeartPulse } from "lucide-react";

const signs = [
  { title: "Signs of Bed Bug Infestation", desc: "Bed bugs leave visible clues on beds, furniture, and skin. Identifying these signs early helps prevent larger infestations.", points: ["Red, itchy bite marks on arms, legs, or back", "Blood stains or dark spots on bed sheets and pillowcases", "Tiny eggs, shed skins, or live bugs around mattress seams", "Unpleasant musty odor in heavily infested areas"], img: "/assets/bedbug/bedbugs-signs.jpg", icon: <AlertTriangle className="w-8 h-8 text-[var(--color-success)]" /> },
  { title: "Health Issues Caused by Bed Bugs", desc: "Although bed bugs do not transmit diseases, their bites and infestations can cause significant health concerns.", points: ["Severe itching and allergic skin reactions", "Sleep disturbance and anxiety", "Secondary skin infections from scratching", "Emotional stress due to persistent infestations"], img: "/assets/bedbug/bedbug-bg.webp", icon: <HeartPulse className="w-8 h-8 text-[var(--color-success)]" /> },
];

export default function BedBugSigns() {
  return (
    <section className="py-16 bg-[var(--color-secondary)]">
      <div className="max-w-[var(--width-custom)] mx-auto px-4 md:px-8 lg:px-10 space-y-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-primary)] font-heading mb-12">Signs & Health Issues of Bed Bugs</h2>

        {signs.map((item, i) => (
          <div key={i} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
            <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-md card">
              <Image src={item.img} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                {item.icon}
                <h3 className="text-2xl font-semibold text-[var(--color-primary)] font-heading">{item.title}</h3>
              </div>
              <p className="text-[var(--color-black)]/70 mb-4">{item.desc}</p>
              <ul className="space-y-2">
                {item.points.map((point, j) => (
                  <li key={j} className="flex items-center gap-2 text-[var(--color-black)]/70">
                    <span className="w-2 h-2 bg-[var(--color-success)] rounded-full flex-shrink-0"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
