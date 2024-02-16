"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
export default function FAQ() {
  const [faqOpen, setFaqOpen] = useState(false);
  return (
    <div
      className="bg-gradient-to-l from-lightGreen to-darkGreen p-[2px] rounded-xl"
      onClick={() => setFaqOpen(!faqOpen)}
    >
      <div className="bg-[#D5EAF5] p-3 rounded-xl text-xs sm:text-base">
        <div className="flex sm:gap-6 justify-between items-center line-clamp-2">
          <h2>
            Lorem ipsumonsectetur, adipisicing elit.
            Perspiciatis
          </h2>
          {faqOpen ? <FaCaretUp /> : <FaCaretDown />}
        </div>
        {faqOpen && (
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, sit
            quas nam rerum et officiis molestiae hic perferendis eos numquam.
          </p>
        )}
      </div>
    </div>
  );
}
