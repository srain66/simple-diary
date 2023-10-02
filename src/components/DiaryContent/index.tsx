"use client";

import { useDateState } from "@/hooks/useDate";
import { diarySelector } from "@/store/diary";
import { getKeyByDate } from "@/utils/getKeyByDate";
import { useRecoilValue, useResetRecoilState } from "recoil";
import NoDiary from "./NoDiary";
import { useEffect, useState } from "react";
import { Diary } from "@/types/diary";
import moment from "moment";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import ToolButton from "./ToolButton";
import { useRouter } from "next/navigation";

interface IProps {}

export default function DiaryContent({}: IProps) {
  const router = useRouter();
  const { currentDate } = useDateState();
  const diary = useRecoilValue<Diary>(diarySelector(getKeyByDate(currentDate)));
  const deleteDiary = useResetRecoilState(
    diarySelector(getKeyByDate(currentDate))
  );

  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleEdit = () => {
    router.push(`/write?key=${getKeyByDate(currentDate)}`);
  };

  const handleDelete = () => {
    const isConfirmed = confirm("삭제하시겠습니까?");
    if (isConfirmed) {
      deleteDiary();
    }
  };

  if (isLoading) return <></>;

  return (
    <>
      {diary ? (
        <div className="w-full p-4">
          <div className="w-full flex mb-4 items-center font-bold">
            <h3>{moment(diary.date).format("M/D")}</h3>
            <div className="flex-none ml-auto flex items-center gap-2">
              <ToolButton
                onClick={handleEdit}
                className="bg-gray-500 text-white"
              >
                <BiEditAlt />
              </ToolButton>
              <ToolButton
                onClick={handleDelete}
                className="bg-red-500 text-white"
              >
                <BiTrash />
              </ToolButton>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <pre>{diary.text}</pre>
          </div>
        </div>
      ) : (
        <NoDiary />
      )}
    </>
  );
}
