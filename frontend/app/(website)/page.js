import React from "react";
import Hero from "./components/hero";
import ServicesIndex from "./components/services/index";
import MentorIndex from "./components/mentors/mentor-index";
import AboutUsIndex from "./components/about-us/about-index";
import CommunityIndex from "./components/community-posts/community-index";

const page = () => {
  return (
    <div>
      <div className="py-[5vw] bg-background"></div>
      <Hero />
      <ServicesIndex />
      <MentorIndex />
      <AboutUsIndex />
      <CommunityIndex />
    </div>
  );
};

export default page;
