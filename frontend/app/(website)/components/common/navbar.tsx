import Link from "next/link";
import React from "react";
import Button from "./Button";
import Image from "next/image";

export default function Navbar() {
  const navLinks = [
    { id: 1, title: "Home", url: "" },
    { id: 2, title: "Service", url: "" },
    { id: 3, title: "Contact", url: "" },
    { id: 4, title: "About Us", url: "" },
  ];
  return (
    <nav className="flex justify-around bg-background py-3 fixed w-full top-0 left-0">
      <div className="logo">
        <Image
          src="/logos/logo.svg"
          alt="card"
          height={100}
          width={100}
          className="h-auto w-auto "
        />
      </div>
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
        <Button text={"Explore"} classNames={""} />
      </div>
    </nav>
  );
}
