"use client";

import DiaryForm from "@/components/DiaryForm";
import { Diary } from "@/types/diary";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function Write() {
  const searchParams = useSearchParams();
  const key = searchParams.get("key") ?? moment(new Date()).format("YYYYMMDD");
  const [diary, setDiary] = useState<Diary>(null!);

  useEffect(() => {
    const diaries: Diary[] = JSON.parse(
      localStorage.getItem("diaries") ?? "[]"
    );

    const currentDiary: Diary = diaries.find(
      (item: Diary) => item.key === key
    ) ?? {
      key,
      text: "",
    };

    setDiary(currentDiary);
  }, [key]);

  return (
    <div className="p-4">{diary ? <DiaryForm diary={diary} /> : <></>}</div>
  );
}
