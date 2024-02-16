import Image from "next/image";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
export default function Post() {
  return (
    <div className="sm:w-4/5 mx-auto flex justify-between items-center rounded-3xl border border-[#B5AFAF] gap-2 sm:gap-5">
      <div className="w-1/4 rounded-[100%]">
        <Image
          src="/images/doctor-avatar.svg"
          alt="card"
          height={100}
          width={100}
          className="mx-auto w- h-auto rounded-[100%]"
        />
      </div>
      <div className="">
        <h3 className="text-2xl font-semibold">Micky Mouse</h3>
        <p className="text-sm py-2 w-4/5 line-clamp-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In iure illo
          veniam! Repudiandae atque tempora ipsam dolores ea doloribus iste,
          ducimus velit sint cupiditate ipsa!
        </p>
      </div>
      <div className="flex flex-col justify-between h-auto w-1/4 gap-6">
        <div className="items-end">
          <FaRegHeart />
        </div>
        <div className="flex text-xl font-medium gap-5">
            <button>Like</button>
            <button>Reply</button>
        </div>
      </div>
    </div>
  );
}
