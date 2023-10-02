"use client";

import { useDateState } from "@/hooks/useDate";
import WriteButton from "./WriteButton";
import moment from "moment";

interface IProps {}

export default function NoDiary({}: IProps) {
  const { currentDate } = useDateState();

  return (
    <div
      className="w-full p-4 flex gap-4 justify-center items-center"
      style={{ minHeight: "10rem" }}
    >
      <p className="w-auto">{`${moment(currentDate).format(
        "M월 D일"
      )}에 무슨 일이 있었나요?`}</p>
      <WriteButton />
    </div>
  );
}
