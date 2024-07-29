import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    data: [],  // Initialize data as an empty array
  },
  reducers: {
    increment: (state, action) => {
      const item = state.data.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrement: (state, action) => {
      const item = state.data.find((item) => item.id === action.payload)
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },
    addData: (state, action) => {
      const item = state.data.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
      }
    },
    removeData: (state, action) => {
      // const item = state.data.find((item) => item.id === action.payload)
      // if (item && item.quantity > 0) {
      //   item.quantity = 0;
      // }

      state.data=state.data.filter((item)=> item.id != action.payload)
    },
  },
})

export const { increment, decrement, addData, removeData } = counterSlice.actions;
export default counterSlice.reducer;
