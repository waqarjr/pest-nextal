'use client'
import React,{ use } from 'react'
import HeroSection from './HeroSection';
import Methods from './Methods';
import Services from './Services';
import AboutCompany from '@/app/components/AboutCompany';
import ContactInfo from '@/app/components/ContactInfo';
import ContactPage from '@/app/components/ContactPage';
import MethodsData from '@/app/_data/policies/MethodsData';
import HeroSectionData from "@/app/_data/policies/HeroSectionData";
import ServicesData from '@/app/_data/policies/ServicesData';
import Documentation from './Documentation';
import DocumentationData from '@/app/_data/policies/DocumentationData';
import Professional from './Professional';
import ProfessionalData from '@/app/_data/policies/ProfessionalData';
import GoogleReviews from '@/app/components/GoogleReviews';


export default  function Page ({params})  {
    const { slug } =  use(params);
    const HeroData = HeroSectionData[slug];
    const MethData= MethodsData[slug];
    const ServData = ServicesData[slug];
    // const DocData = DocumentationData[slug];
    // const ProfData = ProfessionalData[slug];
    return (
    <>
            <HeroSection data={HeroData} />
            <Methods data={MethData} />
            <Services data={ServData} />
            {/* <Documentation data={DocData} />
            <Professional data={ProfData} /> */}
            <AboutCompany/>
            <GoogleReviews/>
            <ContactInfo/>
            <ContactPage/>
    </>
  )
}

