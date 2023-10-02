import { LocalStorageEffect } from "@/types/localStorage";
import LocalStorage from "./localStorage";

const localStorageEffect: LocalStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }) => {
    const savedValue = LocalStorage.getItem(key);

    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? LocalStorage.removeItem(key)
        : LocalStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export default localStorageEffect;
