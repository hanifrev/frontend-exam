import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface sliderState {
  value: number;
}

const initialState: sliderState = {
  value: 12,
};

const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    sliderValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { sliderValue } = sliderSlice.actions;
export default sliderSlice.reducer;
