'use client'
import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
// const [acti]
export default function Post() {
  return (
    <div className="sm:w-4/5 my-2 py-1 mx-auto flex justify-around items-center rounded-2xl border border-[#B5AFAF] hover:border-darkGreen gap-2 sm:gap-5">
      <div className="sm:w-1/4 rounded-[100%]">
        <Image
          src="/images/doctor-avatar.svg"
          alt="card"
          height={100}
          width={100}
          className="mx-auto w-full h-full rounded-[100%]"
        />
      </div>
      <div className="">
        <h3 className="text-lg sm:text-2xl font-semibold">Micky Mouse</h3>
        <p className="text-sm sm:py-2 w-4/5 line-clamp-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In iure illo
          veniam! Repudiandae atque tempora ipsam dolores ea doloribus iste,
          ducimus velit sint cupiditate ipsa!
        </p>
      </div>
      <div className="flex flex-col justify-between h-auto sm:w-1/4 mr-2 lg:mr-0 gap-6">
        <div className="items-end">
          <FaRegHeart />
        </div>
        <div className="flex text-sm sm:text-xl font-medium gap-2 sm:gap-5">
          <button>Like</button>
          <button>Reply</button>
        </div>
      </div>
      
    </div>
  );
}
