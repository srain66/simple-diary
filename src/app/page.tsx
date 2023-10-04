"use client";

import Calendar from "@/components/Calendar";
import DiaryContent from "@/components/DiaryContent";

export default function Home(): JSX.Element {
  return (
    <>
      <Calendar />
      <DiaryContent />
    </>
  );
}
