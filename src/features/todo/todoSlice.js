import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetchTodos", async () => {
     const response = await fetch("https://dummyjson.com/products");
     let data = await response.json();
     // console.log("data",data);
     
     return data;
   });
   
export const todoSlice = createSlice({
     name:"todo",
     initialState:{
       isLoading: false,
       data: null,
       isError: false,
     },
     extraReducer:(builder)=>{
       builder.addCase(fetchData.pending,(state,action) => {
         state.isLoading = true;
       });
       builder.addCase(fetchData.fulfilled, (state,action)=>{
         state.isLoading = false;
         state.data = action.payloa;
       });
       builder.addCase(fetchData.rejected, (state,action)=>{
         state.isError = true;
       })
     },
   })

   export default todoSlice.reducer;