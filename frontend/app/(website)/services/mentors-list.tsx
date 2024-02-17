"use client";
import React, { useContext, useState } from "react";
import MentorCard from "../components/mentors/mentor-card";
import Context from "../../../context/Context";

export default function MentorsList() {
  const { allMindmates } = useContext(Context);
  const [activeCard, setActiveCard] = useState(2);

  return (
    <section
      id="mentors-list"
      className="md:w-4/5 md:mx-auto mx-[5vw] py-6 pt-16"
    >
      <h2
        className="text-3xl sm:text-4xl md:mb-0 mb-3 md:text-5xl font-bold text-center"
        style={{ lineHeight: "3.9vw" }}
      >
        Our
        <span className="text-gradient-01">
          <span> MindMates </span>
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {allMindmates?.map((item) => {
          return (
            <MentorCard
              cardData={item}
              data={item}
              bigCard={true}
              key={item?.id}
              setActiveCard={setActiveCard}
            />
          );
        })}
      </div>
    </section>
  );
}
