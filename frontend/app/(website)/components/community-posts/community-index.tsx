import React from "react";
import Post from "./post";

export default function CommunityIndex() {
  return (
    <section className="bg-background py-16 px-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl my-5 font-bold text-center">
        Community <span className="text-gradient-01"> Anonymous Posts</span>
      </h2>
      <Post />
    </section>
  );
}
