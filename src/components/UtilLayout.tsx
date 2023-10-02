"use client";

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";

interface IProps {
  children: ReactNode;
}

export default function UtilLayout({ children }: IProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
