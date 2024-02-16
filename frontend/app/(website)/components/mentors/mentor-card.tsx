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
        "rounded-2xl my-4 py-8 px-4 bg-background w-1/3 flex flex-col items-center",
        {
          "my-0": activeCard === cardData?.id,
        }
      )}
      key={key}
      onClick={() => setActiveCard(cardData?.id)}
    >
      <div className="w-auto h-auto mt-8 rounded-[100%] bg-gradient-to-r from-lightGreen to-darkGreen p-1">
        <Image
          src={cardData?.avatarUrl}
          alt="card"
          height={100}
          width={100}
          className="h-full w-full rounded-[100%]"
        />
      </div>
      <h2 className="text-xl font-semibold text-center">{cardData?.title}</h2>
      <div className="flex gap-2 my-4">
        {cardData?.category?.map((i) => {
          return (
            <div
              key={i}
              className="px-4 py-1 rounded-3xl border-[#1720488a] border"
            >
              {i}
            </div>
          );
        })}
      </div>
      <p
        className={cx("text-center text-xs", {
          "text-[#172048]": activeCard !== cardData?.id,
        })}
      >
        {cardData?.desc}
      </p>
    </div>
  );
}
