import React from "react";
import Hero from "./components/hero";
import ServicesIndex from "./components/services/index";
import MentorIndex from "./components/mentors/mentor-index";
import AboutUsIndex from "./components/about-us/about-index";
import CommunityIndex from "./components/community-posts/community-index";
import FindMates from "./components/find-mates";
import FaqsIndex from "./components/faqs/faqs-index";

const page = () => {
  return (
    <div>
      <Hero />
      <ServicesIndex />
      <MentorIndex />
      <AboutUsIndex />
      <CommunityIndex />
      <FindMates />
      <FaqsIndex />
    </div>
  );
};

export default page;
