import { Dispatch, SetStateAction, createContext } from "react";

export type DateState = {
  currentDate: Date;
};

export type DateDispatch = {
  setCurrentDate: Dispatch<SetStateAction<Date>>;
};

export const DateStateContext = createContext<DateState>({
  currentDate: null!,
});

export const DateDispatchContext = createContext<DateDispatch>({
  setCurrentDate: () => {},
});
