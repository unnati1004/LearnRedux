import { createSlice, nanoid } from "@reduxjs/toolkit";

export const ListSlice = createSlice({
     name: "list",
     initialState:{
       data: [{id:1,text:"Hello"}]   
     },
     reducers:{
       addTodo:(state,action)=>{
          let todo = {
               id: nanoid(),
               text: action.payload
          }
          state.data.push(todo)
       },
       removeTodo:(state,action)=>{
          state.data = state.data.filter((todo)=>todo.id !== action.payload)
       }
     //   updateTodo

     }
}) 

export const {addTodo,removeTodo} = ListSlice.actions;
export default ListSlice.reducer;
