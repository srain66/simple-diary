import { Diary } from "@/types/diary";
import { Righteous } from "next/font/google";
import { ChangeEvent, useState } from "react";
import cls from "classnames";
import { useRouter } from "next/navigation";

interface IProps {
  diary: Diary;
}
const righteous = Righteous({ weight: ["400"], subsets: ["latin"] });

export default function DiaryForm({ diary }: IProps) {
  const router = useRouter();
  const [text, setText] = useState<string>(diary.text);

  const handleChange = (value: string) => setText(value);

  const handleClick = () => {
    console.log(text);
    router.push("/");
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center">
        <h3 className={`${righteous.className} text-3xl`}>{diary.key}</h3>
        <button
          className={cls(
            "flex-none ml-auto p-2 rounded bg-blue-500 text-white flex justify-center items-center",
            !text && "bg-gray-300"
          )}
          onClick={handleClick}
          disabled={!text}
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
