"use client";
import Image from "next/image";
import React, { useState } from "react";
import FAQ from "./faq";
export default function FaqsIndex() {
  return (
    <section className="bg-gradient-to-b from-[#44b4b43c] to-[#106d8c36] sm:px-12 py-16 flex flex-col sm:flex-row">
      <div className="sm:w-2/3">
        <h2 className="text-2xl sm:text-4xl font-bold text-center">
          FAQ&apos;s
        </h2>
        <div className="w-4/5 mx-auto my-8 space-y-2">
          <FAQ  />
          <FAQ  />
          <FAQ  />
        </div>
      </div>
      <div className="mx-auto w-1/3 h-auto">
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
