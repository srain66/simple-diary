"use client";

import { ko } from "date-fns/esm/locale";
import DatePicker, { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import { useDateDispatch, useDateState } from "@/hooks/useDate";
import CalendarHeader from "./CalendarHeader";
import CalendarDay from "./CalendarDay";
import "./Calendar.scss";
import formatWeek from "@/utils/formatWeek";

interface IProps {}

export default function Calendar({}: IProps) {
  const { currentDate } = useDateState();
  const { setCurrentDate } = useDateDispatch();
  const handleSelect = (date: Date) => setCurrentDate(date);

  return (
    <DatePicker
      locale={ko}
      selected={currentDate}
      onSelect={handleSelect}
      onChange={handleSelect}
      formatWeekDay={(name: string) => formatWeek(name).substring(0, 3)}
      renderCustomHeader={(props: ReactDatePickerCustomHeaderProps) => (
        <CalendarHeader {...props} />
      )}
      renderDayContents={(day: number, date: Date) => (
        <CalendarDay day={day} date={date} />
      )}
      inline
    />
  );
}
