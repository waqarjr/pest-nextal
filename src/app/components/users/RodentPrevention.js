import { ShieldCheck, Trash2, Package, Home, Leaf } from "lucide-react";

export default function RodentPrevention() {
  const tips = [
    { icon: <ShieldCheck className="w-7 h-7 text-success" />, title: "Seal Entry Points", desc: "Close gaps, cracks, and openings around doors, windows, and utility lines to block rodent access." },
    { icon: <Trash2 className="w-7 h-7 text-success" />, title: "Proper Waste Management", desc: "Dispose of garbage regularly and keep bins tightly sealed to avoid attracting rodents." },
    { icon: <Package className="w-7 h-7 text-success" />, title: "Store Food Securely", desc: "Keep food in airtight containers and avoid leaving pet food or crumbs accessible." },
    { icon: <Home className="w-7 h-7 text-success" />, title: "Maintain Cleanliness", desc: "Declutter storage areas and reduce nesting materials like cardboard and paper piles." },
    { icon: <Leaf className="w-7 h-7 text-success" />, title: "Yard & Garden Care", desc: "Trim overgrown vegetation, keep firewood off the ground, and reduce rodent harborage outdoors." },
  ];
 
  return (
    <section className="py-20 bg-secondary ">
      <div className="max-w-[var(--width-custom)] mx-auto px-4 xl:px-6">
        <h2 className="text-3xl xl:text-4xl font-bold text-black text-center mb-12 ">Rodent Prevention Tips</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <div className="flex justify-center mb-4">{tip.icon}</div>
              <h3 className="text-lg font-semibold text-primary  mb-2">{tip.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed ">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
