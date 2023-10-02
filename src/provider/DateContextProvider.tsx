"use client";

import { DateDispatchContext, DateStateContext } from "@/contexts/dateContext";
import { ReactNode, useState } from "react";

interface IProps {
  children: ReactNode;
  defaultDate: Date;
}

export default function DateContextProvider({ children, defaultDate }: IProps) {
  const [currentDate, setCurrentDate] = useState<Date>(defaultDate);

  const stateValue = { currentDate };
  const dispatchValue = { setCurrentDate };

  return (
    <DateStateContext.Provider value={stateValue}>
      <DateDispatchContext.Provider value={dispatchValue}>
        {children}
      </DateDispatchContext.Provider>
    </DateStateContext.Provider>
  );
}
