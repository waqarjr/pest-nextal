import React from "react";
import Image from "next/image";
import { Shield, FileText, Eye, Lightbulb, Zap, Target,Phone , Bug, ShieldCheck} from "lucide-react";

const CustomizedPestControl = () => {
  const features = [
    { icon: <Target className="w-6 h-6" />, title: "Modern Tools", description: "Latest technology and equipment for effective pest control" },
    { icon: <FileText className="w-6 h-6" />, title: "Clear Reports", description: "Detailed documentation of all treatments and findings" },
    { icon: <Zap className="w-6 h-6" />, title: "Smart Plans", description: "Strategic prevention methods tailored to your property" },
    { icon: <Eye className="w-6 h-6" />, title: "Activity Monitoring", description: "Continuous surveillance for early pest detection" },
    { icon: <Shield className="w-6 h-6" />, title: "Quick Response", description: "Fast action to protect your home long-term" },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Expert Tips", description: "Practical advice to help you maintain a pest-free home" },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary">
      <div className="w-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-   10 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wide font-[var(--font-heading)]">CUSTOMIZED PEST CONTROL</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6 font-[var(--font-heading)]">Tailored to Your Home&apos;s Specific Needs</h2>
              <p className="text-black text-base sm:text-lg leading-relaxed mb-6 font-[var(--font-body)]">At Nextal Pest Control, we use modern tools, clear reports, and smart plans to stop pests before they become a problem. Our team watches for pest activity and acts quickly to protect your home for a long time.</p>
              <p className="text-black text-base sm:text-lg leading-relaxed font-[var(--font-body)]">We also give you simple reports and helpful tips made for your home. This way, you understand what we do and how you can help keep your place safe and free from pests.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-1 font-[var(--font-heading)]">{feature.title}</h3>
                    <p className="text-sm text-black font-[var(--font-body)]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_AUTH_WHATS_NUBER}`} target="_blank" rel="noopener noreferrer" className="bg-success hover:bg-[#218838] text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-300 font-[var(--font-body)]">
                Get Free Inspection
              </a>
              <a href={`tel:${process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}`} className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold text-center hover:bg-secondary transition-colors duration-300 font-[var(--font-body)]">
                {process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-80 sm:h-96 lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image src="/assets/custom.jpeg" alt="Professional pest control technician treating a home" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-accent font-[var(--font-heading)]">500+</div>
                      <div className="text-xs text-black font-[var(--font-body)]">Happy Clients</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-accent font-[var(--font-heading)]">10+</div>
                      <div className="text-xs text-black font-[var(--font-body)]">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-accent font-[var(--font-heading)]">24/7</div>
                      <div className="text-xs text-black font-[var(--font-body)]">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-primary/10 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-12 sm:w-16 h-12 sm:h-16 bg-accent/10 rounded-full opacity-50"></div>
          </div>
        </div>
        <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center px-4 sm:px-6 lg:px-8 ">
            <div className="relative order-2 md:order-1">
                <div className="relative w-full h-52 sm:h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image src="/assets/about-img.png" alt="Dubai pest control service" fill className="object-cover" priority />
                </div>
            </div>
            <div className="space-y-4 sm:space-y-5 order-1 md:order-2 text-center md:text-left">
                <div className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium font-[var(--font-heading)]">About Us</div>
                <h2 className="mt-10 text-xl sm:text-3xl lg:text-4xl font-bold text-primary leading-snug font-[var(--font-heading)]">Your Trusted 24-Hour Pest Control Experts</h2>
                <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed font-[var(--font-body)]">At Nextal Pest Control, we are here to help keep homes and businesses across Dubai free from unwanted pests quickly, safely, and with lasting results. Our team takes real pride in the trust we&apos;ve built, the honest work we do, and the satisfaction of every customer we serve.</p>
                <div className="flex flex-row justify-center md:justify-start gap-3 sm:gap-4">
                <a href={`tel:${process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}`} className="inline-flex items-center justify-center rounded-lg bg-primary hover:bg-[#6B0F2A] px-5 sm:px-6 py-3 text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto font-[var(--font-body)]">
                    <Phone className="w-4 h-4 mr-2" />
                    CALL {process.env.NEXT_PUBLIC_AUTH_PHONE_NUMBER}
                </a>
                </div>
            </div>
        </div>
          <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center px-4 sm:px-6 lg:px-8 ">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium font-[var(--font-heading)]">
                <Bug className="w-4 h-4" />
                Our Story
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary font-[var(--font-heading)]">Professional Pest Control Excellence</h3>
              <p className="text-base sm:text-lg text-black leading-relaxed font-[var(--font-body)]">After a detailed consultation directly with you, Nextal Pest Control will implement an Integrated Pest Management (IPM) program specific to your pest problem. IPM is a cost-effective and environmentally-sensitive approach to eliminating pests.</p>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-success mt-1 flex-shrink-0" />
                <p className="text-sm sm:text-base text-black font-[var(--font-body)]">With regular pest control maintenance, you will never have to worry about bugs, insects, or rodents in your home again. We use only approved pest control chemicals to eliminate the cause of your stress.</p>
              </div>
            </div>
            <div className="relative group mt-5">
              <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image src="/assets/nextal-background.png" alt="Pest control service" fill className="object-cover" />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizedPestControl;