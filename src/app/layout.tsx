import ContentLayout from "@/components/ContentLayout";
import "./globals.css";
import type { Metadata } from "next";
import RootWrapper from "@/components/RootWrapper";
import { ibmPlexSansKr } from "@/utils/font";

export const metadata: Metadata = {
  title: "Simple Diary",
  description: "Write about your today",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={ibmPlexSansKr.className}>
        <RootWrapper>
          <ContentLayout>{children}</ContentLayout>
        </RootWrapper>
      </body>
    </html>
  );
}
