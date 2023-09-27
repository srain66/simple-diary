"use client";

import { DateDispatchContext, DateStateContext } from "@/contexts/dateContext";
import { ReactNode, useEffect, useState } from "react";

interface IProps {
  children: ReactNode;
}

export default function DateContextProvider({ children }: IProps) {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

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
