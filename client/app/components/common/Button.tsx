import React from "react";

export default function Button({ text }: any) {
  return (
    <button className="bg-gradient-to-r from-green-600 to-sky-500 text-center h-fit py-2 my-1 px-5 rounded-3xl">
      {text}
    </button>
  );
}
