import Image from "next/image";

 const CockroachInfestation = () => {
  const signs = [
    { title: "Droppings", desc: "Black or brown specs around cabinets, corners, and behind appliances.", img: "/assets/cockroaches/Cockroach-Dropping.webp" },
    { title: "Musty Odor", desc: "A strong, unpleasant smell that gets worse as the infestation grows.", img: "/assets/cockroaches/musty-odour.jpg" },
    { title: "Shed Skins & Egg Cases", desc: "Cockroaches shed skin as they grow and leave behind egg casings.", img: "/assets/cockroaches/cockroach-eggs-treatment.jpg" },
    { title: "Sightings at Night", desc: "Most active in dark, warm, and humid areas such as kitchens and bathrooms.", img: "/assets/cockroaches/night-cockroaches.webp" },
  ];

  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 bg-secondary">
      <div className="max-w-[var(--width-custom)] px-4 sm:px-6 md:px-8 mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-4 sm:mb-6 font-[var(--font-heading)]">Signs of Cockroach Infestation</h2>
        <p className="text-black text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-14 text-sm sm:text-base md:text-lg font-[var(--font-body)] leading-relaxed">Identifying an infestation early can help prevent damage and health risks. Watch out for these common signs in your home or business:</p>

        <div className="space-y-10 sm:space-y-12 md:space-y-14">
          {signs.map((item, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="w-full md:w-1/2">
                <Image src={item.img} alt={item.title} width={600} height={400} className="rounded-2xl shadow-md object-cover w-full h-[250px] sm:h-[300px] md:h-[340px] lg:h-[380px]" />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-3 font-[var(--font-heading)]">{item.title}</h3>
                <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed font-[var(--font-body)]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CockroachInfestation;