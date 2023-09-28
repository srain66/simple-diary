import Calendar from "@/components/Calendar";
import NoDiary from "@/components/NoDiary";

import DateContextProvider from "@/provider/DateContextProvider";

export default function Home() {
  return (
    <DateContextProvider>
      <div className="border-b pb-4">
        <Calendar />
      </div>
      <NoDiary />
    </DateContextProvider>
  );
}
