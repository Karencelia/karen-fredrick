"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
     {
      question: "What's your partner's favourite phrase or word to say??",
      answers: [
      { name: "Fredrick", text: "Wo... I'm tired o 😂" },
      { name: "Karen", text: "Ome" }
    ],
    },
    {
      question: "Using an Expression, how else would you tell your partner 'I Love you!",
      answers: [
        { name: "Fredrick", text: "You are True North to me - Life does have more meaning because of you" },
        { name: "Karen", text: "My heart found its rhythm in you." },
      ],
    },
    {
      question: "What's one word that comes to your mind when you think of your Baby? ",
      answers: [
        { name: "Fredrick", text: "Bubbles" },
        { name: "Karen", text: "Peace" },
      ],
    },
    {
      question: "Your favourite memory of him/her?",
      answers: [
        { name: "Fredrick", text: "First Day I saw her - In the Rain 🌧️" },
        { name: "Karen", text: "" },
      ],
    },
    {
      question: "What habit do you appreciate the most about him/her?",
      answers: [
        { name: "Fredrick", text: "Once she makes up her mind about something, she sticks to it." },
        { name: "Karen", text: "His consistency — I never have to question where I stand with him." },
      ],
    }
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="questions">
      <div className="flex flex-col items-center mt-16 lg:mt-5">
        {/* Removed px-4 from parent and adjusted max-width classes */}
        <div className="w-full px-4 sm:px-0 sm:max-w-[90%] md:max-w-[75%] text-left sm:text-center">
          <h2 className="text-4xl md:text-5xl text-[#0c005b] px-4 sm:px-0">
            Couple's Q&A
          </h2>

          {/* Full width on mobile, constrained on larger screens */}
          <div className="mt-8 bg-white shadow-lg rounded-xl p-4 sm:p-5 tracking-wide w-full">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-2">
                <div
                  className={`cursor-pointer px-4 py-3 rounded-xl transition-all duration-300 ${
                    openIndex === index ? "bg-[#f5f6ff] text-[#0c005b] font-bold" : "bg-white text-[#0c005b]"
                  }`}
                  onClick={() => toggleAnswer(index)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm sm:text-lg font-bold">{faq.question}</span>
                    <button className="text-xl sm:text-2xl font-bold cursor-pointer">
                      {openIndex === index ? "−" : "+"}
                    </button>
                  </div>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden bg-[#f5f6ff] text-[#0c005b] mt-2 rounded-b-xl px-2 py-2"
                      >
                        <p className="text-sm sm:text-base leading-relaxed font-light text-black text-left">
                          {faq.answers.map((ans, i) => (
  <div key={i} className="mb-2">
    <p className="font-semibold text-[#0c005b]">
      {ans.name}'s Response:
    </p>
    <p className="text-sm sm:text-base leading-relaxed font-light text-black">
      {ans.text}
    </p>
  </div>
))}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}