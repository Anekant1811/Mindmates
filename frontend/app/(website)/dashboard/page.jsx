"use client";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const history = useRouter();

  return (
    <div className="h-[30vw] mt-[6vw] px-[8.5vw]">
      <button
        onClick={(e) => {
          history.push("/chats");
        }}
      >
        Chats
      </button>
      <button
        onClick={(e) => {
          history.push("/questionnaire");
        }}
      >
        Questionnaire
      </button>
    </div>
  );
};

export default page;
