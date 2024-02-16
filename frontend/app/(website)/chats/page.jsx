"use client";
import React, { useState } from "react";
import MenotrCard from "../components/mentors/mentor-card";

const page = () => {
  const [activeCard, setActiveCard] = useState(2);
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

  return (
    <div className="w-full h-[85vh] bg-background border-b border-gray px-7 py-6 flex items-start justify-between">
      <div className="w-[68%] h-full rounded-2xl shadow-gray shadow-sm">
        <div className="bg-greenish h-[12%] rounded-t-2xl w-full"></div>
      </div>
      <div className="w-[30%] h-full rounded-2xl shadow-gray shadow-sm">
        <div className="bg-greenish h-[12%] w-full rounded-t-2xl flex items-center justify-center">
          <h1 className="text-white text-[32px] font-semibold">Mind Mates</h1>
        </div>
        <div className="h-[88%] rounded-b-2xl bg-white">
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
    </div>
  );
};

export default page;
