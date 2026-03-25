import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      alert (`add ${action.payload.count} times ${action.payload.title} to cart . totla price is ${action.payload.count*action.payload.price}$`)
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.count += action.payload.count;
      } else {
        state.push(action.payload);
      }
    },
    editCount:(state,action)=>{
      const existingItme =state.find(item=>item.id==action.payload.id)
      if(existingItme)existingItme.count=action.payload.count
    },

    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;