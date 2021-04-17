import { atom, DefaultValue, selector, selectorFamily } from "recoil";
import { Region } from "./Context";
import { requestSelector } from "./useRequest";

export const searchState = atom({
  key: "search",
  default: ""
});

export const regionsState = atom<Array<Region>>({
  key: "regions",
  default: [],
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet(() => console.log("heyyy"));
    }
  ]
});

export const regionsNumberSelector = selector({
  key: "regionsNumber",
  get: ({ get }) => get(regionsState).length
});

export const resetSearchSelector = selector({
  key: "resetSearch",
  get: () => {},
  set: ({ reset }) => {
    reset(searchState);
  }
});
