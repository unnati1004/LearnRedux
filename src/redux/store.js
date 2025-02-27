import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { counterSlice } from "../features/counter/counterSlice";
// import { todoSlice } from "../features/todo/todoSlice";
import {ListSlice} from "../features/todoList/ListSlice";



export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    list: ListSlice.reducer,
    // todo: todoSlice.reducer,
  },
  
  
 
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)
