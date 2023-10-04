"use client";

import { useRecoilValue } from "recoil";
import DiaryForm from "@/components/DiaryForm";
import { useDateState } from "@/hooks/useDate";
import { diarySelector } from "@/store/diary";
import { Diary } from "@/types/diary";

export default function Write(): JSX.Element {
  const { currentDate, currentKey } = useDateState();
  const savedDiary = useRecoilValue(diarySelector(currentKey));

  return (
    <div className="p-4">
      <DiaryForm
        diary={
          savedDiary ??
          ({
            key: currentKey,
            text: "",
            date: currentDate,
          } as Diary)
        }
      />
    </div>
  );
}
