"use client";
import CryptoJS from "crypto-js";
import Context from "./Context";
import { useState } from "react";

const State = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const [mindmate, setMindmate] = useState();

  const dcrpyt = (text) => {
    var bytes = CryptoJS.AES.decrypt(text, "MINDMATES");
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  };

  return (
    <Context.Provider
      value={{ dcrpyt, mindmate, setMindmate, showLogin, setShowLogin }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
