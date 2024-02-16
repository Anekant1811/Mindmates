import React from "react";
import Post from "./post";
import Button from "../common/Button";

export default function CommunityIndex() {
  return (
    <section className="bg-background py-12 px-4 sm:px-8">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl my-5 font-bold text-center"
        style={{ lineHeight: "3.9vw" }}
      >
        Community{" "}
        <span className="text-gradient-01">
          {" "}
          Anonymous <br />
          Posts
        </span>
      </h2>
      <Post />
      <Post />
      <Post />
      <div className="mx-auto w-fit pt-2">
        <button
          className={
            "bg-gradient-to-r text-white from-[#4ED6DA] font-semibold to-[#04789D] text-center text-lg h-fit py-1.5 my-1 px-8 rounded-3xl"
          }
        >
          View All
        </button>
      </div>
    </section>
  );
}
