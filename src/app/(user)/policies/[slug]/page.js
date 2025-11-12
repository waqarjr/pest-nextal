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
import MuncParagraph from './MuncParagraph';
import MuncComp from './MuncComp';
import ShipPolicies from './ShipPolicies';


export default  function Page ({params})  {
    const { slug } =  use(params);
    const HeroData = HeroSectionData[slug];
    const MethData= MethodsData[slug];
    const ServData = ServicesData[slug];
    const DocData = DocumentationData[slug];
    const ProfData = ProfessionalData[slug];

      const showDoc = [ 
        'audit-documentation','municipality-compliance', 'digital-reporting', 
        'light-trap-analysis','ship-sanitation','trend-analysis',
      ];
      const showProf = [
        'audit-documentation','municipality-compliance','digital-reporting',
        'light-trap-analysis', 'ship-sanitation',
      ];
    return (
    <>
            <HeroSection data={HeroData} />
            {slug === 'municipality-compliance' && <MuncParagraph/>}
            {slug === 'ship-sanitation' && <ShipPolicies/>}
            <Methods data={MethData} />
            <Services data={ServData} />
            {showDoc.includes(slug) && <Documentation data={DocData} />}
            {showProf.includes(slug) && <Professional data={ProfData} />}
            {slug === 'municipality-compliance' && <MuncComp/>}
            <AboutCompany/>
            <GoogleReviews/>
            <ContactInfo/>
            <ContactPage/>
    </>
  )
}

