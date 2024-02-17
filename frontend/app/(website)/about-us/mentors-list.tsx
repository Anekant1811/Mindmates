import React from "react";
import MentorCard from "../components/mentors/mentor-card";

export default function MentorsList() {
  const mentorCardsData = [
    {
      id: 1,
      avatarUrl: "/images/doctor-avatar.svg",
      title: "Your Well-Wisher",
      category: ["Depression", "Phychology"],
      desc: "You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered.",
    },
    {
      id: 2,
      avatarUrl: "/images/doctor-avatar.svg",
      title: "Your Well-Wisher",
      category: ["Depression", "Phychology"],
      desc: "You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered.",
    },
    {
      id: 3,
      avatarUrl: "/images/doctor-avatar.svg",
      title: "Your Well-Wisher",
      category: ["Depression", "Phychology"],
      desc: "You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered.",
    },
    {
      id: 1,
      avatarUrl: "/images/doctor-avatar.svg",
      title: "Your Well-Wisher",
      category: ["Depression", "Phychology"],
      desc: "You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered.",
    },
    {
      id: 2,
      avatarUrl: "/images/doctor-avatar.svg",
      title: "Your Well-Wisher",
      category: ["Depression", "Phychology"],
      desc: "You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered.",
    },
    {
      id: 3,
      avatarUrl: "/images/doctor-avatar.svg",
      title: "Your Well-Wisher",
      category: ["Depression", "Phychology"],
      desc: "You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered.",
    },
  ];
  return (
    <section className="md:w-4/5 mx-auto my-6">
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
      <div className="grid grid-cols-3 gap-4">
        {mentorCardsData?.map((item) => {
          return <MentorCard cardData={item} key={item?.id}  />;
        })}
      </div>
    </section>
  );
}
