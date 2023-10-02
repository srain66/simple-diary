import { useDateState } from "@/hooks/useDate";
import { getKeyByDate } from "@/utils/getKeyByDate";
import Link from "next/link";
import { useMemo } from "react";
import { FaPen } from "react-icons/fa";

export default function WriteButton() {
  const { currentDate } = useDateState();
  const key = useMemo(() => getKeyByDate(currentDate), [currentDate]);

  return (
    <Link
      href={{
        pathname: "write",
        query: { key },
      }}
      className="w-10 h-10 bg-blue-700 rounded-full flex justify-center items-center text-md text-white"
    >
      <FaPen />
    </Link>
  );
}
