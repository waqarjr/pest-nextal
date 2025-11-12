"use client";
import Image from "next/image";

export default function LizardTypes() {
  const lizards = [
    { name: "House Geckos", desc: "Small lizards commonly found in homes and buildings, often seen on walls and ceilings.", behavior: "Wall climbing, nocturnal activity, insect feeding, indoor nesting", treatment: "Indoor treatment and entry point sealing", img: "/assets/lizards/house-geckos.jpg" },
    { name: "Monitor Lizards", desc: "Large lizards that can cause property damage and pose safety risks to humans and pets.", behavior: "Large size, aggressive behavior, property damage, outdoor activity", treatment: "Comprehensive area control and safety measures", img: "/assets/lizards/monitor-lizard.webp" },
    { name: "Skinks", desc: "Medium-sized lizards found in gardens and outdoor areas, can enter buildings.", behavior: "Garden habitats, building entry, insect feeding, outdoor nesting", treatment: "Outdoor treatment and entry point sealing", img: "/assets/lizards/skinks.jpg" },
    { name: "Chameleons", desc: "Color-changing lizards that can be invasive in certain environments.", behavior: "Color adaptation, slow movement, insect feeding, tree habitats", treatment: "Habitat modification and targeted control", img: "/assets/lizards/chameleon.jpg" },
    { name: "Agamas", desc: "Sun-loving lizards commonly found in arid and semi-arid environments.", behavior: "Sun basking, territorial behavior, insect feeding, rock habitats", treatment: "Habitat modification and preventive measures", img: "/assets/lizards/agamas.jpeg" },
    { name: "Fence Lizards", desc: "Lizards commonly found on fences and walls, can enter properties.", behavior: "Fence climbing, wall activity, insect feeding, property entry", treatment: "Perimeter treatment and entry point sealing", img: "/assets/lizards/fence-lizard.jpg" },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-[var(--width-custom)] mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary  uppercase font-heading">Types of Lizards We Control</h2>
          <p className="mt-4 text-black">Understanding different lizard types helps us provide appropriate and effective control methods.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {lizards.map((lizard, idx) => (
            <div key={idx} className="card hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative w-full h-56">
                <Image src={lizard.img} alt={lizard.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-success">{lizard.name}</h3>
                <p className="mt-2 text-black">{lizard.desc}</p>
                <div className="mt-4">
                  <p className="font-medium text-[var(--color-primary)]">Behavior:</p>
                  <p className="text-[var(--color-black)]/70">{lizard.behavior}</p>
                </div>
                <div className="mt-2">
                  <p className="font-medium text-[var(--color-primary)]">Treatment:</p>
                  <p className="text-[var(--color-black)]/70">{lizard.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
