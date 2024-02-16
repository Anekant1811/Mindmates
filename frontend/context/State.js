"use client";
import CryptoJS from "crypto-js";
import Context from "./Context";
import { useState } from "react";
import axios from "axios";
import BASE_URL, { SOCKET_URL } from "../app/url";
import { getCookie } from "cookies-next";

const State = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const [mindmate, setMindmate] = useState();
  const [messages, setMessages] = useState([]);

  let getMessages = (id) => {
    if (id && mindmate?._id) {
      axios
        .get(`${SOCKET_URL}api/get-messages/${id}/${mindmate?._id}`)
        .then((res) => {
          setMessages(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const dcrpyt = (text) => {
    var bytes = CryptoJS.AES.decrypt(text, "MINDMATES");
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  };

  return (
    <Context.Provider
      value={{
        dcrpyt,
        mindmate,
        setMindmate,
        showLogin,
        setShowLogin,
        getMessages,
        messages,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
