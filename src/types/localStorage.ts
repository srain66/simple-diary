import { AtomEffect } from "recoil";

export type LocalStorageEffect = <T>(key: string) => AtomEffect<T>;
