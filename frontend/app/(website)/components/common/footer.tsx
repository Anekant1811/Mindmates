import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
export default function Footer() {
  return (
    <footer className="py-12 px-[9vw] bg-background">
      <div className="flex flex-wrap lg:flex-nowrap mx-auto justify-evenly gap-8 text-center max-w-[100rem]">
        <div className="sm:w-1/4">
          <Image
            src="/logos/logo.svg"
            alt="logo"
            height={100}
            width={100}
            className="w-[16vw] -ml-3 h-auto"
          />
          <p className="text-lightGray text-start ml-1 py-4">
            You&apos;ve reached the end, but it&apos;s not the end!
            <br /> Remember, you&apos;re not alone. Reach out, seek support, and
            prioritize your mental well-being.
          </p>
        </div>
        <div className="mt-3 ml-[4vw] flex items-start justify-between w-full">
          <div className="sm:w-1/4">
            <ul className="font-semibold flex flex-col items-start w-fit mx-auto text-2xl space-y-2 footer">
              Services
              <li className="text-base cursor-pointer pt-2">Psychotherapy</li>
              <li className="text-base cursor-pointer">Mental Counseling</li>
              <li className="text-base cursor-pointer">Support Groups</li>
              <li className="text-base cursor-pointer">Case Management</li>
            </ul>
          </div>
          <div className="sm:w-1/4">
            <ul className="font-semibold text-2xl flex flex-col items-start mx-auto space-y-3 footer">
              Contact
              <li className="text-base cursor-pointer items-center flex gap-4 pt-2 justify-center">
                <FaPhoneAlt /> +14 5464 8272
              </li>
              <li className="text-base cursor-pointer items-center flex gap-4 justify-center">
                <MdEmail /> Mental Counseling
              </li>
              <li className="text-base cursor-pointer items-center flex gap-4 justify-center">
                <IoLocationSharp />
                Support Groups
              </li>
              {/* <li className="text-xs">Case Management</li> */}
            </ul>
          </div>
          <div className="w-1/4">
            <ul className="font-semibold text-2xl flex flex-col items-start mx-auto space-y-2 footer">
              Links
              <li className="text-base cursor-pointer mt-2">Privacy Policy</li>
              <li className="text-base cursor-pointer">Terms of use</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[2px] max-w-[100rem] bg-darkGreen mt-4 mb-5 mx-auto"></div>
      <div className="text-center">
        Copyright 2024 @mindmates all Right Reserved
      </div>
      <div className="pt-4">
        <Image
          src="/images/footer-logos.svg"
          alt="card"
          height={100}
          width={100}
          className="h-auto w-auto mx-auto cursor-pointer"
        />
      </div>
    </footer>
  );
}
