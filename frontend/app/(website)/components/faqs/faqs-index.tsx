"use client";
import Image from "next/image";
import React, { useState } from "react";
import FAQ from "./faq";

export default function FaqsIndex() {
  const questions = [
    {
      q: "What is the minimum age for using MindMates?",
    },
    {
      q: "Is my data and information safe with MindMates?",
    },
    {
      q: "What happens if i get a message that makes me uncomfortable or seems is taking my privacy?",
    },
    {
      q: "Can I become a MindMate?",
    },
    {
      q: "Is calling safe here with MindMates?",
    },
    {
      q: "Is it free to use?",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#44b4b43c] to-[#106d8c36] py-16 px-[9vw] flex flex-col justify-between items-center sm:flex-row">
      <div className="w-6/12">
        <h2 className="text-2xl sm:text-4xl font-bold text-darkGreen text-center">
          FAQ&apos;s
        </h2>
        <div className="w-4/5 h-[52vh] overflow-y-auto mx-auto my-8 space-y-2">
          {questions?.map((e, i) => {
            return <FAQ data={e} key={i} />;
          })}
        </div>
      </div>
      <div className="w-4/12 h-auto">
        <Image
          src="/images/faq.svg"
          alt="card"
          height={100}
          width={100}
          className="h-full w-full"
        />
      </div>
    </section>
  );
}
