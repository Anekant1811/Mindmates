import Image from "next/image";
import React from "react";
import Button from "../common/Button";

export default function AboutUsIndex() {
  return (
    <section className="">
      <h3 className="text-center text-2xl text-semibold">About Us</h3>
      <div className="flex flex-col sm:flex-row my-6 w-4/5 mx-auto items-center gap-5">
        <div className="sm:w-2/5">
          <Image
            src="/images/about-us.svg"
            alt="card"
            height={100}
            width={100}
            className="h-auto w-4/5"
          />
        </div>
        <div className="sm:w-3/5">
          <h2 className="text-3xl md:text-5xl font-bold">
            Discover the Faces Behind Our{" "}
            <span className="text-gradient-01"> Mental Health </span>
            Consultancy
          </h2>
          <p className="text-lightGray py-6">
            Lorem ipsum dolor sit amet consectetur. Convallis est urna
            adipiscing fringilla nulla diam lorem non mauris.
          </p>
          <Button text={"Explore Experts"} classNames={"text-lg"} />
        </div>
      </div>
    </section>
  );
}
