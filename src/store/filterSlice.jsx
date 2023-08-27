import { createSlice } from "@reduxjs/toolkit";




export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
  }


const filterSlice=createSlice({

name:'filterTodo',
initialState:VisibilityFilters.SHOW_ALL,
reducers: {

    setFilter(state,action) {

        return action.payload
    }

}


}


)


export const setFilter=filterSlice.actions;

// export default filterSlice.reducer;
export default filterSlice;