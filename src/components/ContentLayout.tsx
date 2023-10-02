"use client";

import { ReactNode } from "react";
import Header from "./Header";

interface IProps {
  children: ReactNode;
}

export default function ContentLayout({ children }: IProps) {
  return (
    <main className="min-h-screen w-full max-w-lg my-0 mx-auto">
      <Header />
      <div>{children}</div>
    </main>
  );
}
