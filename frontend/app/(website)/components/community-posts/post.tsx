"use client";
import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
// const [acti]

export default function Post() {
  return (
    <div className="sm:w-4/5 mb-6 cursor-pointer shadow-sm shadow-gray py-2 transition-all mx-auto flex justify-around items-center rounded-2xl border border-[#B5AFAF] gap-2 sm:gap-5 px-14 hover:bg-gradient-to-r text-gray hover:text-white from-lightGreen to-darkGreen">
      <div className="w-11/12 flex items-center">
        <div className="rounded-full">
          <Image
            src="/images/doctor-avatar.svg"
            alt="card"
            height={100}
            width={100}
            className="mx-auto w-[10vw] h-full rounded-full"
          />
        </div>
        <div className="ml-4">
          <h3 className="text-lg sm:text-2xl font-semibold text-black hover:text-white transition-all">
            Micky Mouse
          </h3>
          <p className="text-sm mt-1.5 w-4/5 line-clamp-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In iure
            illo veniam! Repudiandae atque tempora ipsam dolores ea doloribus
            iste, ducimus velit sint cupiditate ipsa!
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between pr-4 h-full w-1/12 gap-6">
        <FaRegHeart className="text-xl" />
        <div className="flex text-sm sm:text-xl font-medium gap-2 sm:gap-5">
          <button>View</button>
          <button>Reply</button>
        </div>
      </div>
    </div>
  );
}
