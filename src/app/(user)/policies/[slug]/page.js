'use client'
import React from 'react'
import HeroSection from './HeroSection';
import Methods from './Methods';
import Services from './Services';
import AboutCompany from '@/app/components/AboutCompany';
import ContactInfo from '@/app/components/ContactInfo';
import ContactPage from '@/app/components/ContactPage';
import MethodsData from '@/app/_data/policies/MethodsData';
import HeroSectionData from "@/app/_data/policies/HeroSectionData";
import ServicesData from '@/app/_data/policies/ServicesData';


const  page = async ({params}) => {
    const { slug } = await params;
    const MethData= MethodsData[slug];
    const HeroData = HeroSectionData[slug];
    const ServData = ServicesData[slug];

    return (
    <>
            <HeroSection data={HeroData} />
            <Methods data={MethData} />
            <Services data={ServData} />
            <AboutCompany/>
            <ContactInfo/>
            <ContactPage/>
    </>
  )
}

export default page