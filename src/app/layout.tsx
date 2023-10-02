import ContentLayout from "@/components/ContentLayout";
import "./globals.css";
import type { Metadata } from "next";
import { Orbit } from "next/font/google";
import UtilLayout from "@/components/UtilLayout";

const orbit = Orbit({ weight: ["400"], subsets: ["latin"] });

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
      <body className={orbit.className}>
        <UtilLayout>
          <ContentLayout>{children}</ContentLayout>
        </UtilLayout>
      </body>
    </html>
  );
}
