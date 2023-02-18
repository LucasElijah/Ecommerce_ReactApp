import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";

export const cart = configureStore({
	reducer: { cart: cartReducer },
});
