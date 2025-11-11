import { ShieldCheck, Leaf, Sparkles, Handshake } from "lucide-react";

export default function MissionSection() {
  const missions = [
    { icon: <Handshake className="w-8 h-8 text-primary" />, title: "Integrity & Trust", desc: "We believe in honest communication, transparent services, and long-term relationships with our clients built on trust and reliability." },
    { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: "Safety First", desc: "Every treatment follows Dubai Municipality-approved standards to ensure complete safety for families, pets, and employees." },
    { icon: <Leaf className="w-8 h-8 text-success" />, title: "Eco-Friendly Approach", desc: "We prioritize sustainability through green pest control solutions that protect both people and the environment." },
    { icon: <Sparkles className="w-8 h-8 text-accent" />, title: "Innovation & Excellence", desc: "Using advanced technology, modern tools, and continuous improvement, we deliver faster, more effective pest management results." },
  ];

  return (
    <section className="py-16 sm:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary font-[var(--font-heading)]">OUR MISSION</h2>
          <p className="mt-4 text-black max-w-3xl mx-auto font-[var(--font-body)]">At <span className="font-semibold text-accent">Nextal Pest Control Dubai</span>, our mission is to make every home and business pest-free through safe, sustainable, and professional pest management solutions. We combine innovation, integrity, and eco-friendly practices to protect your environment and your peace of mind.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {missions.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg hover:border-accent border border-transparent transition-all duration-200">
              <div className="flex items-center gap-4 mb-3">
                {item.icon}
                <h3 className="text-lg font-semibold text-black font-[var(--font-heading)]">{item.title}</h3>
              </div>
              <p className="text-black text-sm font-[var(--font-body)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}