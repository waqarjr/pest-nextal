"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const metadata = {
  title: "Services | Nextal Pests",
  description: "Explore pest control, termite, disinfection, and food safety services.",
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 90, damping: 14 } },
};

export const services = [
  {
    slug: "cockroaches-pest-control",
    title: "Cockroaches Pest Control",
    excerpt: "Professional cockroach control for homes, restaurants, and offices.",
    bullets: [
      "Gel baiting and spray treatment",
      "Safe and odorless chemicals",
      "Long-lasting protection"
    ],
    content: [
      "Cockroaches are carriers of bacteria, viruses, and allergens.",
      "We use targeted gel baits, sprays, and residual treatments to eliminate infestations.",
      "Our eco-friendly solutions ensure safety for children and pets."
    ],
    images: ["/assets/pests/cockroach.webp"],

  },
  {
    slug: "rodent-pest-control",
    title: "Rodent Pest Control",
    excerpt: "Keep your property rodent-free with safe and effective methods.",
    bullets: [
      "Rodent proofing inspections",
      "Bait stations and traps",
      "Safe for food facilities"
    ],
    content: [
      "Rats and mice damage property and spread diseases like leptospirosis.",
      "We identify entry points and apply tamper-proof traps and bait stations.",
      "Ongoing monitoring prevents reinfestation."
    ],
    images: ["/assets/pests/rat.png", "/assets/pests/rat.png"]
  },
  {
    slug: "mosquitoes-pest-control",
    title: "Mosquitoes Pest Control",
    excerpt: "Prevent mosquito-borne diseases with fogging and larvicide treatment.",
    bullets: ["ULV fogging", "Larvicide treatment", "Prevention methods"],
    content: [
      "Mosquitoes spread malaria, dengue, and Zika virus.",
      "Our ULV fogging targets adult mosquitoes while larvicide eliminates breeding sources.",
      "We also advise on preventive measures like water management."
    ],
    images: ["/assets/pests/Mosquitoes.webp", "/assets/pests/Mosquitoes.webp"]
  },
  {
    slug: "bedbugs-pest-control",
    title: "Bedbugs Pest Control",
    excerpt: "Eliminate bedbugs with heat and chemical treatment.",
    bullets: ["Complete inspection", "Steam & chemical solutions", "Follow-up visits"],
    content: [
      "Bedbugs cause painful bites and spread quickly.",
      "We use heat and chemical treatment to ensure full eradication.",
      "Regular follow-ups prevent re-infestation."
    ],
    images: ["/assets/pests/Bedbugs.webp", "/assets/pests/Bedbugs.webp"]
  },
  {
    slug: "termites-pest-control",
    title: "Termites Pest Control",
    excerpt: "Protect your property with pre- and post-construction termite treatment.",
    bullets: ["Soil treatment", "Baiting systems", "Warranty coverage"],
    content: [
      "Termites silently destroy wood structures.",
      "We apply soil barrier treatment and install baiting systems.",
      "Our treatments come with long-term warranties."
    ],
    images: ["/assets/pests/termites.webp", "/assets/pests/termites.webp"]
  },
  {
    slug: "flies-pest-control-2",
    title: "Flies Pest Control",
    excerpt: "Effective fly control for homes and businesses.",
    bullets: ["Residual sprays", "Fly traps", "Breeding site elimination"],
    content: [
      "Flies spread diseases by contaminating food.",
      "We use sprays, traps, and sanitation measures to control fly populations.",
      "Targeting breeding sites ensures lasting results."
    ],
    images: ["/assets/pests/flies.webp", "/assets/pests/flies.webp"]
  },
  {
    slug: "birds-control-deterrent-service",
    title: "Birds Pest Control",
    excerpt: "Protect buildings from bird damage and droppings.",
    bullets: ["Netting solutions", "Spikes installation", "Humane deterrents"],
    content: [
      "Birds cause damage and health hazards in urban areas.",
      "We install nets, spikes, and repellents for effective control.",
      "All methods are safe and humane."
    ],
    images: ["/assets/pests/birds.webp"]
  },
  {
    slug: "bees-pest-control",
    title: "Bees Pest Control",
    excerpt: "Safe removal of bee hives and wasp nests.",
    bullets: ["Protective gear usage", "Relocation of hives", "Eco-friendly"],
    content: [
      "Bees are important pollinators but can pose risks when nesting in homes.",
      "We safely remove hives and relocate them.",
      "Our team ensures minimal harm to the environment."
    ],
    images: ["/assets/pests/bees.webp", "/assets/pests/bees.webp"]
  },
  {
    slug: "spiders-pest-control-2",
    title: "Spiders Pest Control",
    excerpt: "Remove dangerous and nuisance spiders safely.",
    bullets: ["Inspection of hiding areas", "Targeted spray treatment", "Preventive sealing"],
    content: [
      "Spiders can be venomous and cause panic at home.",
      "We apply safe chemical treatments to eliminate infestations.",
      "Cracks and gaps are sealed to prevent re-entry."
    ],
    images: ["/assets/pests/spiders.webp", "/assets/pests/spiders.webp"]
  },
  {
    slug: "house-lizards-pest-control",
    title: "House Lizards Pest Control",
    excerpt: "Repel and remove lizards from your home.",
    bullets: ["Eco-friendly repellents", "Entry blocking", "Professional removal"],
    content: [
      "House lizards are harmless but unwelcome in many homes.",
      "We use eco-friendly repellents and sealing techniques.",
      "Our solutions keep your home lizard-free."
    ],
    images: ["/assets/pests/house-lizards.webp", "/assets/pests/house-lizards.webp"]
  },
  {
    slug: "ticks-pest-control-2",
    title: "Ticks Pest Control",
    excerpt: "Protect pets and families from tick infestations.",
    bullets: ["Pet-friendly solutions", "Yard sprays", "Tick habitat reduction"],
    content: [
      "Ticks spread diseases like Lyme disease.",
      "We use pet-safe sprays and treatments for homes and yards.",
      "Our prevention methods stop future infestations."
    ],
    images: ["/assets/pests/ticks.webp", "/assets/pests/ticks.webp"]
  },
  {
    slug: "fleas-pest-control-2",
    title: "Fleas Pest Control",
    excerpt: "Stop flea infestations at the source.",
    bullets: ["Pet-safe solutions", "Carpet and sofa treatments", "Follow-up visits"],
    content: [
      "Fleas bite pets and humans, causing discomfort.",
      "We treat carpets, furniture, and pet bedding with safe chemicals.",
      "Multiple treatments ensure full eradication."
    ],
    images: ["/assets/pests/fleas.webp", "/assets/pests/fleas.webp"]
  },
  {
    slug: "ants-pest-control-2",
    title: "Ants Pest Control",
    excerpt: "Get rid of ants with baiting and barrier treatment.",
    bullets: ["Gel baits", "Entry point sealing", "Eco-friendly"],
    content: [
      "Ants invade kitchens and food storage areas.",
      "We use gel baits and barriers to eliminate colonies.",
      "Preventive sealing keeps them away."
    ],
    images: ["/assets/pests/ants.webp"]
  },
  {
    slug: "wild-life-pest-control",
    title: "Wild Life Pest Control",
    excerpt: "Safe handling and removal of wild pests.",
    bullets: ["Humane capture", "Relocation services", "Safety assurance"],
    content: [
      "Wild animals can pose risks in urban areas.",
      "We safely capture and relocate them.",
      "Our experts ensure minimal stress to the animal."
    ],
    images: ["/assets/pests/deer.png"]
  },
  
];



