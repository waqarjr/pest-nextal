"use client";
import { Factory, ShieldCheck, Wrench, Leaf } from "lucide-react";

export default function IndustriesControl() {
  const features = [
    { icon: <Factory className="w-7 h-7 text-[var(--color-success)]" />, text: "Certified for Industrial Safety & HACCP Compliance" },
    { icon: <ShieldCheck className="w-7 h-7 text-[var(--color-success)]" />, text: "Government Approved & ISO Standard Procedures" },
    { icon: <Wrench className="w-7 h-7 text-[var(--color-success)]" />, text: "Customized IPM Programs for Every Facility Type" },
    { icon: <Leaf className="w-7 h-7 text-[var(--color-success)]" />, text: "Eco-Friendly & Worker-Safe Pest Solutions" },
    { icon: <ShieldCheck className="w-7 h-7 text-[var(--color-success)]" />, text: "Detailed Inspection Reports & Preventive Maintenance" },
    { icon: <Factory className="w-7 h-7 text-[var(--color-success)]" />, text: "Specialized for Warehouses, Food Plants & Factories" },
  ];

  return (
    <section className="py-16 bg-[var(--color-secondary)]">
      <div className="max-w-[var(--width-custom)] mx-auto px-4 md:px-8 lg:px-10 mt-20 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold text-[var(--color-primary)] font-heading mb-6">Why Industries Choose Our Pest Control Expertise</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all card">
              {item.icon}
              <p className="text-[var(--color-black)]/70 text-sm font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
