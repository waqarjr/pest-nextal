import { Home, Building2, Utensils, Hotel, Package, Store } from "lucide-react";

export default function IndustriesWeServe() {
  const industries = [
    { icon: <Home className="w-8 h-8 text-accent" />, title: "Residential Properties", desc: "Protecting families from household pests with safe and effective solutions." },
    { icon: <Building2 className="w-8 h-8 text-accent" />, title: "Commercial Spaces", desc: "Ensuring offices, shops, and businesses remain pest-free and compliant." },
    { icon: <Utensils className="w-8 h-8 text-accent" />, title: "Restaurants", desc: "Maintaining hygiene standards with targeted pest prevention strategies." },
    { icon: <Hotel className="w-8 h-8 text-accent" />, title: "Hotels & Hospitality", desc: "Creating a safe and comfortable environment for your guests." },
    { icon: <Package className="w-8 h-8 text-accent" />, title: "Warehouses", desc: "Protecting inventory and supply chains from pest damage and contamination." },
    { icon: <Store className="w-8 h-8 text-accent" />, title: "Retail Stores", desc: "Keeping stores pest-free to protect products and enhance customer trust." },
  ];

  return (
    <section className="py-16 sm:py-20 bg-secondary/5 font-[var(--font-body)]">
      <div className=" mx-auto max-w-7xl px-3 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[var(--font-heading)] font-bold text-primary mb-3">Industries We Serve</h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">Our pest management services at Nextal Pest Control extend across a diverse range of industries throughout Dubai. Whether you are a homeowner seeking protection from household pests or a business owner maintaining a clean and compliant environment — we’ve got you covered.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {industries.map((item, idx) => (
            <div key={idx} className="bg-secondary rounded-2xl shadow-sm hover:shadow-md p-5 sm:p-6 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                {item.icon}
                <h3 className="text-lg sm:text-xl font-semibold text-primary">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