export default function Pests() {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          controls.start("show");
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, [controls, hasAnimated]);

  const handleHoverStart = () => {
    if (!hasAnimated) {
      controls.start("show");
      setHasAnimated(true);
    }
  };

  return (
    <section ref={sectionRef} onMouseEnter={handleHoverStart} onTouchStart={handleHoverStart} className="mt-1 mx-auto w-custom px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="relative text-center max-w-4xl mx-auto p-12 rounded-2xl overflow-hidden">
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4 font-[var(--font-heading)]">
          Choose a Pest Service
        </h2>
      </div>
      <motion.div className="mt-2 grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" variants={containerVariants} initial="hidden" animate={controls}>
        {services.map((svc, i) => (
          <motion.div key={svc.slug} variants={itemVariants} whileHover={{ scale: 1.07, rotate: Math.random() * 2 - 1, transition: { type: "spring", stiffness: 250, damping: 15 } }} whileTap={{ scale: 0.98 }} className="relative group rounded-xl cursor-pointer">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500"></div>
            <Link href={`/${svc.slug}`} className="relative flex flex-col h-[190px] items-center rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 text-white bg-black border border-gray-800 hover:border-primary overflow-hidden">
              <div className="place-items-center mb-4 relative">
                <motion.div className="w-18 h-18 flex items-center justify-center relative" whileHover={{ y: -4, scale: 1.1, transition: { type: "spring", stiffness: 300, damping: 12 } }}>
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center bg-black/50 border border-primary/30 shadow-inner transition-all duration-500" style={{ WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)" }}>
                    <Image src={svc.icon || svc.images[0]} alt={svc.title} width={50} height={50} className="object-contain filter group-hover:brightness-125 group-hover:scale-110 transition-all duration-500" />
                  </div>
                  <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="absolute inset-0 border border-primary/30 rounded-full"></motion.div>
                </motion.div>
              </div>
              <h2 className="font-semibold text-sm sm:text-base text-center group-hover:text-accent transition-all duration-300 group-hover:font-bold font-[var(--font-body)]">
                {svc.title}
              </h2>
              <div className="mt-2 opacity-0 group-hover:opacity-90 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              </div>
            </Link>
          </motion.div>
        ))}
        <motion.div variants={itemVariants}>
          <Link href="/services" className="group flex flex-col items-center h-[190px] rounded-xl shadow-lg transition-all duration-500 p-6 text-white bg-black border border-gray-800 hover:border-primary hover:scale-110 hover:rotate-1 hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>
            <div className="w-16 h-16 flex items-center justify-center mb-4 relative">
              <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-ping group-hover:animate-none"></div>
              <div className="relative z-10 w-16 h-16 flex items-center justify-center bg-black/60 rounded-full transition-all duration-500 group-hover:scale-105" style={{ WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)" }}>
                <span className="text-3xl font-bold text-accent transition-colors duration-500">+</span>
              </div>
            </div>
            <p className="font-semibold text-sm sm:text-base text-center group-hover:text-accent transition-all duration-300 group-hover:font-bold font-[var(--font-body)]">
              Show All Services
            </p>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}