import "./globals.css";
import "../styles/Calendar.scss";
import type { Metadata } from "next";
import { ReactNode } from "react";
import ContentLayout from "@/components/ContentLayout";
import RootWrapper from "@/components/RootWrapper";
import { hahmlet } from "@/utils/font";

export const metadata: Metadata = {
  title: "Simple Diary",
  description: "Write about your today",
};

interface IProps {
  children: ReactNode;
}

export default function RootLayout({ children }: IProps): JSX.Element {
  return (
    <html lang="ko">
      <body className={hahmlet.className}>
        <RootWrapper>
          <ContentLayout>{children}</ContentLayout>
        </RootWrapper>
      </body>
    </html>
  );
}
