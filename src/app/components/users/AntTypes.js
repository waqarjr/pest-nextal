export default function AntTypes() {
  const types = [
    { name: "Carpenter Ants", behavior: ["Wood tunneling", "Structural damage", "Large colonies", "Outdoor nesting"], treatment: "Structural treatment and colony elimination" },
    { name: "Fire Ants", behavior: ["Painful stings", "Aggressive behavior", "Mound building", "Outdoor activity"], treatment: "Mound treatment and colony eradication" },
    { name: "Sugar Ants", behavior: ["Sweet food attraction", "Kitchen invasion", "Small size", "Rapid reproduction"], treatment: "Kitchen treatment and food area protection" },
    { name: "Pharaoh Ants", behavior: ["Disease transmission", "Multiple queens", "Small size", "Rapid spread"], treatment: "Multi-queen colony elimination and disease prevention" },
    { name: "Odorous House Ants", behavior: ["Strong odor", "Home invasion", "Food seeking", "Rapid reproduction"], treatment: "Home treatment and odor elimination" },
    { name: "Argentine Ants", behavior: ["Large colonies", "Aggressive behavior", "Native species displacement", "Rapid spread"], treatment: "Large colony control and native species protection" },
  ];

  return (
    <section className="bg-secondary py-12 sm:py-14 md:py-16 lg:py-20">
      <div className="max-w-[var(--width-custom)] mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-8 sm:mb-10 font-[var(--font-heading)]">Types of Ants We Control</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {types.map((t, i) => (
            <div key={i} className="p-5 sm:p-6 md:p-7 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200">
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3 font-[var(--font-heading)]">{t.name}</h3>
              <p className="font-semibold text-black mb-1 font-[var(--font-body)]">Behavior:</p>
              <ul className="list-disc list-inside text-sm sm:text-base text-black mb-3 space-y-1 font-[var(--font-body)]">
                {t.behavior.map((b, j) => (<li key={j}>{b}</li>))}
              </ul>
              <p className="font-semibold text-black mb-1 font-[var(--font-body)]">Treatment:</p>
              <p className="text-sm sm:text-base text-black leading-relaxed font-[var(--font-body)]">{t.treatment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
