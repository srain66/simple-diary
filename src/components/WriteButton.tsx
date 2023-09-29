import { useDateState } from "@/hooks/useDate";
import moment from "moment";
import Link from "next/link";
import { FaPen } from "react-icons/fa";

export default function WriteButton() {
  const { currentDate } = useDateState();
  return (
    <Link
      href={{
        pathname: "write",
        query: { key: moment(currentDate).format("YYYYMMDD") },
      }}
      className="w-10 h-10 bg-blue-700 rounded-full flex justify-center items-center text-md text-white"
    >
      <FaPen />
    </Link>
  );
}
