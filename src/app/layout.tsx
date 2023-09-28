import ContentLayout from "@/components/ContentLayout";
import "./globals.css";
import type { Metadata } from "next";
import { Orbit } from "next/font/google";

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
        <ContentLayout>{children}</ContentLayout>
      </body>
    </html>
  );
}
