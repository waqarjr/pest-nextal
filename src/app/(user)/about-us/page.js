import ContactInfo from '@/app/components/ContactInfo'
import ContactPage from '@/app/components/ContactPage'
import CoreServices from '@/app/components/CoreServices'
import { Faqs } from '@/app/components/Faqs'
import HeroSection from '@/app/components/HeroSection'
import ServiceAreasPage from '@/app/components/ServiceAreasPage'
import WhyChooseUs from '@/app/components/WhyChooseUs'
import React from 'react'
import CustomizedPestControl from './CustomizedPestControl'
import MissionSection from './MissionSection'

const page = () => {
  return (<>
    <HeroSection/>
    <CustomizedPestControl/>
    <MissionSection/>
    <CoreServices/>
    <ServiceAreasPage/>
    <WhyChooseUs/>
    <Faqs/>
    <ContactInfo/>
    <ContactPage/>
  </>)
}

export default page