import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { examAPI } from '@/lib/services/api';
import counterReducer from './features/counterSlice';
import sliderReducer from './features/sliderSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    slider: sliderReducer,
    [examAPI.reducerPath]: examAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(examAPI.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
