"use client";

import cls from "classnames";
import { useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import { diarySelector } from "@/store/diary";
import { karla } from "@/utils/font";
import { getKeyByDate } from "@/utils/getKeyByDate";

interface IProps {
  day: number;
  date: Date;
}

export default function CalendarDay({ day, date }: IProps): JSX.Element {
  const key = useMemo<string>(() => getKeyByDate(date), [date]);
  const diary = useRecoilValue(diarySelector(key));
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <p
      className={cls(
        `${karla.className} w-full h-full rounded-full border-blue-500 flex justify-center items-center transition-opacity`,
        loading && "opacity-70",
        !loading && diary ? "border" : ""
      )}
    >
      {day}
    </p>
  );
}
