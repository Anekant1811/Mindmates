import React from "react";
import cx from "classNames";
export default function Button({ text, classNames }) {
  console.log(classNames);
  return (
    <button
      className={cx(
        "bg-gradient-to-r text-white from-[#4ED6DA] to-[#04789D] text-center h-fit py-1 my-1 px-5 rounded-3xl  ",
        {
          classNames, 
        }
      )}
    >
      {text}
    </button>
  );
}
