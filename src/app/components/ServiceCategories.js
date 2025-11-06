"use client";

import Image from "next/image";
import { CheckCircle, Phone } from "lucide-react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const servicesData = [
  {
    title: "Crawling Insects",
    description: "Comprehensive control for ground-dwelling pests that invade your living spaces.",
    image: "/assets/crawling.jpg",
    services: [
      { name: "Cockroaches", points: ["German & American species", "Gel baiting system", "Crack & crevice treatment"] },
      { name: "Ants", points: ["Colony elimination", "Barrier protection", "Sweet & protein baits"] },
      { name: "Silverfish", points: ["Moisture control", "Residual spraying", "Habitat modification"] },
      { name: "Beetles", points: ["Species identification", "Targeted treatment", "Prevention methods"] },
    ],
  },
  {
    title: "Flying Insects",
    description: "Advanced solutions for airborne pests that disrupt your comfort and health.",
    image: "/assets/mosquito/mosquito-bg.avif",
    services: [
      { name: "Flies", points: ["Source elimination", "UV light traps", "Breeding site treatment"] },
      { name: "Mosquitoes", points: ["Larvicide application", "Adult mosquito control", "Standing water treatment"] },
      { name: "Wasps", points: ["Nest removal", "Protective equipment", "Safe elimination methods"] },
      { name: "Moths", points: ["Pheromone traps", "Fabric protection", "Larval control"] },
    ],
  },
  {
    title: "Blood-Feeding Pests",
    description: "Specialized treatments for parasitic pests that pose serious health risks.",
    image: "/assets/bed-bugs.jpg",
    services: [
      { name: "Bed Bugs", points: ["Heat treatment", "Chemical application", "Mattress encasement"] },
      { name: "Fleas", points: ["Pet treatment coordination", "Carpet & upholstery treatment", "Life cycle interruption"] },
    ],
  },
  {
    title: "Structural Pests",
    description: "Protection against pests that can cause significant property damage.",
    image: "/assets/rodent/rodent-4.jpg",
    services: [
      { name: "Termites", points: ["Soil treatment", "Wood protection", "Monitoring stations"] },
      { name: "Rodents", points: ["Exclusion methods", "Bait stations", "Sanitation guidance"] },
    ],
  },
  {
    title: "Outdoor Pests",
    description: "Comprehensive outdoor pest management for gardens and exterior areas.",
    image: "/assets/out-door.jpg",
    services: [
      { name: "Spiders", points: ["Web removal", "Perimeter treatment", "Habitat modification"] },
      { name: "Scorpions", points: ["UV light detection", "Barrier treatment", "Hiding place elimination"] },
      { name: "Lizards", points: ["Humane removal", "Entry point sealing", "Habitat modification"] },
    ],
  },
];

export default function ServiceCategories() {
  return (
    <section className="bg-secondary py-16 mt-10  overflow-hidden w-custom mx-auto">
      <div className="max-w-4xl mx-auto text-center px-4 md:px-6">
        <h2 className="text-3xl sm:text-5xl font-bold text-primary mb-4 font-[var(--font-heading)]">Detailed Service Categories</h2>
        <p className="text-black mb-12 font-[var(--font-body)]">Our comprehensive pest control services are organized by pest type and behavior, ensuring targeted and effective treatments for every situation.</p>
      </div>
      <div className="space-y-10 md:space-y-15">
        {servicesData.map((category, index) => (
          <div key={index} className={`grid lg:grid-cols-2 gap-10 items-center w-full ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden">
              <Image src={category.image} alt={category.title} fill className="object-cover rounded-2xl" priority />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="px-6 md:px-16">
              <h2 className="text-2xl font-bold text-primary mb-3 font-[var(--font-heading)]">{category.title}</h2>
              <p className="text-black mb-6 font-[var(--font-body)]">{category.description}</p>
              <div className="grid sm:grid-cols-2 gap-6">
                {category.services.map((service, idx) => (
                  <div key={idx} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
                    <h3 className="font-semibold text-black mb-3 font-[var(--font-heading)]">{service.name}</h3>
                    <ul className="space-y-2 text-black text-sm font-[var(--font-body)]">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle size={14} className="text-success mr-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center bg-secondary p-5 rounded-2xl shadow-inner max-w-5xl mx-auto border-2 border-primary">
        <h2 className="text-3xl font-bold text-primary mb-4 font-[var(--font-heading)]">Ready to Make Your Space Pest-Free?</h2>
        <p className="text-black mb-8 max-w-xl mx-auto font-[var(--font-body)]">Schedule your free inspection today and let our experts handle the rest — safe, fast, and effective pest control guaranteed.</p>
        <div className="flex flex-row justify-center items-center gap-4 pt-2">
          <a href={`tel:${process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}`} className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#6B0F2A] text-white px-6 py-3 rounded-lg transition-all duration-200 text-base font-semibold shadow-lg hover:shadow-xl font-[var(--font-body)]">
            <Phone className="w-4 h-4" />
            <span>{process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}</span>
          </a>
          <a href={`https://wa.me/${process.env.NEXT_PUBLIC_AUTH_WHATS_NUBER}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-success hover:bg-[#218838] text-white p-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl" aria-label="Chat on WhatsApp">
            <FaWhatsapp className="w-6 h-6" />
          </a>
          <a href={`mailto:${process.env.NEXT_PUBLIC_AUTH_EMAIL}`} className="inline-flex items-center justify-center bg-accent hover:bg-[#C4A20F] text-white p-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl" aria-label="Contact via Email">
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}