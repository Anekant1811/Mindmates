import React from "react";
import Button from "./common/Button";

export default function Hero() {
  return (
    <div className="bg-background">
      <div className="sm:flex gap-5 py-16 mx-4 sm:mx-6 md:mx-auto md:w-4/5">
        <div className="w-1/2 h-auto my-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            <span>Healthy Minds, Happy Lives</span>
            <span className="text-gradient-01"> Mental Health </span>
            <span>Consultancy</span>
          </h1>
          <p className="text-[#999AA1] py-10">
            I Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris. Ultrices aliquet
            at quam. are ready to help you lorem non mauris. Ultrices
          </p>
          <Button text={"Get Started"} />
        </div>
        <div className="bg-[#D5E9F5] h-auto w-1/2 rounded-tl-[4rem] py-24"></div>
      </div>
    </div>
  );
}
