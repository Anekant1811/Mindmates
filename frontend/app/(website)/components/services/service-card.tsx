"use client";
import Image from "next/image";
import React from "react";
import cx from "classNames";
import { useRouter } from "next/navigation";
// import useRouter  from "next/router";
export default function ServiceCard({
  key,
  cardData,
  setActiveCard,
  activeCard,
  bigCard = false,
  slick = false,
}) {
  console.log(slick, " ");
  const router = useRouter();
  return (
    <div
      className={cx(
        "rounded-2xl py-8 px-4 shadow-md shadow-[#c5c5c5] bg-background md:mb-0 mb-4 sm:w-1/3 flex flex-col items-center cursor-pointer transition-all",
        {
          "bg-gradient-to-br from-lightGreen to-darkGreen text-white":
            activeCard === cardData?.id,
          "w-fit": slick,
        }
      )}
      key={key}
      onClick={() => {
        setActiveCard(cardData?.id);
        cardData?.redirectUrl !== undefined &&
          router.push(`${cardData?.redirectUrl}`);
      }}
    >
      <div className="w-auto h-auto mt-8">
        <Image
          src={cardData?.avatarUrl}
          alt="card"
          height={100}
          width={100}
          className="h-auto w-auto object-cover object-center rounded-[100%]"
        />
      </div>
      <h2 className="text-2xl text-bold text-center pt-4 pb-2 font-semibold">
        {cardData?.title}
      </h2>
      <p
        className={cx("text-center text-base", {
          "text-[#172048]": activeCard !== cardData?.id,
        })}
      >
        {cardData?.desc}
      </p>
    </div>
  );
}
