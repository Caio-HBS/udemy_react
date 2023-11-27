import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice.jsx";
import cartSlice from "./cart-slice.jsx";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
