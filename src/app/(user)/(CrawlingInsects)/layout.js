"use client"
import CrawlingHero from "./CrawlingHero";
import { usePathname } from "next/navigation";
import ExpertTeam from "./ExpertTeam";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import PreventionTips from "./PreventionTips";
import IndustriesWeServe from "./IndustriesWeServe";
import ContactInfo from "@/app/components/ContactInfo";
import ContactPage from "@/app/components/ContactPage";
import { Faqs } from "@/app/components/Faqs";

export default function RootLayout({ children }) {

  const pathname = usePathname();

  // Define hero content for each route
  const heroContent = {
    "/cockroaches-pest-control": {
      heading: "Cockroaches",
      image: "https://robinpestcontrol.com/wp-content/uploads/2023/05/cockroaches-pest-control.jpeg",
    },
    "/mosquito-pest-control": {
      heading: "Mosquito Pest Control",
      image: "https://robinpestcontrol.com/wp-content/uploads/2023/05/mosquito-pest-control.jpeg",
    },
    "/bedbugs-pest-control": {
      heading: "Bed Bugs Pest Control",
      image: "https://robinpestcontrol.com/wp-content/uploads/2023/05/bedbugs-pest-control.jpeg",
    },
    // add more pages here...
    default: {
      heading: "Robin Pest Control, Disinfection & Sanitization Services",
      image: "https://robinpestcontrol.com/wp-content/uploads/2023/05/default-hero.jpeg",
    },
  };
 
  const currentHero = heroContent[pathname] || heroContent.default;

  return (
    <html lang="en">
      <body cz-shortcut-listen="true" className="__variable_188709 __variable_9a8899 antialiased" >
        <CrawlingHero heading={currentHero.heading} image={currentHero.image} />
        <ExpertTeam/>
        <WhyChooseUs/>
        <PreventionTips/>
        <IndustriesWeServe/>
        {children}
        <Faqs/>
        <ContactInfo/>
        <ContactPage/>
      </body>
    </html>
  );
}
