"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.2, ease: "easeOut" } })
  };

  const carouselImages = [
    'https://robinpestcontrol.com/wp-content/uploads/2023/05/wasps-pest-control-dubai.jpeg',
    'https://robinpestcontrol.com/wp-content/uploads/2023/05/scorpian-pest-contro.jpeg',
    'https://robinpestcontrol.com/wp-content/uploads/2023/05/mosquito-pest-control.jpeg',
    'https://robinpestcontrol.com/wp-content/uploads/2023/05/bedbugs-pest-control.jpeg',
    "https://robinpestcontrol.com/wp-content/uploads/2023/05/flies-pest-control.jpeg",
    "https://robinpestcontrol.com/wp-content/uploads/2023/05/ants-pest-contro.jpeg",
    "https://robinpestcontrol.com/wp-content/uploads/2023/05/scorpian-pest-contro.jpeg",
    "https://robinpestcontrol.com/wp-content/uploads/2023/05/house-flies-pest-control-dubai.jpeg",
    "https://robinpestcontrol.com/wp-content/uploads/2023/05/termite-pest-control.jpeg",
    "https://robinpestcontrol.com/wp-content/uploads/2023/05/wasps-pest-control-dubai.jpeg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const handleTouchStart = e => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = e => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) setCurrentSlide(prev => (prev + 1) % carouselImages.length);
    if (touchStart - touchEnd < -75) setCurrentSlide(prev => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleClick = e => {
    const carousel = e.currentTarget;
    const clickX = e.clientX - carousel.getBoundingClientRect().left;
    const carouselWidth = carousel.offsetWidth;
    if (clickX > carouselWidth / 2) setCurrentSlide(prev => (prev + 1) % carouselImages.length);
    else setCurrentSlide(prev => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen w-custom mx-auto flex items-center relative bg-secondary">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }} className="absolute top-4 sm:top-6 right-4 z-20 bg-error text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md font-[var(--font-heading)]">
        24/7 Available
      </motion.div>
      <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch min-h-[600px]">
          <div className="order-2 lg:order-1 flex flex-col justify-center space-y-6 lg:space-y-8">
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary text-center font-[var(--font-heading)]">ROBIN</h1>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-3 font-[var(--font-heading)]">Pest Control, Disinfection & Sanitization Services</h2>
              <p className="text-base lg:text-lg text-black leading-relaxed font-[var(--font-body)]">Robin Pest Control is committed to ensuring your home and business remains free from pests. Our team of expert and well-trained pest control technicians ensures optimal and clean surroundings for you and your family. RPC helps customers in getting rid of Bed Bugs, Termites, Cockroaches, Rodents, Bees, and more.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <motion.a href={`tel:${process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} 
              className="bg-primary hover:bg-[#6B0F2A] text-white px-5 sm:px-3 lg:px-4 py-2 lg:py-2 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-xl font-[var(--font-body)]">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">{process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}</span>
              </motion.a>
              <motion.a href={`https://wa.me/${process.env.NEXT_PUBLIC_AUTH_WHATS_NUBER}`} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} 
              className="bg-success hover:bg-[#218838] text-white px-5 sm:px-3 lg:px-4 py-2 lg:py-2  rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all shadow-lg hover:shadow-xl font-[var(--font-body)]">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">WhatsApp</span>
              </motion.a>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border-2 border-primary hover:border-accent text-primary hover:text-accent px-5 sm:px-3 lg:px-4 py-2 lg:py-2  rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all bg-white hover:bg-secondary font-[var(--font-body)]">
                <span className="text-sm sm:text-base">Free Quote</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }} className="order-1 lg:order-2 relative w-full h-64 sm:h-80 lg:h-full min-h-[400px] lg:min-h-[600px] overflow-hidden cursor-pointer " onClick={handleClick} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <div className="relative w-full h-full">
              {carouselImages.map((image, index) => {
                const isActive = index === currentSlide;
                const isPrev = index === (currentSlide - 1 + carouselImages.length) % carouselImages.length;
                const isNext = index === (currentSlide + 1) % carouselImages.length;
                
                return (
                  <div key={index} className={`absolute  inset-0 transition-all duration-1000 ease-in-out ${isActive ? 'translate-x-0 opacity-100 z-10' : isPrev ? '-translate-x-full opacity-0 z-0' : isNext ? 'translate-x-full opacity-0 z-0' : 'translate-x-full opacity-0 z-0'}`}>
                    <img src={image} alt={`Pest control service ${index + 1}`} className="w-full h-full object-cover pointer-events-none select-none" />
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