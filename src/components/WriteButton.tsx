import Link from "next/link";
import { FaPen } from "react-icons/fa";

export default function WriteButton() {
  return (
    <Link
      href="/write"
      className="w-10 h-10 bg-blue-700 rounded-full flex justify-center items-center text-md text-white"
    >
      <FaPen />
    </Link>
  );
}
