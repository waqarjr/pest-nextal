import React from 'react'
import ContactHeroSection from './ContactHeroSection'
import AboutCompany from '@/app/components/AboutCompany'
import WhyChooseUs from '@/app/components/WhyChooseUs'
import ContactInfo from '@/app/components/ContactInfo'
import ContactPage from '@/app/components/ContactPage'

const page = () => {
  return (<>
    <ContactHeroSection/>
    <AboutCompany/>
    <WhyChooseUs/>
    <ContactInfo/>
    <ContactPage/>
  </>)
}

export default page