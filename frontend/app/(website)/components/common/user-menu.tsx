"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { useRouter } from "next/navigation";
export default function UserMenu() {
  const router = useRouter();
  const userMenuList = [
    {
      title: "Dashboard",
      id: 1,
      icon: <CiHome />,
      redirectUrl: "/user-dashboard",
    },
    {
      title: "Questionaries",
      id: 2,
      icon: <CiUser />,
      redirectUrl: "/user-dashboard/questionnaire",
    },
    {
      title: "Query Status",
      id: 3,
      icon: <CiCalendar />,
      redirectUrl: "/user-dashboard",
    },
  ];
  const [isActive, setIsActive] = useState(1);
  return (
    <div className="h-auto w-[20vw] text-center font-semibold flex flex-col py-12 px-4 border-0 border-r border-lightGray ">
      <div className="mx-auto">
        <Image
          src={"images/doctor-avatar.svg"}
          width={100}
          height={100}
          alt="bg"
          className="rounded-[100%]"
        />
        <h2 className="text-2xl text-gray"></h2>
      </div>
      <div className="pt-12">
        {userMenuList?.map((item, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                setIsActive(item?.id);
                router.push(`${item?.redirectUrl}`);
              }}
              className={`flex justify-center py-2 cursor-pointer items-center ${
                isActive === item?.id ? "text-darkGreen" : "text-gray"
              }`}
            >
              {item?.icon} <h2> {item?.title}</h2>
            </div>
          );
        })}
      </div>
      <button className="text-gray pt-10">Logout</button>
    </div>
  );
}
