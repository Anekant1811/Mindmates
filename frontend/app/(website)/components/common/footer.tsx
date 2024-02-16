import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
export default function Footer() {
  return (
    <footer className="pt-16 pb-4 px-6 sm:px-12 bg-background">
      <div className="flex flex-wrap lg:flex-nowrap mx-auto justify-evenly gap-8 text-center max-w-[100rem]">
        <div className="sm:w-1/4">
          <Image
            src="/logos/logo.svg"
            alt="logo"
            height={100}
            width={100}
            className="w-auto h-auto"
          />
          <p className="text-lightGray text-xs py-4">
            You&apos;ve reached the end, but it&apos;s not the end! Remember,
            you&apos;re not alone. Reach out, seek support, and prioritize your
            mental well-being.
          </p>
        </div>
        <div className="sm:w-1/4">
          <ul className="font-semibold text-xl space-y-2 footer">
            Services
            <li className="text-xs pt-4">Psychotherapy</li>
            <li className="text-xs">Mental Counseling</li>
            <li className="text-xs">Support Groups</li>
            <li className="text-xs">Case Management</li>
          </ul>
        </div>
        <div className="sm:w-1/4">
          <ul className="font-semibold text-xl space-y-3 footer">
            Contact
            <li className="text-xs flex gap-4 pt-4 justify-center">
              <FaPhoneAlt /> +14 5464 8272
            </li>
            <li className="text-xs flex gap-4 justify-center">
              <MdEmail /> Mental Counseling
            </li>
            <li className="text-xs flex gap-4 justify-center">
              <IoLocationSharp />
              Support Groups
            </li>
            {/* <li className="text-xs">Case Management</li> */}
          </ul>
        </div>
        <div className="w-1/4">
          <ul className="font-semibold text-xl space-y-2 footer flex flex-col justify-center">
            Links
            <li className="text-xs mt-4">Privacy Policy</li>
            <li className="text-xs">Terms of use</li>
          </ul>
        </div>
      </div>

      <div className="h-[2px] max-w-[100rem] bg-darkGreen my-8 mx-auto"></div>
      <div className="text-sm text-center   ">
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
