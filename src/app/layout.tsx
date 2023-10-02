import ContentLayout from "@/components/ContentLayout";
import "./globals.css";
import type { Metadata } from "next";
import { Gowun_Dodum } from "next/font/google";
import UtilLayout from "@/components/UtilLayout";

const gowunDodum = Gowun_Dodum({ weight: ["400"], subsets: ["latin"] });

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
    <html lang="en">
      <body className={gowunDodum.className}>
        <UtilLayout>
          <ContentLayout>{children}</ContentLayout>
        </UtilLayout>
      </body>
    </html>
  );
}
