"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.2, ease: "easeOut" } }) };

  const carouselImages = [
    'https://robinpestcontrol.com/wp-content/uploads/2023/05/wasps-pest-control-dubai.jpeg',
    'https://robinpestcontrol.com/wp-content/uploads/2023/05/scorpian-pest-contro.jpeg',
    'https://robinpestcontrol.com/wp-content/uploads/2023/05/mosquito-pest-control.jpeg',
    'https://robinpestcontrol.com/wp-content/uploads/2023/05/bedbugs-pest-control.jpeg',
    'https://robinpestcontrol.com/wp-content/uploads/2023/05/flies-pest-control.jpeg',
    'https://robinpestcontrol.com/wp-content/uploads/2023/05/ants-pest-contro.jpeg',
    'https://robinpestcontrol.com/wp-content/uploads/2023/05/scorpian-pest-contro.jpeg',
    'https://robinpestcontrol.com/wp-content/uploads/2023/05/house-flies-pest-control-dubai.jpeg',
    'https://robinpestcontrol.com/wp-content/uploads/2023/05/termite-pest-control.jpeg',
    'https://robinpestcontrol.com/wp-content/uploads/2023/05/wasps-pest-control-dubai.jpeg',
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide(prev => (prev + 1) % carouselImages.length), 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const handleTouchStart = e => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = e => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => { if (touchStart - touchEnd > 75) setCurrentSlide(prev => (prev + 1) % carouselImages.length); if (touchStart - touchEnd < -75) setCurrentSlide(prev => (prev - 1 + carouselImages.length) % carouselImages.length); };
  const handleClick = e => { const carousel = e.currentTarget; const clickX = e.clientX - carousel.getBoundingClientRect().left; const carouselWidth = carousel.offsetWidth; if (clickX > carouselWidth / 2) setCurrentSlide(prev => (prev + 1) % carouselImages.length); else setCurrentSlide(prev => (prev - 1 + carouselImages.length) % carouselImages.length); };

  return (
<div className="min-h-screen w-full max-w-[var(--width-custom)] mx-auto flex items-center relative bg-secondary px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-12">
  <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }} className="absolute top-3 right-3 xs:top-4 xs:right-4 sm:top-5 sm:right-5 md:top-6 md:right-6 z-20 bg-error text-white px-3 py-1 xs:px-4 xs:py-1.5 sm:px-5 sm:py-2 rounded-full text-xs xs:text-sm sm:text-base font-semibold shadow-md font-[var(--font-heading)]">
    24/7 Available
  </motion.div>
  
  <div className="w-full mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-stretch min-h-[500px] xs:min-h-[550px] sm:min-h-[600px] md:min-h-[650px] lg:min-h-[700px]">
      
      {/* Text Content Section */}
      <div className="order-2 lg:order-1 flex flex-col justify-center space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 py-6 sm:py-8 lg:py-0">
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="text-center lg:text-left">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-primary font-[var(--font-heading)]">
            ROBIN
          </h1>
        </motion.div>
        
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-black mb-2 xs:mb-3 sm:mb-4 font-[var(--font-heading)] text-center lg:text-left">
            Pest Control, Disinfection & Sanitization Services
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-base xl:text-lg 2xl:text-xl text-black leading-relaxed font-[var(--font-body)] text-center lg:text-left">
            Robin Pest Control is committed to ensuring your home and business remains free from pests. Our team of expert and well-trained pest control technicians ensures optimal and clean surroundings for you and your family. RPC helps customers in getting rid of Bed Bugs, Termites, Cockroaches, Rodents, Bees, and more.
          </p>
        </motion.div>
        
        <motion.div variants={fadeUp} className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 pt-2 xs:pt-3 sm:pt-4">
          <motion.a href={`tel:${process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-primary hover:bg-[#6B0F2A] text-white px-4 xs:px-5 sm:px-6 md:px-7 lg:px-5 xl:px-6 py-2 xs:py-2.5 sm:py-3 lg:py-2.5 xl:py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-xl font-[var(--font-body)]">
            <Phone className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
            <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-sm xl:text-base">{process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}</span>
          </motion.a>
          
          <motion.a href={`https://wa.me/${process.env.NEXT_PUBLIC_AUTH_WHATS_NUBER}`} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-success hover:bg-[#218838] text-white px-4 xs:px-5 sm:px-6 md:px-7 lg:px-5 xl:px-6 py-2 xs:py-2.5 sm:py-3 lg:py-2.5 xl:py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-xl font-[var(--font-body)]">
            <MessageCircle className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
            <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-sm xl:text-base">WhatsApp</span>
          </motion.a>
          
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-primary hover:border-accent text-primary hover:text-accent px-4 xs:px-5 sm:px-6 md:px-7 lg:px-5 xl:px-6 py-2 xs:py-2.5 sm:py-3 lg:py-2.5 xl:py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all bg-white hover:bg-secondary font-[var(--font-body)]">
            <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-sm xl:text-base">Free Quote</span>
            <ArrowRight className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Image Carousel Section */}
      <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }} className="order-1 lg:order-2 relative w-full h-64 xs:h-72 sm:h-80 md:h-96 lg:h-full min-h-[300px] xs:min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[600px] xl:min-h-[650px] 2xl:min-h-[700px] overflow-hidden cursor-pointer rounded-lg xs:rounded-xl sm:rounded-2xl shadow-lg" onClick={handleClick} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <div className="relative w-full h-full">
          {carouselImages.map((image, index) => {
            const isActive = index === currentSlide;
            const isPrev = index === (currentSlide - 1 + carouselImages.length) % carouselImages.length;
            const isNext = index === (currentSlide + 1) % carouselImages.length;
            return (
              <div key={index} className={`absolute inset-0 transition-all duration-1000 ease-in-out ${isActive ? 'translate-x-0 opacity-100 z-10' : isPrev ? '-translate-x-full opacity-0 z-0' : isNext ? 'translate-x-full opacity-0 z-0' : 'translate-x-full opacity-0 z-0'}`}>
                <Image src={image} alt={`Pest control service ${index + 1}`} fill priority={index === 0} sizes="(max-width: 420px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw" className="w-full h-full object-cover object-center pointer-events-none select-none" quality={85} />
              </div>
            );
          })}
        </div>
      </motion.div>
      
    </div>
  </div>
</div>
  );
};

export default HeroSection;
