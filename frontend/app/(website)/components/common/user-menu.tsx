import Image from "next/image";
import React from "react";

export default function UserMenu() {
  const userMenuList = [
    { title: "Dashboard" },
    { title: "Questionaries" },
    { title: "Query Status" },
  ];
  return (
    <div className="h-[85vh] w-[20vw] text-center font-semibold flex flex-col justify-between py-12 px-4 border-0 border-r border-lightGray ">
      <div className="">
        <Image src={""} alt="bg" className=" rounded-[100%]" />
        <h2 className="text-2xl text-gray"></h2>
      </div>
      <div className="div">
        {" "}
        {userMenuList?.map((item, idx) => {
          return (
            <div key={idx} className="flex justify-center py-2 text-gray">
              {item?.title}
            </div>
          );
        })}
      </div>
      <button className="text-gray">Logout</button>
    </div>
  );
}
