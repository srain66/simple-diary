"use client";

import { DateDispatchContext, DateStateContext } from "@/contexts/dateContext";
import { getKeyByDate } from "@/utils/getKeyByDate";
import { ReactNode, useEffect, useMemo, useState } from "react";

interface IProps {
  children?: ReactNode;
}

export default function DateContextProvider({ children }: IProps) {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const currentKey = useMemo<string>(
    () => getKeyByDate(currentDate),
    [currentDate]
  );

  const stateValue = { currentDate, currentKey };
  const dispatchValue = { setCurrentDate };

  return (
    <DateStateContext.Provider value={stateValue}>
      <DateDispatchContext.Provider value={dispatchValue}>
        {children}
      </DateDispatchContext.Provider>
    </DateStateContext.Provider>
  );
}
