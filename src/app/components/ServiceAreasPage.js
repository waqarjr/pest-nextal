import { MapPin, Phone, Clock, Truck } from "lucide-react";
import Link from "next/link";

export default function ServiceAreasPage() {
  const areas = [
    "Jumeirah",
    "Business Bay",
    "DIFC",
    "Deira",
    "Bur Dubai",
    "Al Barsha",
    "The Springs",
    "The Meadows",
    "Emirates Hills",
    "JVC",
    "Dragon Mart",
    "Al Nahda",
    "Mirdif",
    "Festival City",
    "Al Satwa",
    "Karama",
    "Oud Metha",
    "Downtown Dubai",
    "Dubai Marina",
    "Dubai Silicon Oasis",
    "Arabian Ranches",
    "Dubai Hills Estate",
    "International City",
    "Dubai Investment Park",
    "Jumeirah Lake Towers",
  ];

  const emergency = [
    {
      icon: <Clock className="w-6 h-6" style={{ color: 'var(--color-success)' }} />,
      title: "24/7 Emergency Response",
      desc: "Available anytime for urgent pest problems.",
    },
    {
      icon: <Truck className="w-6 h-6" style={{ color: 'var(--color-success)' }} />,
      title: "Mobile Service Units",
      desc: "Fully equipped vehicles for on-site treatment.",
    },
    {
      icon: <MapPin className="w-6 h-6" style={{ color: 'var(--color-success)' }} />,
      title: "Same Day Service",
      desc: "Quick response for most Dubai areas.",
    },
    {
      icon: <Phone className="w-6 h-6" style={{ color: 'var(--color-success)' }} />,
      title: "Emergency Hotline",
      desc: (
        <Link href={`tel:${process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}`} className="font-semibold hover:underline" style={{ color: 'var(--color-primary)' }}>
          {process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}3
        </Link>
      ),
    },
  ];

  return (
    <main className="py-6 mt-4 w-custom mx-auto bg-secondary" >
      {/* Hero */}
      <section className=" mx-auto px-6 text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-primary" >
          Service Areas Across Dubai
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-black" >
          We provide professional pest control services throughout Dubai and surrounding emirates. No matter where you&apos;re located, we&apos;re  here to help.
        </p>
      </section>

      {/* Area List */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-6">
          Areas We Serve
        </h2>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {areas.map((area, i) => (
            <li key={i} className="card flex items-center gap-2 px-3 sm:px-4 py-3 hover:shadow-lg hover:bg-success/20 cursor-pointer transition h-full">
              <MapPin className="w-4 h-4 flex-shrink-0 text-success"  />
              <span className="text-sm sm:text-base text-black" >{area}</span>
            </li>
          ))}
        </ul>

        <div className="text-center mt-10 px-2">
          <p className="mb-2 text-md sm:text-base text-black" >
            We service many more locations throughout Dubai and the UAE. Contact us to check if we cover your specific area.
          </p>
        </div>
      </section>

      {/* Emergency Coverage */}
      <section className=" py-16 ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Emergency Coverage
          </h2>
          <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {emergency.map((item, i) => (
              <li key={i} className="card rounded-xl p-6 text-center flex flex-col items-center">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg text-primary " >
                  {item.title}
                </h3>
                <p className="text-sm mt-2 text-black ">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}