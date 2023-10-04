import { Dispatch, SetStateAction, createContext } from "react";

export type DateState = {
  currentDate: Date;
  currentKey: string;
};

export type DateDispatch = {
  setCurrentDate: Dispatch<SetStateAction<Date>>;
};

export const DateStateContext = createContext<DateState>({
  currentDate: null!,
  currentKey: null!,
});

export const DateDispatchContext = createContext<DateDispatch>({
  setCurrentDate: () => {},
});
