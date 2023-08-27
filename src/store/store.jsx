import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from './todoSlice';
import todoSlice from "./todoSlice";
import filterReducer from './filterSlice';
import filterSlice from "./filterSlice";




const store =configureStore({
  
    reducer: {
    // todo:todoReducer
    todo:todoSlice.reducer,
    filter:filterSlice.reducer

   
  
    }
})

export default store;
