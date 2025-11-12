import { Droplet, Zap, House, Volume2, Grip } from "lucide-react";

export default function RodentSigns() {
  const signs = [
    { icon: <Droplet className="w-7 h-7 text-emerald-600" />, text: "Droppings in cupboards, under sinks, or along walls" },
    { icon: <Zap className="w-7 h-7 text-emerald-600" />, text: "Gnaw marks on packaging, cables, and wooden structures" },
    { icon: <House className="w-7 h-7 text-emerald-600" />, text: "Nests made from shredded fabric, paper, or insulation" },
    { icon: <Volume2 className="w-7 h-7 text-emerald-600" />, text: "Noises at night such as scratching in walls or ceilings" },
    { icon: <Grip className="w-7 h-7 text-emerald-600" />, text: "Grease marks along frequent travel routes" },
  ];

  return (
    <section className="py-20 bg-secondary ">
      <div className="max-w-[var(--width-custom)] mx-auto px-4 xl:px-6">
        {/* Section 1: Common Signs */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl xl:text-4xl font-bold text-black mb-6 ">Common Signs of Rodents</h2>
            <ul className="space-y-4">
              {signs.map((sign, i) => (
                <li key={i} className="flex items-start gap-3">
                  {sign.icon}
                  <p className="text-gray-700 text-sm leading-relaxed">{sign.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div><img src="/assets/rodent/rodent-4.jpg" alt="Rodent Signs" className="rounded-2xl shadow-lg object-cover w-full h-80" /></div>
        </div>

        {/* Section 2: Health & Safety */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          <div className="text-left">
            <h3 className="text-3xl font-semibold text-primary mb-4 ">A Healthy Home is a Rodent-Free Home</h3>
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">Rodents—such as mice and rats—carry diseases and pathogens that can be incredibly harmful to humans and pets. Contact with rodent feces, urine, saliva, or the rodents themselves can result in serious health risks. Protect your home and family with our guaranteed, lasting results.</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
              <li>Thorough inspection to identify entry points</li>
              <li>Sealing of gaps and structural vulnerabilities</li>
              <li>Strategic placement of traps & bait stations</li>
              <li>Sanitation guidance to reduce attractants</li>
            </ul>
          </div>
          <div><img src="/assets/rodent/rodent-3.jpg" alt="Rat isolated in orange overlay" className="rounded-2xl shadow-lg object-cover w-full h-72" /></div>
        </div>
      </div>
    </section>
  );
}
