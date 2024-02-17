import React from "react";
import UserMenu from "../components/common/user-menu";

export default function UserLayout({ children }) {
  return (
    <div className="flex bg-background">
      <UserMenu></UserMenu>
      <main className="sm:w-[75vw]">{children}</main>
    </div>
  );
}
