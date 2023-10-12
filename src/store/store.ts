import { configureStore } from "@reduxjs/toolkit";
import personSlice from "./slices/person-slice";
export const store = configureStore({
  reducer: {
    persons: personSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
