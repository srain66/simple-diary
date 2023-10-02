"use client";

import moment from "moment";
import DiaryForm from "@/components/DiaryForm";
import { diarySelector } from "@/store/diary";
import { Diary } from "@/types/diary";
import { getDateByKey } from "@/utils/getKeyByDate";
import { useSearchParams } from "next/navigation";
import { useRecoilValue } from "recoil";

export default function Write() {
  const searchParams = useSearchParams();
  const key = searchParams.get("key") ?? moment(new Date()).format("YYYYMMDD");
  const savedDiary = useRecoilValue(diarySelector(key));

  return (
    <div className="p-4">
      <DiaryForm
        diary={
          savedDiary ??
          ({
            key,
            text: "",
            date: getDateByKey(key),
          } as Diary)
        }
      />
    </div>
  );
}
