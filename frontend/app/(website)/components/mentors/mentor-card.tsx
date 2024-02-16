import Image from "next/image";
import React from "react";
import cx from "classNames";
import Button from "../common/Button";
export default function MenotrCard({
  activeCard,
  setActiveCard,
  cardData,
  key,
}) {
  console.log( activeCard === cardData?.id)
  return (

    <div
      className={cx(
        "rounded-2xl my-8 py-8 px-4 h-auto bg-background w-1/3 flex flex-col items-center",
        {
          "my-4": activeCard === cardData?.id,
        }
      )}
      key={key}
      onClick={() => setActiveCard(cardData?.id)}
    >
      <div className="w-auto h-auto mt-8 rounded-[100%] bg-gradient-to-r from-lightGreen to-darkGreen p-[2px]">
        <Image
          src={cardData?.avatarUrl}
          alt="card"
          height={100}
          width={100}
          className="h-full w-24 rounded-[100%]"
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
      <Button text={"Get Started"} classNames={""} />
    </div>
  );
}
