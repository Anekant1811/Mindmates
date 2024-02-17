"use client";
import Image from "next/image";
import React from "react";
import bg from "../../Assets/elements/Group 164.png";
import { useRouter } from "next/navigation";

export default function FindMates() {
  const history = useRouter();

  return (
    <section className="py-24 mx-auto w-4/5 flex items-center">
      <Image src={bg} alt="bg" className="absolute top-[370vh] left-0" />
      <div className="hidden sm:block w-1/2">
        <Image
          src="/images/find-mates.svg"
          alt="card"
          height={100}
          width={100}
          className="h-auto w-4/5"
        />
      </div>
      <div className="space-y-6">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
          style={{ lineHeight: "3.8vw" }}
        >
          Find Your perfect
          <br /> <span className="text-gradient-01">Mind Mate</span>
        </h2>
        <button
          onClick={(e) => {
            history.push("/mindmates");
          }}
          className={
            "bg-gradient-to-r text-white from-[#4ED6DA] font-semibold to-[#04789D] text-center text-lg h-fit py-2 my-1 px-8 rounded-3xl"
          }
        >
          Explore Experts
        </button>
      </div>
    </section>
  );
}
