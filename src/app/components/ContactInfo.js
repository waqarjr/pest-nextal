import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  const infoList = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      text: (
        <a href={`tel:${process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}`}>
          {process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}
        </a>
      ),
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      text: (
        <a href={`mailto:${process.env.NEXT_PUBLIC_AUTH_EMAIL}`}>
          {process.env.NEXT_PUBLIC_AUTH_EMAIL}
        </a>
      ),
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      text: process.env.NEXT_PUBLIC_AUTH_ADDRESS,
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      text: process.env.NEXT_PUBLIC_AUTH_TIME,
    },
  ];

  const InfoCard = ({ icon, title, text }) => (
    <div className="card flex items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:shadow-md transition">
      <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-2xl border-2 border-primary text-primary flex-shrink-0">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-primary text-sm sm:text-base">{title}</p>
        <p className="text-black text-xs sm:text-sm break-words">{text}</p>
      </div>
    </div>
  );

  return (
    <section className="py-8 md:py-12 px-1 sm:px-6 lg:px-8 bg-secondary">
      <div className="mx-auto  space-y-8 md:space-y-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {infoList.map((item, index) => (
            <InfoCard key={index} icon={item.icon} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
