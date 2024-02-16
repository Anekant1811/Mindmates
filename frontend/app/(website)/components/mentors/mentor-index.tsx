"use client";
import { useState } from "react";
import MenotrCard from "./mentor-card";

export default function MentorIndex() {
  const mentorCardsData = [
    {
      id: 1,
      avatarUrl: "/images/doctor-avatar.svg",
      title: "Your Well-Wisher",
      category: ["Depression", "Phychology"],
      desc: "You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered.",
    },
    {
      id: 2,
      avatarUrl: "/images/doctor-avatar.svg",
      title: "Your Well-Wisher",
      category: ["Depression", "Phychology"],
      desc: "You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered.",
    },
    {
      id: 3,
      avatarUrl: "/images/doctor-avatar.svg",
      title: "Your Well-Wisher",
      category: ["Depression", "Phychology"],
      desc: "You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered.",
    },
  ];
  const [activeCard, setActiveCard] = useState(2);

  return (
    <section className="py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center my-4">
        Our <span className="text-gradient-01"> Mind Mates </span>
      </h2>
      <div className="w-full bg-gradient-to-tr from-[#d5e9f5] to-[#d4f5f5]">
        <div className="w-4/5 sm:flex gap-3 justify-center mx-auto">
          {mentorCardsData?.map((cardData) => {
            return (
              <MenotrCard
                key={cardData?.id}
                activeCard={activeCard}
                setActiveCard={setActiveCard}
                cardData={cardData}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
