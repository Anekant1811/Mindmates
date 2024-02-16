import React from "react";

export default function Button({ text }: any) {
  return (
    <button className="bg-gradient-to-r text-white from-[#4ED6DA] to-[#04789D] text-center h-fit py-2 my-1 px-5 rounded-3xl">
      {text}
    </button>
  );
}
