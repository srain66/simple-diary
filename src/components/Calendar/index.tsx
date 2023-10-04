"use client";

import "@/styles/Calendar.scss";

import { ko } from "date-fns/esm/locale";
import { Suspense } from "react";
import DatePicker, { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import { useDateDispatch, useDateState } from "@/hooks/useDate";
import { righteous } from "@/utils/font";
import formatWeek from "@/utils/formatWeek";
import CalendarHeader from "./CalendarHeader";
import CalendarDay from "./CalendarDay";

export default function Calendar(): JSX.Element {
  const { currentDate } = useDateState();
  const { setCurrentDate } = useDateDispatch();

  const handleSelect = (date: Date) => setCurrentDate(date);

  return (
    <Suspense fallback={null}>
      <div className={`${righteous.className} border-b pb-4`}>
        <DatePicker
          locale={ko}
          selected={currentDate}
          onSelect={handleSelect}
          onChange={handleSelect}
          formatWeekDay={(name: string) => formatWeek(name)}
          renderCustomHeader={(props: ReactDatePickerCustomHeaderProps) => (
            <CalendarHeader {...props} />
          )}
          renderDayContents={(day: number, date: Date) => (
            <CalendarDay day={day} date={date} />
          )}
          renderMonthContent={() => <>month</>}
          inline
        />
      </div>
    </Suspense>
  );
}
