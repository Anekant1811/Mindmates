import React from "react";
import Hero from "./components/hero";
import ServicesIndex from './components/services/index'
import MentorIndex from './components/mentors/mentor-index'

const page = () => {
  return (
    <div>
      <Hero />
      <ServicesIndex/>
      <MentorIndex/>
    </div>
  );
};

export default page;
