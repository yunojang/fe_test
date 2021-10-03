import { SET } from "./types";

export function setSearch(search: string) {
  return {
    type: SET,
    payload: search,
  };
}
