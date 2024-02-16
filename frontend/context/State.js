"use client";
import CryptoJS from "crypto-js";
import Context from "./Context";

const State = (props) => {
  const dcrpyt = (text) => {
    var bytes = CryptoJS.AES.decrypt(text, "MINDMATES");
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  };

  return (
    <Context.Provider value={{ dcrpyt }}>{props.children}</Context.Provider>
  );
};

export default State;
