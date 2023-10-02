import { Diary } from "@/types/diary";
import localStorageEffect from "@/utils/localStorageEffect";
import { atom, selectorFamily } from "recoil";

export const diariesState = atom<Diary[]>({
  key: "diariesState",
  default: [],
  effects_UNSTABLE: [localStorageEffect<Diary[]>("Diaries")],
});

export const diarySelector = selectorFamily<Diary, string>({
  key: "diarySelector",

  get:
    (key: string) =>
    ({ get }) => {
      return get(diariesState).find((diary) => diary.key === key)!;
    },

  set:
    (key: string) =>
    ({ get, set }, newDiary) => {
      const diary = get(diarySelector(key));
      const diaries = get(diariesState);
      set(
        diariesState,
        diary
          ? diaries.map((item) => {
              return item.key === key ? (newDiary as Diary) : item;
            })
          : [...diaries, newDiary as Diary]
      );
    },
});
