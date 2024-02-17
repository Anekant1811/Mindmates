"use client";
import React, { useEffect, useState, useContext, useRef } from "react";
import MenotrCard from "../components/mentors/mentor-card";
import Image from "next/image";
import Context from "../../../context/Context";
import { io } from "socket.io-client";
import { IoMdSend } from "react-icons/io";
import BASE_URL, { SOCKET_URL } from "../../url";
import { useRouter } from "next/navigation";
import axios from "axios";
import { format } from "timeago.js";
import Meeting from "./meeting";

const Page = () => {
  const [activeCard, setActiveCard] = useState(2);
  const mentorCardsData = [
    {
      id: 1,
      avatarUrl: "/images/doctor-avatar.svg",
      title: "Your Well-Wisher",
      category: ["Depression", "Phychology"],
      desc: "You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered.",
    },
    {
      id: 2,
      avatarUrl: "/images/doctor-avatar.svg",
      title: "Your Well-Wisher",
      category: ["Depression", "Phychology"],
      desc: "You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered.",
    },
    {
      id: 3,
      avatarUrl: "/images/doctor-avatar.svg",
      title: "Your Well-Wisher",
      category: ["Depression", "Phychology"],
      desc: "You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered.",
    },
  ];
  const context = useContext(Context);
  const id = context?.clickedUser?._id;
  const { user, setShowLogin, clickedUser, allMindmates } = useContext(Context);
  const socket = io(SOCKET_URL);
  const history = useRouter();
  const chatContainerRef = useRef();
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  // Scrolling on new message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [context?.messages, messages]);

  // Connecting it with socket server
  useEffect(() => {
    if (user?._id) {
      socket.emit("connection");
      socket.emit("join", { userId: user?._id });
    }
  }, [user]);

  useEffect(() => {
    // axios
    //   .post(`${SOCKET_URL}api/seen/${id}`, {
    //     token: getCookie("token"),
    //   })
    //   .then((res) => {})
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, [context?.messages, messages]);

  useEffect(() => {
    if (!user?._id) {
      history.push("/");
      setShowLogin(true);
    }
  }, [user]);

  // On one to one chat message submission
  const handleMessageSubmit = (e) => {
    if (messageInput.trim() === "") {
      return;
    }
    //send message to the server
    if (context?.clickedUser?._id && messageInput && user?._id) {
      setMessageInput("");
      socket.emit("message", {
        from: user?._id,
        message: messageInput,
        to: context?.clickedUser?._id,
      });
    } else {
      alert("Internal server error");
    }
  };

  // Getting all old one to one chat messages
  useEffect(() => {
    console.log(user);
    if (user?._id) {
      context.getMessages(user?._id, true);
    }
  }, [user, context?.clickedUser]);

  // On message
  useEffect(() => {
    socket.on("message", (saveMessage) => {
      setMessages((prevMessage) => [...prevMessage, saveMessage]);
    });
    return () => {
      socket.off("message");
    };
  }, [messages]);
  const [show, setShow] = useState(false);

  return (
    <div className="w-full h-[85vh] bg-background border-b border-gray px-7 py-6 flex items-start justify-between">
      <Meeting show={show} setShow={setShow} />
      <div className="w-[68%] h-full rounded-2xl shadow-gray shadow-sm flex flex-col">
        <div className="bg-greenish h-[12%] rounded-t-2xl w-full flex items-center justify-between px-4 py-3">
          <div className="flex gap-5 text-white items-center">
            <Image
              src={clickedUser?.profile}
              height={100}
              width={100}
              alt="user-profile"
              className="w-[4vw] h-[4vw] object-cover rounded-[100%]"
            />
            <div className="-ml-2">
              <h3 className="text-lg font-semibold">
                {clickedUser?.anonymous}
              </h3>
              <p className="text-sm">The Mate You Need the most</p>
            </div>
          </div>
          {clickedUser?.meeting_url && (
            <Image
              src="/logos/duo.svg"
              onClick={(e) => {
                setShow(!show);
              }}
              height={100}
              width={100}
              alt="user-profile"
              className="w-[3vw] h-[3vw] rounded-[100%] cursor-pointer"
            />
          )}
        </div>
        <div className="mx-3 mt-auto h-[88%] pb-3 flex flex-col items-center mb-3">
          <div className="h-[90%] mx-auto w-full">
            <div
              ref={chatContainerRef}
              className="pt-3 w-full overflow-y-auto px-[1vw] h-full"
            >
              {context?.messages
                ?.filter((e) => {
                  return (
                    (e.sender === context?.clickedUser?._id &&
                      e.receiver === user?._id) ||
                    (e.receiver === context?.clickedUser?._id &&
                      e.sender === user?._id)
                  );
                })
                ?.map((e, i) => {
                  return (
                    <ChatBlock key={i} data={e} me={user?._id == e?.sender} />
                  );
                })}
              {messages
                ?.filter((e) => {
                  return (
                    (e.sender === context?.clickedUser?._id &&
                      e.receiver === user?._id) ||
                    (e.receiver === context?.clickedUser?._id &&
                      e.sender === user?._id)
                  );
                })
                .map((e, i) => {
                  return (
                    <ChatBlock key={i} data={e} me={user?._id == e?.sender} />
                  );
                })}
            </div>
          </div>
          <div className="h-[10%] flex items-center justify-center w-full">
            <div className="flex items-center w-full h-[98%] md:h-[90%] px-3 md:px-2">
              <input
                type="text"
                value={messageInput}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    handleMessageSubmit();
                    setMessageInput("");
                  }
                }}
                onChange={(e) => {
                  setMessageInput(e.target.value);
                }}
                placeholder="Type Your Message Here"
                className="border-[3px] w-[85%] md:w-[95%] h-full px-4 rounded-s-lg md:rounded-s-2xl border-greenish text-greenish md:text-base text-sm outline-none"
              />
              <div
                onClick={(e) => {
                  handleMessageSubmit();
                  setMessageInput("");
                }}
                className="bg-greenish w-[15%] md:w-[5%] cursor-pointer h-full rounded-e-lg md:rounded-e-2xl flex items-center justify-center"
              >
                <IoMdSend className="text-white" size={33} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30%] h-full rounded-2xl shadow-gray shadow-sm">
        <div className="bg-greenish h-[12%] w-full rounded-t-2xl flex items-center justify-center">
          <h1 className="text-white text-2xl font-semibold">
            Recommanded Mates
          </h1>
        </div>
        <div className="h-[88%] rounded-b-2xl bg-white overflow-y-auto">
          {allMindmates?.map((cardData) => {
            return (
              <MenotrCard
                key={cardData?.id}
                activeCard={activeCard}
                setActiveCard={setActiveCard}
                cardData={cardData}
                bigCard={true}
                data={cardData}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ChatBlock = ({ me, data }) => {
  const { dcrpyt } = useContext(Context);

  return (
    <div className="mb-2 md:mb-4 text-gray">
      <div
        className={`${
          me ? "float-right items-end" : "float-left items-start"
        } flex flex-col`}
      >
        <div
          className={`${
            me
              ? "text-newBlue bg-transparent border-newBlue"
              : "text-white bg-greenish border-white"
          } w-fit px-3 md:px-5 py-0.5 md:py-1 rounded-lg border-2`}
        >
          {dcrpyt(data?.message)}
        </div>
        <p
          className={`text-gray-400 text-xs md:text-sm ${
            me ? "text-end mr-1" : "text-start ml-1"
          }`}
        >
          {format(data?.time)}
        </p>
      </div>
      <div className="clear-both"></div>
    </div>
  );
};

export default Page;
