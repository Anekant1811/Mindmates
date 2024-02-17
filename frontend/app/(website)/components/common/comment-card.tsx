import Image from "next/image";
import React from "react";

export default function CommentCard() {
  return (
    <div className="flex py-4 border-0 border-b border-darkGreen sm:gap-8 gap-4">
      <div className="rounded-full">
        <Image
          src="/images/doctor-avatar.svg"
          alt="card"
          height={100}
          width={100}
          className="mx-auto w-12 h-full rounded-full bg-cover"
        />
      </div>
      <div className="font-semibold">
        <h4 className="text-lg">User Name</h4>
        <p className="text-darkGreen text-xs py-2">User Comment Here</p>
      </div>
    </div>
  );
}
