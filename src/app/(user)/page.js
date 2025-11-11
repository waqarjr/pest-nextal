'use client'
import AboutCompany from "../components/AboutCompany";
import Pests from "../components/Pests";
import ServiceCategories from "../components/ServiceCategories";
import CoreServices from "../components/CoreServices";
import Clients from "../components/Clients";
import ServiceAreasPage from "../components/ServiceAreasPage";
import WhyChooseUs from "../components/WhyChooseUs";
import { Faqs } from "../components/Faqs";
import ContactPage from "../components/ContactPage";
import ContactInfo from "../components/ContactInfo";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (<>
    <HeroSection/>
    <AboutCompany/>
    <Pests/>
    <ServiceCategories/>
    <CoreServices/> 
    <Clients/>
    <ServiceAreasPage/>
    <WhyChooseUs/>
    <Faqs/>
    <ContactInfo/>
    <ContactPage/>
  </>);
}
