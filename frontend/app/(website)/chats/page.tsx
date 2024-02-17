"use client";
import React, { useEffect, useState } from "react";
import MenotrCard from "../components/mentors/mentor-card";
import Image from "next/image";
import InputEmoji from "react-input-emoji";
import EmojiPicker from "emoji-picker-react";
const Page = () => {
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
  const [chatInput, setChatInput] = useState("");

  useEffect(() => {
    console.log(chatInput);
  }, [chatInput]);
  return (
    <div className="w-full h-[85vh] bg-background border-b border-gray px-7 py-6 flex items-start justify-between">
      <div className="w-[68%] h-full rounded-2xl shadow-gray shadow-sm flex flex-col">
        <div className="bg-greenish min-h-[12%] rounded-t-2xl w-full flex items-center justify-between px-6 py-2">
          <div className="flex gap-5 text-white">
            <Image
              src="/images/doctor-avatar.svg"
              height={100}
              width={100}
              alt="user-profile"
              className="w-12 h-12 rounded-[100%]"
            />
            <div className="">
              <h3 className="text-lg">User Name</h3>
              <p className="text-xs">The Mate You Need the most</p>
            </div>
          </div>
          <Image
            src="/logos/duo.svg"
            height={100}
            width={100}
            alt="user-profile"
            className="w-8 h-8 rounded-[100%]"
          />
        </div>
        <div className="mx-6 mt-auto mb-2 bg-gradient-to-r from-lightGreen to-darkGreen p-[1px] rounded-2xl ">
          <div className="bg-white text-gray px-6 py-1 flex rounded-2xl z-10">
            <InputEmoji
              value={chatInput}
              onChange={() => setChatInput(chatInput)}
            />
          </div>
        </div>
      </div>
      <div className="w-[30%] h-full rounded-2xl shadow-gray shadow-sm">
        <div className="bg-greenish h-[12%] w-full rounded-t-2xl flex items-center justify-center">
          <h1 className="text-white text-lg font-semibold">
            Recommanded Mates
          </h1>
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

export default Page;
