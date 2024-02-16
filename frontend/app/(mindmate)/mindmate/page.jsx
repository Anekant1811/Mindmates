"use client";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Image from "next/image";

import { AiOutlineBell, AiOutlineEye } from "react-icons/ai";
import bg from "../../Assets/bg.jpg";
import EditMindmate from "./EditMindmate";
import axios from "axios";
import BASE_URL from "../../url";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import Context from "../../../context/Context";

const Trubuddy = () => {
  const [showEdit, setShowEdit] = useState(false);
  const { mindmate, setMindmate } = useContext(Context);
  const history = useRouter();

  useEffect(() => {
    axios
      .post(`${BASE_URL}/mindmate/get`, { token: getCookie("token") })
      .then((res) => {
        setMindmate(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <EditMindmate showEdit={showEdit} setShowEdit={setShowEdit} />
      <div className="absolute top-0 left-0 z-0">
        <Image
          src={bg}
          width={10000}
          height={10000}
          alt="Bg"
          className="h-[20vh] md:h-[45vh] object-cover object-center"
        />
      </div>
      <div className="absolute z-10 bg-white w-[85vw] md:w-[70vw] h-[85vh] md:h-[60vh] flex flex-col items-center rounded-lg bottom-0 left-1/2 -translate-x-1/2 shadow-xl shadow-gray-500">
        <div className="flex items-start justify-between p-2 md:p-4 w-full">
          <div className="flex items-center">
            <AiOutlineEye
              className="ml-2 text-3xl cursor-pointer"
              onClick={(e) => {
                history.push(`/trubuddies/${mindmate?._id}`);
              }}
            />
          </div>
          <div className="-mt-10 md:-mt-20 md:ml-[5vw] flex flex-col items-center">
            <Image
              src={mindmate?.profile}
              width={10000}
              height={10000}
              alt="Profile"
              className="w-[34vw] md:w-[12vw] h-[34vw] md:h-[12vw] object-cover object-center rounded-lg"
            />
            <h1 className="text-lg text-center md:text-2xl mt-0.5 font-medium">
              {mindmate?.name} ({mindmate?.anonymous})
            </h1>
            <p className="bg-black text-white text-sm md:text-base px-5 mt-0.5 py-0.5 rounded-lg">
              @uid{mindmate?._id?.slice(mindmate?._id?.length - 4)}
            </p>
            <div className="w-full bg-gray-300 my-2 h-[1px]"></div>
          </div>
          <div>
            <button
              onClick={(e) => {
                setShowEdit(!showEdit);
              }}
              className="text-white bg-gradient-to-r from-lightGreen to-darkGreen px-5 py-1 rounded-md font-medium"
            >
              Edit Profile
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          {[
            {
              title: "Name",
              value: mindmate?.name,
            },
            {
              title: "Email",
              value: mindmate?.email,
            },
            {
              title: "City",
              value: mindmate?.city,
            },
            {
              title: "State",
              value: mindmate?.state,
            },
            {
              title: "Expertise",
              value: mindmate?.expertise,
            },
            {
              title: "Availability",
              value: mindmate?.availability,
            },
          ].map((e) => {
            return (
              <div
                key={e?.title}
                className="font-medium mb-3 md:mb-5 flex items-center justify-between w-11/12 md:w-9/12 mx-auto"
              >
                {e?.title} :
                <span className="bg-[#CCECFF] px-4 py-0.5 text-start w-[60%] md:w-8/12 break-words rounded-md border">
                  {e?.value}
                </span>
              </div>
            );
          })}
        </div>
        <div className="w-3/12 -ml-14 bg-gray-300 my-2 h-[1.5px]"></div>
        <div className="md:w-[80%] mx-[2vw] md:mx-auto grid grid-cols-3 md:gap-y-0 gap-y-2 md:flex items-center mt-2 justify-center">
          {mindmate?.buddies?.length !== 0 ? (
            <>
              {mindmate?.buddies?.slice(0, 5).map((e) => {
                return <BuddyBlock id={e} key={e} />;
              })}
              <p
                className="text-center underline md:hidden"
                onClick={(e) => {
                  history.push("/mindmate/buddies");
                }}
              >
                View All
              </p>
            </>
          ) : (
            <div className="w-full flex items-center h-[20vh] justify-center">
              <p className="text-xl">Sorry, You don&apos;t have any Buddy</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const BuddyBlock = ({ id }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .post(`${BASE_URL}/login/get-one/${id}`, {
        token: getCookie("token"),
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="md:w-[15%] w-10/12 flex flex-col items-center justify-center md:mx-0 mx-auto cursor-pointer">
      <Image
        src={user?.profile}
        width={10000}
        height={10000}
        alt="Profile"
        className="rounded-full border border-newBlue md:w-[7vw] h-[23vw] w-full md:h-[7vw] object-cover object-center"
      />
      <div className="md:block hidden text-center text-sm border-newBlue px-4 rounded-full mt-2">
        {user?.anonymous ? user?.anonymous : user?.name}
      </div>
    </div>
  );
};

export default Trubuddy;
