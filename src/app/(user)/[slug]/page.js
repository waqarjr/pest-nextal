  import React,{ use } from "react";

  import HeroSection from "@/app/_data/Herosection";
  import ExpertTeamData from "@/app/_data/ExpertTeamData";
  import FrequentlyQuestions from "@/app/_data/FrequentlyQuestions";

  import CrawlingHero from "./CrawlingHero";
  import ExpertTeam from "./ExpertTeam";
  import WhyChooseUs from "@/app/components/WhyChooseUs";
  import PreventionTips from "./PreventionTips";
  import IndustriesWeServe from "./IndustriesWeServe";
  import ContactInfo from "@/app/components/ContactInfo";
  import ContactPage from "@/app/components/ContactPage";
  import NotFound from "../not-found";
  import { Faqs } from "./Faqs";

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
        <WhyChooseUs />
        <PreventionTips />
        <IndustriesWeServe />
        <Faqs question={askedQuestion} />
        <ContactInfo />
        <ContactPage />
      </>
    );
  }
