import Link from "next/link";
import React from "react";
import Button from "./Button";

export default function Navbar() {
  const navLinks = [
    { id: 1, title: "Home", url: "" },
    { id: 2, title: "Service", url: "" },
    { id: 3, title: "Contact", url: "" },
    { id: 4, title: "About Us", url: "" },
  ];
  return (
    <nav className="flex justify-evenly bg-background">
      <div className="logo"></div>
      <div className="flex gap-5 items-center text-grey">
        {navLinks?.map((item) => {
          return (
            <div key={item?.id} className="p">
              <Link href={item?.url}>{item?.title}</Link>
            </div>
          );
        })}
      </div>
      <div className="flex gap-4">
        <Button text={"Explore"} />
      </div>
    </nav>
  );
}
