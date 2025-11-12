"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function TermitePrevention() {
  const sections = [
    { title: "Termite Prevention Tips", desc: "Proactive measures to reduce the risk of termite infestations and protect your property.", points: ["Maintain proper drainage around your property foundation", "Keep wood and mulch away from building foundations", "Regularly inspect wooden structures for signs of damage", "Control moisture levels in crawl spaces and basements", "Schedule annual professional termite inspections", "Address any water leaks or moisture issues promptly", "Use termite-resistant materials for new construction", "Maintain proper ventilation in attics and crawl spaces"], img: "/assets/termites/prevention.jpeg" },
    { title: "Benefits of Professional Termite Control", desc: "Professional termite control provides comprehensive protection and long-term structural safety.", points: ["Professional termite species identification and assessment", "Advanced detection methods including thermal imaging technology", "Long-lasting protection with residual termiticide barriers", "Colony elimination through strategic baiting systems", "Pre-construction and post-construction treatment options", "24/7 emergency response for severe termite infestations", "Comprehensive warranty coverage on all treatments", "Preventive maintenance programs for ongoing protection"], img: "/assets/termites/professional.webp" },
  ];

  return (
    <section className="py-16 bg-secondary font-[Montserrat]">
      <div className="max-w-[var(--width-custom)] mx-auto px-4 xl:px-6">
        <h2 className="text-3xl xl:text-4xl font-bold text-primary text-center mb-12 ">Termite Prevention & Control</h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {sections.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="relative w-full h-56"><Image src={item.img} alt={item.title} fill className="object-cover" /></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-primary ">{item.title}</h3>
                <p className="mt-2 text-gray-700 leading-relaxed font-[Montserrat]">{item.desc}</p>
                <ul className="mt-4 space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-700"><CheckCircle className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" /><span className="font-[Montserrat]">{point}</span></li>
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
