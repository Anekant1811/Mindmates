"use client";
import React, { useState } from "react";
import ServiceCard from "./service-card";
import cx from "classNames";

export default function ServicesIndex() {
  const ServiceCardData = [
    {
      id: 1,
      avatarUrl: "/images/doctor-avatar.svg",
      title: "Chat with doctor",
      desc: "You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered.",
    },
    {
      id: 2,
      avatarUrl: "/images/tablet-avatar.svg",
      title: "Health Store",
      desc: "Talk about the health complaints you are experiencing and don't hesitate to ask about the proper treatment",
    },
    {
      id: 3,
      avatarUrl: "/images/hospital-avatar.svg",
      title: "Visit Hospitals",
      desc: "Get priority services in hospitals with Haidoc. Which allows you to go to the hospital more practically and save time.",
    },
  ];
  const [activeCard, setActiveCard] = useState(2);
  return (
    <section className="py-16 mx-4 sm:mx-6 md:mx-auto md:w-4/5">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold md:w-4/5 mx-auto text-center my-6">
        Why our <span className="text-gradient-01"> Mental Health </span>
        Consultants are the Best Choice
      </h1>
      <div className="cards sm:flex gap-2">
        {ServiceCardData?.map((cardData) => {
          return (
            <ServiceCard
              key={cardData?.id}
              cardData={cardData}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          );
        })}
      </div>
      <div className="flex justify-center gap-3 mt-5">
        {ServiceCardData?.map((cardData) => {
          return (
            <div
              onClick={() => setActiveCard(cardData?.id)}
              key={cardData?.id}
              className={cx(
                "h-3 w-3 rounded-[100%] bg-background border-solid cursor-pointer",
                {
                  "bg-gradient-to-r from-lightGreen to-darkGreen":
                    activeCard === cardData?.id,
                  "border-solid border-gray-600 border":
                    activeCard !== cardData?.id,
                }
              )}
            ></div>
          );
        })}
      </div>
    </section>
  );
}
