"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import CommentCard from "../common/comment-card";

export default function Post() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`sm:w-4/5 mb-6 cursor-pointer shadow-sm shadow-gray py-2 transition-all mx-auto justify-around items-center rounded-2xl border border-[#B5AFAF] gap-2 sm:gap-5 px-14 ${
        isOpen
          ? "border hover:border-darkGreen "
          : "hover:bg-gradient-to-r hover:text-white"
      } text-gray  from-lightGreen to-darkGreen`}
    >
      <div className="flex pt-2">
        <div className="w-11/12 flex items-center gap-4">
          <div className="rounded-full">
            <Image
              src="/images/doctor-avatar.svg"
              alt="card"
              height={100}
              width={100}
              className="mx-auto w-[10vw] h-full rounded-full"
            />
          </div>
          <div
            className={`ml-4text-black  ${
              isOpen ? "text-darkGreen" : "hover:text-white"
            } transition-all`}
          >
            <h3 className={"text-lg sm:text-2xl font-semibold "}>
              Micky Mouse
            </h3>
            <p
              className={`text-sm mt-1.5 w-4/5 ${isOpen ? "" : "line-clamp-2"}`}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In iure
              illo veniam! Repudiandae atque tempora ipsam dolores ea doloribus
              iste, ducimus velit sint cupiditate ipsa! Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Possimus, modi distinctio
              obcaecati eveniet harum cum iste commodi quod expedita deleniti!
            </p>
          </div>
        </div>
        <div
          className={`flex flex-col items-end justify-between pr-4 h-full w-1/12 gap-6`}
        >
          <FaRegHeart className="text-xl" />
          <div className="flex text-sm sm:text-xl font-medium gap-2 sm:gap-5">
            <button onClick={() => setIsOpen(!isOpen)}>View</button>
            <button>Reply</button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="comment py-8 sm:w-4/5 mx-auto">
          <h3 className="text-xl font-bold py-4 text-darkGreen">Comments</h3>
          <CommentCard />
          <CommentCard />
          <button className="ml-auto float-end my-2 font-bold text-darkGreen">
            Reply
          </button>
        </div>
      )}
    </div>
  );
}
