import Image from "next/image";
import React from "react";
import Button from "./common/Button";

export default function FindMates() {
  return (
    <section className="py-16 mx-auto w-4/5 flex items-center">
      <div className="hidden sm:block w-1/2">
        <Image
          src="/images/find-mates.svg"
          alt="card"
          height={100}
          width={100}
          className="h-auto w-4/5"
        />
      </div>
      <div className="space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl leading-10 font-bold">
          Find Your perfect <span className="text-gradient-01">Mind Mate</span>
        </h2>
        <Button text={"Explore Experts"} classNames={""} />
      </div>
    </section>
  );
}
