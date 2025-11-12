  import React,{ use } from "react";

  import HeroSection from "@/app/_data/Herosection";
  import ExpertTeamData from "@/app/_data/ExpertTeamData";
  import FrequentlyQuestions from "@/app/_data/FrequentlyQuestions";

  import CrawlingHero from "./CrawlingHero";
  import ExpertTeam from "./ExpertTeam";
  import WhyChooseUs from "@/app/components/WhyChooseUs";
  import IndustriesWeServe from "./IndustriesWeServe";
  import ContactInfo from "@/app/components/ContactInfo";
  import ContactPage from "@/app/components/ContactPage";
  import NotFound from "../not-found";
  import CockroachPrevention from "@/app/components/users/CockroachPrevention";

  import { Faqs } from "./Faqs";
import CockroachInfestation from "@/app/components/users/CockroachInfestation";
import AntTypes from "@/app/components/users/AntTypes";
import AboutCompany from "@/app/components/AboutCompany";
import TermiteTypes from "@/app/components/users/TermitesTypes";
import TermitePrevention from "@/app/components/users/TermitePrevention";
import RodentPrevention from "@/app/components/users/RodentPrevention";
import RodentSigns from "@/app/components/users/RodentSigns";
import FlyPrevention from "@/app/components/users/FlyPrevention";
import MosquitoTypes from "@/app/components/users/MosquitoesTypes";
import { MosquitoControl } from "@/app/components/users/MosquitoControl";
import LizardTypes from "@/app/components/users/LizardsTypes";
import BirdPrevention from "@/app/components/users/BirdPrevention";
import BirdNestRemoval from "@/app/components/users/BirdNestRemoval";
import BedBugSigns from "@/app/components/users/BedBugSigns";
import FleaControl from "@/app/components/users/FleaControl";
import IndustriesControl from "@/app/components/users/IndustriesControl";

  export default  function Page({ params }) {
    const { slug } =  use(params);

    
    const hero = HeroSection[slug];
    const expertTeamData = ExpertTeamData[slug];
    const askedQuestion = FrequentlyQuestions[slug];

    if(!hero) return <NotFound/>;

    return (
      <>
        <CrawlingHero pest={hero} />
        <ExpertTeam data={expertTeamData} />
        {slug === 'ants-pest-control-2' && <AntTypes/>}
        {slug === 'termites-pest-control' && <TermiteTypes/>}
        {slug === 'mosquitoes-pest-control' && <MosquitoTypes/>}
        {slug === 'house-lizards-pest-control' && <LizardTypes/> }
        
        {slug === 'industrial-pest-control' && <IndustriesControl/>}
        
        {slug === 'bedbugs-pest-control' && <BedBugSigns/> }
        {slug === 'fleas-pest-control-2' && <FleaControl/>}
        {slug === 'birds-control-deterrent-service' && <BirdNestRemoval/>} 
        {slug === 'birds-control-deterrent-service' && <BirdPrevention/>} 
        {slug === 'mosquitoes-pest-control' && <MosquitoControl/>}
        {slug === 'rodent-pest-control' && <RodentSigns/>}
        {slug === 'rodent-pest-control' && <RodentPrevention/>}
        {slug === 'flies-pest-control-2' && <FlyPrevention/>}
        {slug === 'cockroaches-pest-control' && <CockroachInfestation/>}
        {slug === 'cockroaches-pest-control' && <CockroachPrevention/>}
        {slug === 'termites-pest-control' && <TermitePrevention/>}
        <AboutCompany/>
        <IndustriesWeServe />
        <WhyChooseUs />
        <Faqs question={askedQuestion} />
        <ContactInfo />
        <ContactPage />
      </>
    );
  }
