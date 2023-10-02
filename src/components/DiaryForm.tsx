"use client";

import { Diary } from "@/types/diary";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { diarySelector } from "@/store/diary";
import cls from "classnames";
import { righteous } from "@/utils/font";

interface IProps {
  diary: Diary;
}

export default function DiaryForm({ diary }: IProps) {
  const router = useRouter();
  const [text, setText] = useState<string>(diary.text);
  const setDiary = useSetRecoilState(diarySelector(diary.key));
  const [active, setActive] = useState<boolean>(false);

  const handleChange = (value: string) => setText(value);

  const handleClick = () => {
    const newDiary = {
      ...diary,
      text,
    };

    setDiary(newDiary);
    router.push(`/?key=${diary.key}`);
  };

  useEffect(() => {
    setActive(text ? true : false);
  }, [text]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center">
        <h3 className={`${righteous.className} text-3xl`}>{diary.key}</h3>
        <button
          className={cls(
            "flex-none ml-auto p-2 rounded text-white flex justify-center items-center",
            active ? "bg-blue-500 hover:bg-blue-500" : "bg-gray-300"
          )}
          onClick={handleClick}
          disabled={!active}
        >
          저장
        </button>
      </div>
      <textarea
        className="w-full p-2 border border-gray-300 resize-none rounded"
        style={{ minHeight: "calc(100vh - 10rem)" }}
        placeholder="무슨 일이 있었나요?"
        autoComplete="off"
        autoFocus
        value={text}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          handleChange(e.target.value)
        }
      />
    </div>
  );
}
