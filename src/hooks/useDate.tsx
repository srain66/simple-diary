import {
  DateDispatch,
  DateDispatchContext,
  DateState,
  DateStateContext,
} from "@/contexts/dateContext";
import { useContext } from "react";

export const useDateState = (): DateState => {
  return useContext<DateState>(DateStateContext);
};

export const useDateDispatch = (): DateDispatch => {
  return useContext<DateDispatch>(DateDispatchContext);
};
