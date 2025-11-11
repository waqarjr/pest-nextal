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
       <section className="bg-secondary py-6 xs:py-8 sm:py-12 md:py-16 mt-8 xs:mt-10 overflow-hidden w-full max-w-[var(--width-custom)] mx-auto">
      <div className="max-w-4xl mx-auto text-center px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8">
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-2 xs:mb-3 sm:mb-4 md:mb-5 font-[var(--font-heading)]">
          Detailed Service Categories
        </h2>
        <p className="text-black text-xs xs:text-sm sm:text-base md:text-lg mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-14 font-[var(--font-body)]">
          Our comprehensive pest control services are organized by pest type and behavior, ensuring targeted and
          effective treatments for every situation.
        </p>
      </div>

      <div className="space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8">
        {servicesData.map((category, index) => (
          <div
            key={index}
            className={`grid gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 items-center w-full lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
          >
            <div className="relative w-full aspect-video xs:aspect-[16/10] sm:aspect-[16/9] md:aspect-[5/3] lg:aspect-[16/7] rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden shadow-sm xs:shadow-md sm:shadow-lg hover:shadow-lg xs:hover:shadow-xl transition-shadow duration-200">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                fill
                sizes="(max-width: 420px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                className="object-cover object-center rounded-lg xs:rounded-xl sm:rounded-2xl"
                priority
              />
              <div className="absolute inset-0 bg-black/20 xs:bg-black/25 sm:bg-black/20"></div>
            </div>

            <div className="px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2 xs:mb-3 sm:mb-4 md:mb-5 font-[var(--font-heading)]">
                {category.title}
              </h2>
              <p className="text-black text-xs xs:text-sm sm:text-base md:text-lg mb-3 xs:mb-4 sm:mb-5 md:mb-6 font-[var(--font-body)]">
                {category.description}
              </p>

              <div className="grid gap-2 xs:gap-3 sm:gap-4 md:gap-5 grid-cols-1 xs:grid-cols-1 sm:grid-cols-2">
                {category.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg xs:rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-3 xs:p-4 sm:p-5 border border-gray-100 hover:border-primary/20"
                  >
                    <h3 className="font-semibold text-black text-sm xs:text-base sm:text-base mb-1 xs:mb-2 sm:mb-3 font-[var(--font-heading)]">
                      {service.name}
                    </h3>
                    <ul className="space-y-1 xs:space-y-1.5 sm:space-y-2 text-black text-xs xs:text-xs sm:text-sm font-[var(--font-body)]">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle size={14} className="text-success flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
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

      <div className="mt-8 xs:mt-10 sm:mt-12 md:mt-14 lg:mt-16 px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-secondary p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 rounded-lg xs:rounded-xl sm:rounded-2xl shadow-inner border-2 border-primary hover:border-primary/80 transition-colors duration-200">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 xs:mb-3 sm:mb-4 md:mb-5 font-[var(--font-heading)]">
            Ready to Make Your Space Pest-Free?
          </h2>
          <p className="text-black text-xs xs:text-sm sm:text-base md:text-lg mb-4 xs:mb-5 sm:mb-6 md:mb-8 max-w-xl mx-auto font-[var(--font-body)]">
            Schedule your free inspection today and let our experts handle the rest — safe, fast, and effective pest
            control guaranteed.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-2 xs:gap-3 sm:gap-4 pt-2 xs:pt-3 sm:pt-4">
            <a
              href={`tel:${process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-1.5 xs:gap-2 bg-primary hover:bg-primary/90 active:bg-primary/95 text-white px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-md xs:rounded-lg text-xs xs:text-sm sm:text-base font-semibold transition-all duration-200 shadow-md hover:shadow-lg active:shadow-sm font-[var(--font-body)]"
            >
              <Phone size={16} className="xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
              <span className="hidden xs:inline">{process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}</span>
            </a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_AUTH_WHATS_NUBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-success hover:bg-success/90 active:bg-success/95 text-white p-2 xs:p-2.5 sm:p-3 rounded-md xs:rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:shadow-sm"
              aria-label="Chat on WhatsApp"
            >
              <FaWhatsapp className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6" />
            </a>
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_AUTH_EMAIL}`}
              className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 active:bg-accent/95 text-white p-2 xs:p-2.5 sm:p-3 rounded-md xs:rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:shadow-sm"
              aria-label="Contact via Email"
            >
              <FaEnvelope className="w-4 xs:w-5 sm:w-6 h-4 xs:h-5 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>



  );
}