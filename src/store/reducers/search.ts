import { setSearch } from "store/actions/search";
import { SET } from "store/actions/types";

export interface SearchState {
  searchText: string;
}

const INITAIL_STATE: SearchState = {
  searchText: "",
};

type searchAction = ReturnType<typeof setSearch>;

export default function search(state = INITAIL_STATE, action: searchAction) {
  switch (action.type) {
    case SET:
      return { searchText: action.payload };
    default:
      return state;
  }
}
