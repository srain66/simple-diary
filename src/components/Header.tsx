"use client";

import { Dancing_Script } from "next/font/google";
import { useState } from "react";
import { IoSettingsOutline, IoSettings } from "react-icons/io5";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

interface IProps {}

export default function Header({}: IProps) {
  const [hover, setHover] = useState<boolean>(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <header className="w-full h-12 flex justify-center items-center p-4 relative border-b">
      <h1 className={`${dancingScript.className} text-2xl align-center`}>
        Simple Diary
      </h1>
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute top-0 right-0 w-12 h-12 flex justify-center items-center text-xl"
      >
        {hover ? <IoSettings /> : <IoSettingsOutline />}
      </button>
    </header>
  );
}
