"use client";

import {
  ShieldCheck,
  Leaf,
  Clock,
  UserCheck,
  Trophy,
  Building2,
  Award,
  Globe2,
} from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: <ShieldCheck className="w-7 h-7 text-success" />,
      title: "Municipality Approved",
      desc: "Fully licensed and approved by Dubai Municipality for professional pest control services.",
    },
    {
      icon: <Building2 className="w-7 h-7 text-success" />,
      title: "Wide Service Coverage",
      desc: "Service for houses, apartments, condos, villas, and commercial properties.",
    },
    {
      icon: <Award className="w-7 h-7 text-success" />,
      title: "Outstanding Reputation",
      desc: "Proven track record with thousands of satisfied customers across Dubai.",
    },
    {
      icon: <UserCheck className="w-7 h-7 text-success" />,
      title: "Integrity & Value",
      desc: "We believe strongly in integrity, transparency, and delivering real value to our clients.",
    },
    {
      icon: <Globe2 className="w-7 h-7 text-success" />,
      title: "NPMA Membership",
      desc: "Proud member of the National Pest Management Association (NPMA), ensuring global best practices.",
    },
    {
      icon: <Leaf className="w-7 h-7 text-success" />,
      title: "Eco-Friendly Solutions",
      desc: "Environmentally safe, green pest control methods that protect families, pets, and nature.",
    },
    {
      icon: <Clock className="w-7 h-7 text-success" />,
      title: "Responsive Service",
      desc: "Fast, reliable, and available 24/7 for urgent pest control emergencies.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-success" />,
      title: "Licensed & Insured",
      desc: "All our technicians are licensed, insured, and certified for safe pest control operations.",
    },
    {
      icon: <Trophy className="w-7 h-7 text-success" />,
      title: "Knowledgeable Staff",
      desc: "Friendly, courteous, and highly trained staff dedicated to customer satisfaction.",
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-2 md:px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Why Choose Us?
        </h2>

        <p className="mt-2 max-w-2xl mx-auto text-center text-black">
          We are trusted by homeowners and businesses across Dubai because of our integrity, professionalism, and eco-friendly pest control solutions.
        </p>

        {/* Grid of Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((item, i) => (
            <div key={i} className="card rounded-2xl p-6 hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-black">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}