import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

/**
 * create store
 * -configureStore - omport from RTK
 *
 * provide my store to app
 * < Provider store = {store}> - import from react-redux
 *
 * slice
 * createSlice - import from RTK
 * createSlice({
 * name:"",
 * initialState:
 * reducers: {
 * addItem : (state,action)=>{ state.item.push(actio.payload)}
 * }
 * export const {addItem , removeItem} = cartSlice.actions
 * export default cartSlice.reducer;
 * })
 *
 * Put my slice to our store
 * {
 * cart : cartSlice
 * }
 */
