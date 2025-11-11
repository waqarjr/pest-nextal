"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import FrequentlyQuestions from "@/app/_data/FrequentlyQuestions";

export const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const askedQuestion = FrequentlyQuestions['/'];
 
  return (
    <section className="py-16 bg-secondary">
      <div className=" mx-auto px-1 md:px-6">
        <h2 className="text-3xl font-bold text-primary text-center">
          {askedQuestion.heading}
        </h2>
        <p className="text-lg text-black text-center mt-2">
          {askedQuestion.paragraph}
        </p>

        <div className="mt-10 space-y-4">
          {askedQuestion.faqs.map((item, idx) => (
            <div key={idx} className="card border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg">
              {/* Toggle Button */}
              <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="flex justify-between items-center w-full p-5 text-left transition-colors hover:bg-gray-50">
                <span className="font-semibold text-lg text-primary">
                  {item.q}
                </span>
                <div className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  {openIndex === idx ? (
                    <Minus size={20} className="text-primary" />
                  ) : (
                    <Plus size={20} className="text-primary" />
                  )}
                </div>
              </button>

              {/* Answer with Animation */}
              <div className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-5 pb-5 text-black animate-fade-in">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{` @keyframes fade-in { from { opacity: 0; transform: translateY(-10px);}
          to { opacity: 1; transform: translateY(0); }}
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};