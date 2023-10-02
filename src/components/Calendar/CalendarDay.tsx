"use client";

import { diarySelector } from "@/store/diary";
import { Diary } from "@/types/diary";
import { getKeyByDate } from "@/utils/getKeyByDate";
import { Karla } from "next/font/google";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import cls from "classnames";

interface IProps {
  day: number;
  date: Date;
}

const karla = Karla({ weight: ["400"], subsets: ["latin"] });

export default function CalendarDay({ day, date }: IProps): JSX.Element {
  const diary = useRecoilValue<Diary>(diarySelector(getKeyByDate(date)));
  const [isWritten, setIsWritten] = useState<boolean>(false);
  useEffect(() => {
    setIsWritten(!!diary);
  }, [diary]);

  return (
    <p
      className={cls(
        `${karla.className} w-full h-full rounded-full border-blue-500 flex justify-center items-center`,
        isWritten ? "border" : ""
      )}
    >
      {day}
    </p>
  );
}
