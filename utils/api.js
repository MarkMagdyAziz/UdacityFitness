import AsyncStorage from "@react-native-async-storage/async-storage";
import { CALENDAR_STORAGE_KEY } from "./_calendar";

export const submitEntry = async ({ entry, key }) => {
  try {
    await AsyncStorage.mergeItem(
      CALENDAR_STORAGE_KEY,
      JSON.stringify({ [key]: entry })
    );
    console.log("Data Successfully saved");
  } catch (e) {
    console.warn(" Error While MergeItem!", e);
  }
};
export const removeEntry = (key) => {
  try {
    return AsyncStorage.getItem(CALENDAR_STORAGE_KEY).then((results) => {
      const data = JSON.parse(results);
      delete data[key];
      if (data !== null) {
        AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
      }
      console.log("Data Successfully read");
    });
  } catch (e) {
    console.warn(" Error While removeEntry!", e);
  }
};
