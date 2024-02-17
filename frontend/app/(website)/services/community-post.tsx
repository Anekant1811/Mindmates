import React from "react";
import Post from "../components/community-posts/post";

export default function CommunnityPost() {
  return (
    <section className="bg-background mx-auto py-8">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
        style={{ lineHeight: "3.9vw" }}
      >
        Community
        <span className="text-gradient-01">
          <span> Anonymous </span>
          <br />
          Posts
        </span>
      </h2>
      <div className="pt-6">
        <Post />
      </div>
    </section>
  );
}
