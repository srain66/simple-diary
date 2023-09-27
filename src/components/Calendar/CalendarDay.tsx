import { Karla } from "next/font/google";

interface IProps {
  day: number;
}

const karla = Karla({ weight: ["400"], subsets: ["latin"] });

export default function CalendarDay({ day }: IProps): JSX.Element {
  return <p className={`${karla.className}`}>{day}</p>;
}
