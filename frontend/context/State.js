"use client";
import CryptoJS from "crypto-js";
import Context from "./Context";
import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL, { SOCKET_URL, URL } from "../app/url";

const State = (props) => {
  const [user, setUser] = useState();
  const [showLogin, setShowLogin] = useState(false);
  const [mindmate, setMindmate] = useState();
  const [messages, setMessages] = useState([]);
  const [questionnaire, setQuestionnaire] = useState({
    age: "",
    problem: "",
    answers: [],
    backendAnswers: [],
  });

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
  const getUser = async () => {
    try {
      const response = await axios.get(`${URL}login/sucess`, {
        withCredentials: true,
      });
      setUser(response.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

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
        getUser,
        user,
        questionnaire,
        setQuestionnaire,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
