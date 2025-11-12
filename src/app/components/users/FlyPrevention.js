"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function FlyPrevention() {
  const sections = [
    {
      title: "Fly Prevention Tips",
      desc: "Proactive measures to reduce the risk of fly infestations and maintain a hygienic environment.",
      points: [
        "Keep garbage bins sealed and dispose of waste regularly",
        "Clean up food spills immediately and maintain kitchen hygiene",
        "Fix leaks and eliminate standing water sources",
        "Install window and door screens to block fly entry",
        "Regularly clean drains and moist areas",
        "Store food in sealed containers",
        "Maintain proper ventilation in storage areas",
        "Schedule periodic professional inspections",
      ],
      img: "/assets/flies/prevention.webp",
    },
    {
      title: "Benefits of Professional Fly Control",
      desc: "Professional fly control ensures effective treatment and long-term protection for homes and businesses.",
      points: [
        "Accurate identification of fly species and infestation level",
        "Targeted treatments with safe and effective solutions",
        "Breeding site elimination to stop future infestations",
        "Installation of UV light traps and monitoring systems",
        "Comprehensive food safety and HACCP compliance",
        "Emergency response for severe infestations",
        "Long-lasting prevention strategies",
        "Ongoing maintenance and monitoring programs",
      ],
      img: "/assets/flies/benefits.jpg",
    },
  ];

  return (
    <section className="py-20 bg-secondary font-[Montserrat]">
      <div className="max-w-[var(--width-custom)] mx-auto px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl xl:text-4xl font-bold text-primary text-center mb-12 ">Fly Prevention & Control</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {sections.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative w-full h-56"><Image src={item.img} alt={item.title} fill className="object-cover" /></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-primary ">{item.title}</h3>
                <p className="mt-2 text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                <ul className="mt-4 space-y-2">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-sm">
                      <CheckCircle className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" />
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
