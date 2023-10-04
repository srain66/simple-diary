"use client";

import { reenieBeanie } from "@/utils/font";
import Link from "next/link";
import { useState } from "react";
import { IoSettingsOutline as _, IoSettings } from "react-icons/io5";

interface IProps {}

export default function Header({}: IProps): JSX.Element {
  const [_hover, setHover] = useState<boolean>(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <header className="w-full h-12 flex justify-start items-center p-4 relative border-b">
      <Link href="/">
        <h1
          className={`${reenieBeanie.className} text-3xl text-white bg-blue-700 py-1 px-3`}
          style={{ transform: "translate(-20%, 0) rotate(-12deg)" }}
        >
          Simple Diary
        </h1>
      </Link>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute top-0 right-0 w-12 h-12 flex justify-center items-center text-xl text-gray-300"
        disabled
      >
        <IoSettings />
        {/* TODO: Delete all diaries */}
        {/* {hover ? <IoSettings /> : <IoSettingsOutline />} */}
      </button>
    </header>
  );
}
