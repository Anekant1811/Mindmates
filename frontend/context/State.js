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
  const [allMindmates, setAllMindmates] = useState();
  const [clickedUser, setClickedUser] = useState({});
  const [queries, setQueries] = useState([]);
  const [width, setWidth] = useState();
  const [posts, setPosts] = useState([]);
  const [showConsent, setShowConsent] = useState(false);
  const [questionnaire, setQuestionnaire] = useState({
    age: "",
    problem: "",
    answers: [],
    backendAnswers: [],
  });

  let getMessages = (id, buddy) => {
    if (id) {
      axios
        .get(
          `${SOCKET_URL}api/get-messages/${id}/${
            buddy ? clickedUser?._id : mindmate?._id
          }`
        )
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

  const getMindmates = async () => {
    axios.get(`${BASE_URL}/mindmate/get-all`).then((res) => {
      setAllMindmates(res.data);
    });
  };

  const getQueries = async () => {
    if (user?._id) {
      axios
        .post(`${BASE_URL}/meeting/get-mate/${user?._id}`)
        .then((res) => {
          setQueries(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const getPosts = async () => {
    axios
      .get(`${BASE_URL}/posts/get-all`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMindmates();
    getUser();
    getPosts();
    if (typeof window != undefined) {
      setWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    getQueries();
  }, [user]);

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
        width,
        setMindmate,
        showLogin,
        setShowLogin,
        getMessages,
        messages,
        getUser,
        user,
        questionnaire,
        setQuestionnaire,
        clickedUser,
        setClickedUser,
        allMindmates,
        queries,
        posts,
        getPosts,
        showConsent,
        getQueries,
        setShowConsent,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default State;
