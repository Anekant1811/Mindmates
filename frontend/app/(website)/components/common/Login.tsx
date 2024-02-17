"use client";
import React, { useContext } from "react";
import Modal from "react-modal";
import { Toaster } from "react-hot-toast";
import Context from "../../../../context/Context";
import Image from "next/image";
import BASE_URL, { URL } from "../../../url/index";

const customStyles = {
  overlay: {
    zIndex: 1001, // Adjust the value as needed
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "1.5rem",
  },
};

const Login = () => {
  const { showLogin, setShowLogin } = useContext(Context);

  return (
    <div className={""}>
      <Toaster />
      <Modal
        isOpen={showLogin}
        onRequestClose={() => {
          setShowLogin(false);
        }}
        style={customStyles}
      >
        <div>
          <Image
            src={"/logos/logo.svg"}
            alt="Google login"
            width={1000}
            height={1000}
            className="w-full h-full rounded-md"
          />
          <div
            onClick={(e) => {
              window.open(`${URL}auth/google/callback`, "_self");
            }}
            className="cursor-pointer border border-lightGreen rounded-md"
          >
            {" "}
            <Image
              src={"/images/sign-in-with-google.png"}
              alt="Google login"
              width={200}
              height={200}
              className="w-auto h-auto rounded-md"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
