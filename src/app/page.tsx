"use client";

import moment from "moment";
import { useSearchParams } from "next/navigation";
import Calendar from "@/components/Calendar";
import DateContextProvider from "@/provider/DateContextProvider";
import { getDateByKey } from "@/utils/getKeyByDate";
import DiaryContent from "@/components/DiaryContent";

export default function Home() {
  const searchParams = useSearchParams();
  const key = searchParams.get("key") ?? moment(new Date()).format("YYYYMMDD");

  return (
    <DateContextProvider defaultDate={getDateByKey(key)}>
      <div className="border-b pb-4">
        <Calendar />
      </div>
      <DiaryContent />
    </DateContextProvider>
  );
}
