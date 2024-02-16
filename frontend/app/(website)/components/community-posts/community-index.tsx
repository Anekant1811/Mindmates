import React from "react";
import Post from "./post";
import Button from "../common/Button";

export default function CommunityIndex() {
  return (
    <section className="bg-background py-16 px-4 sm:px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl my-5 font-bold text-center">
        Community <span className="text-gradient-01"> Anonymous Posts</span>
      </h2>
      <Post />
      <Post />
      <Post />
      <div className="mx-auto w-fit py-4">
        <Button text={"View All"} classNames={"mx-auto"} />
      </div>
    </section>
  );
}
