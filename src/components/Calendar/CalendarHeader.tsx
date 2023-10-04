import moment from "moment";
import { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ArrowButton from "./ArrowButton";

export default function CalendarHeader({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: ReactDatePickerCustomHeaderProps): JSX.Element {
  return (
    <div className="py-4 px-8 flex flex-col items-center">
      <div className="text-4xl">{moment(date).format("YYYY")}</div>
      <div className="flex gap-4 justify-center items-center">
        <ArrowButton onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
          <FaAngleLeft />
        </ArrowButton>
        <div className="text-center text-lg" style={{ minWidth: "120px" }}>
          {moment(date).format("MMMM").toUpperCase()}
        </div>
        <ArrowButton onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
          <FaAngleRight />
        </ArrowButton>
      </div>
    </div>
  );
}
