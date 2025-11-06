import { ShieldCheck, SprayCan, Leaf, Search, Wrench, AlertTriangle, Building2, Phone } from "lucide-react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

 const ExpertTeam = () => {
  const solutions = [
    {
      title: "Cockroach Inspection",
      desc: "Comprehensive inspection to identify species, infestation levels, and entry points.",
      icon: <Search className="w-8 h-8 text-success" />,
      image: "/assets/cockroaches/inspection-roach.jpeg",
      points: [
        "Species identification",
        "Infestation assessment",
        "Entry point detection",
        "Detailed reporting",
      ],
    },
    {
      title: "Gel Baiting Treatment",
      desc: "Advanced gel baiting system targeting cockroaches effectively and safely.",
      icon: <SprayCan className="w-8 h-8 text-success" />,
      image: "/assets/cockroaches/gel.jpg",
      points: [
        "Long-lasting effectiveness",
        "Safe for children & pets",
        "Targeted application",
        "Follow-up monitoring",
      ],
    },
    {
      title: "Crack & Crevice Treatment",
      desc: "Deep penetration treatment for hard-to-reach hiding spots with residual protection.",
      icon: <Wrench className="w-8 h-8 text-success" />,
      image: "/assets/cockroaches/crack-crevice.png",
      points: [
        "Deep penetration",
        "Residual protection",
        "Complete coverage",
        "Long-term control",
      ],
    },
    {
      title: "Commercial Solutions",
      desc: "Specialized pest control for restaurants, hotels, and businesses with HACCP compliance.",
      icon: <Building2 className="w-8 h-8 text-success" />,
      image: "/assets/cockroaches/commercial.jpg",
      points: [
        "HACCP compliance",
        "Minimal business disruption",
        "Documentation provided",
        "Regulatory compliance",
      ],
    },
    {
      title: "Emergency Treatment",
      desc: "24/7 rapid response service for severe infestations requiring immediate attention.",
      icon: <AlertTriangle className="w-8 h-8 text-success" />,
      image: "/assets/pest-control-customized.webp",
      points: [
        "24/7 availability",
        "Rapid response",
        "Immediate treatment",
        "Follow-up service",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-[var(--font-heading)]">
            Trusted Experts in Cockroach Control
          </h2>
          <p className="text-black leading-relaxed max-w-3xl mx-auto text-sm sm:text-base font-[var(--font-body)]">
            Our certified team specializes in safe and effective cockroach treatment. With years of expertise and a safety-first approach, we deliver solutions that protect your family, staff, and pets while ensuring long-lasting results.
          </p>
        </div>

        {/* Zig-Zag Treatments */}
        <div className="space-y-16 sm:space-y-20">
          {solutions.map((item, idx) => (
            <div key={idx} className={`grid md:grid-cols-2 gap-8 sm:gap-10 items-center ${idx % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}>
              {/* Text */}
              <div className="text-left">
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <h3 className="text-xl sm:text-2xl font-semibold text-primary font-[var(--font-heading)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-black mb-4 text-sm sm:text-base font-[var(--font-body)]">{item.desc}</p>
                <ul className="list-disc list-inside text-black space-y-2 text-sm sm:text-base font-[var(--font-body)]">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div>
                <img src={item.image} alt={item.title} className="rounded-2xl shadow-lg object-cover w-full h-64 sm:h-80 md:h-96" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16 sm:mt-20 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 font-[var(--font-heading)]">
          Let Our Experts Handle Your Cockroach Problem
        </h2>
        <div className="flex flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 pt-4">
          <a href={`tel:${process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}`} className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#6B0F2A] text-white px-5 sm:px-6 py-3 rounded-lg transition-all duration-200 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl font-[var(--font-body)]">
            <Phone className="w-4 h-4" />
            <span>{process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}</span>
          </a>

          <a href={`https://wa.me/${process.env.NEXT_PUBLIC_AUTH_WHATS_NUBER}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-success hover:bg-[#218838] text-white p-3 rounded-lg transition-all duration-200 text-base font-semibold shadow-lg hover:shadow-xl" aria-label="Chat on WhatsApp">
            <FaWhatsapp className="w-6 h-6" />
          </a>

          <a  href={`mailto:${process.env.NEXT_PUBLIC_AUTH_EMAIL}`} className="inline-flex items-center justify-center bg-accent hover:bg-[#B89B0D] text-white p-3 rounded-lg transition-all duration-200 text-base font-semibold shadow-lg hover:shadow-xl" aria-label="Go to Contact Us page">
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default ExpertTeam;