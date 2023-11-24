import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "./auth.jsx";
import { counterSlice } from "./counter.jsx";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
