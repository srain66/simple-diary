"use client";

import { ReactNode, useEffect } from "react";
import Header from "./Header";
import { useSetRecoilState } from "recoil";
import { diariesState } from "@/store/diary";
import LocalStorage from "@/utils/localStorage";

interface IProps {
  children: ReactNode;
}

export default function ContentLayout({ children }: IProps) {
  const setDiaries = useSetRecoilState(diariesState);

  useEffect(() => {
    const localDiaries = LocalStorage.getItem("diaries");
    if (localDiaries) {
      setDiaries(JSON.parse(localDiaries));
    }
  });

  return (
    <main className="min-h-screen w-full max-w-lg my-0 mx-auto">
      <Header />
      <div>{children}</div>
    </main>
  );
}
