import Image from "next/image";
import React from "react";
import cx from "classNames";

export default function MenotrCard({
  activeCard,
  setActiveCard,
  cardData,
  key,
}) {
  return (
    <div
      className={cx(
        "rounded-2xl my-8 py-8 px-4 h-auto cursor-pointer bg-background sm:w-1/3 flex flex-col items-center",
        {
          "sm:my-4": activeCard === cardData?.id,
        }
      )}
      key={key}
      onClick={() => setActiveCard(cardData?.id)}
    >
      <div className="w-[8vw] h-[8vw] mt-8 rounded-[100%] bg-gradient-to-r from-lightGreen to-darkGreen p-1">
        <Image
          src={cardData?.avatarUrl}
          alt="card"
          height={100}
          width={100}
          className="h-full w-full object-cover object-center rounded-full"
        />
      </div>
      <h2 className="text-2xl font-semibold text-center mt-2">
        {cardData?.title}
      </h2>
      <div className="flex gap-2 mt-2 mb-2">
        {cardData?.category?.map((i) => {
          return (
            <div
              key={i}
              className="text-[10px] md:text-sm px-5 py-0.5 rounded-3xl border-[#1720488a] border"
            >
              {i}
            </div>
          );
        })}
      </div>
      <p
        className={cx("text-center mb-3", {
          "text-[#172048]": activeCard !== cardData?.id,
        })}
      >
        {cardData?.desc}
      </p>
    </div>
  );
}
