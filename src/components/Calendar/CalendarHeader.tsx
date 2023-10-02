import { righteous } from "@/utils/font";
import moment from "moment";
import { ButtonHTMLAttributes } from "react";
import { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function CalendarHeader({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: ReactDatePickerCustomHeaderProps) {
  return (
    <div
      className={`${righteous.className} py-4 px-8 flex flex-col items-center`}
    >
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

const ArrowButton = ({
  children,
  disabled,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
  return (
    <button
      className="w-12 h-8 p-2 flex justify-center items-center rounded hover:bg-gray-100"
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
