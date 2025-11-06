import { Utensils, ShieldCheck, Trash2, Droplet, Search } from "lucide-react";

 const PreventionTips = () => {
  const tips = [
    { icon: <Utensils className="w-7 h-7 text-accent" />, title: "Keep Kitchen Clean", desc: "Seal food containers, wipe counters, and never leave food or liquids exposed." },
    { icon: <ShieldCheck className="w-7 h-7 text-accent" />, title: "Block Entry Points", desc: "Seal cracks, drains, and gaps around doors, windows, and pipes." },
    { icon: <Trash2 className="w-7 h-7 text-accent" />, title: "Dispose of Trash Daily", desc: "Empty bins regularly and keep trash covered to deny cockroaches access." },
    { icon: <Droplet className="w-7 h-7 text-accent" />, title: "Fix Moisture Problems", desc: "Repair leaks and improve ventilation to eliminate water sources." },
    { icon: <Search className="w-7 h-7 text-accent" />, title: "Regular Pest Inspections", desc: "Schedule inspections to catch early signs before infestations grow." },
  ];

  return (
    <section className="py-16 sm:py-20 bg-secondary text-center font-[var(--font-body)]">
      <div className="w-custom mx-auto px-3 sm:px-6">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-[var(--font-heading)] font-bold text-primary mb-10 sm:mb-14">Top Cockroach Prevention Tips</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {tips.map((item, i) => (
            <div key={i} className="bg-secondary/5 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="text-lg font-semibold text-primary mb-2">{item.title}</h4>
              <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PreventionTips;