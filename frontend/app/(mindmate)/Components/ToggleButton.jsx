import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ToggleButton = () => {
  const history = useRouter();

  return (
    <div
      onClick={(e) => {
        history.push("/mindmate/chats");
      }}
      className="w-[4vw] h-[4vw] cursor-pointer border-2 border-lightGreen rounded-full flex items-center justify-center absolute right-5 bottom-5"
    >
      <Image
        src={"/logos/logo-png.svg"}
        width={10000}
        height={10000}
        alt="Image"
      />
    </div>
  );
};

export default ToggleButton;
