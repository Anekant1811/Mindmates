import Image from "next/image";
import React from "react";
import cx from "classNames";
export default function ServiceCard({
  key,
  cardData,
  setActiveCard,
  activeCard,
}) {
  console.log(activeCard);
  return (
    <div
      className={cx(
        "rounded-2xl py-8 px-4 bg-background sm:w-1/3 flex flex-col items-center",
        {
          "bg-gradient-to-br from-lightGreen to-darkGreen text-white":
            activeCard === cardData?.id,
        }
      )}
      key={key}
      onClick={() => setActiveCard(cardData?.id)}
    >
      <div className="w-auto h-auto mt-8">
        <Image
          src={cardData?.avatarUrl}
          alt="card"
          height={100}
          width={100}
          className="h-auto w-auto rounded-[100%]"
        />
      </div>
      <h2 className="text-xl text-bold text-center py-4">{cardData?.title}</h2>
      <p
        className={cx("text-center text-sm", {
          "text-[#172048]": activeCard !== cardData?.id,
        })}
      >
        {cardData?.desc}
      </p>
    </div>
  );
}
