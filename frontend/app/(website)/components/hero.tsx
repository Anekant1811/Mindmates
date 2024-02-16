import React from "react";
import Button from "./common/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-background">
      <div className="sm:flex gap-5 py-8 mx-4 sm:mx-6 md:mx-auto md:w-4/5 max-w-[100rem]">
        <div className="sm:w-2/3 h-auto my-auto  text-center">
          <h1 className="sm:text-start text-2xl sm:text-3xl lg:text-4xl font-bold">
            <span>Healthy Minds, Happy Lives</span>
            <span className="text-gradient-01"> Mental Health </span>
            <span>Consultancy</span>
          </h1>
          <p className="text-[#999AA1] py-10">
            I Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet
            at quam. are ready to help you lorem non mauris. Ultrices
          </p>
          <Button text={"Get Started"} classNames={""} />
        </div>
        <div className="bg-[#D5E9F5] h-auto w-1/3 rounded-tl-[4rem] mx-auto">
          <div className="w-auto hidden sm:block">
            <Image
              src="/images/hero.gif"
              alt="card"
              height={100}
              width={100}
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
