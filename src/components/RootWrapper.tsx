"use client";

import { ReactNode } from "react";
import { RecoilRoot } from "recoil";
import DateContextProvider from "@/provider/DateContextProvider";

interface IProps {
  children: ReactNode;
}

export default function RootWrapper({ children }: IProps): JSX.Element {
  return (
    <RecoilRoot>
      <DateContextProvider>{children}</DateContextProvider>
    </RecoilRoot>
  );
}
