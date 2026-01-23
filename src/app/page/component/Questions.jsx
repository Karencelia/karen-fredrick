"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What's your partner's favourite phrase or word to say??",
      answer: "Ome, I love you. You are my Ikigai!",
    },
    {
      question: "Using an Expression, how else would you tell your partner 'I Love you!",
      answer: "Hugging tightly",
    },
    {
      question: "What's one word that comes to your mind when you think of your Baby? ",
      answer: "My Ikigai",
    },
    {
      question: "Your favourite memory of him/her?",
      answer: "Our second date",
    },
    {
      question: "Can I bring a plus-one?",
      answer: "Your invitation will specify if a plus-one is included.",
    },
    {
      question: "Are kids allowed?",
      answer: "We love your little ones, but we’re keeping this an adults-only event so you and everyone can relax and enjoy the event.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="questions">
      <div className="flex flex-col items-center mt-16 lg:mt-5 px-4">
      <div className="w-full max-w-[90%] sm:max-w-[75%] text-left sm:text-center ">
        <h2 className="text-[24px] sm:text-[32px] md:text-[50px] font-black text-[#0c005b]">
          QUESTIONS
        </h2>

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
                      <p className="text-sm sm:text-base leading-relaxed font-light text-black text-left">{faq.answer}</p>
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
