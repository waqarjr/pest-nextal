"use client";
import Image from "next/image";
import { ShieldCheck, Leaf, Hammer, PhoneCall } from "lucide-react";
import { Phone } from "lucide-react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function BirdNestRemoval() {
  const methods = [
    { icon: <ShieldCheck className="w-6 h-6 text-success" />, title: "Safe Nest Relocation", desc: "We carefully remove and relocate bird nests following municipality and environmental regulations — ensuring no harm to the birds." },
    { icon: <Leaf className="w-6 h-6 text-success" />, title: "Eco-Friendly Deterrents", desc: "We install non-toxic and humane deterrents such as bird spikes, nets, and reflective systems to prevent future nesting." },
    { icon: <Hammer className="w-6 h-6 text-success" />, title: "Cleaning & Disinfection", desc: "After removal, we sanitize and disinfect the area to eliminate mites, droppings, and odor for a safe, hygienic environment." },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-[var(--width-custom)] mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-primary font-heading">Humane Bird Nest Removal</h2>
          <p className="text-[var(--color-black)]/70 max-w-2xl mx-auto">Professional and ethical bird nest removal services that protect your property while ensuring the safety of native birds.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <Image src="/assets/birds/humane.jpg" alt="Bird Nest Removal Service" width={550} height={400} className="rounded-xl shadow-md object-cover" />
          </div>
          <div className="space-y-6">
            {methods.map((item, i) => (
              <div key={i} className="card flex items-start gap-4 p-4 border border-secondary rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">{item.title}</h3>
                  <p className="text-black text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
