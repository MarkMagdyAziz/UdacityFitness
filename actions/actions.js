import { RECEIVE_ENTRIES, ADD_ENTRY } from "./actionTypes";

export function receiveEntry(entries) {
  return {
    type: RECEIVE_ENTRIES,
    entries,
  };
}
export function addEntry(entry) {
  return {
    type: ADD_ENTRY,
    entry,
  };
}
