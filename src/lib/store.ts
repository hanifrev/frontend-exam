import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { examAPI } from '@/lib/services/api';
import sliderReducer from './features/sliderSlice';

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    [examAPI.reducerPath]: examAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(examAPI.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
