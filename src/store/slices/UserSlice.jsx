import { createSlice } from "@reduxjs/toolkit";

const user=createSlice({
    name:"users",
    initialState:[],
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload)
            // console.log(action.payload);
        },
        deleteUser:(state,action)=>{
            state.splice(action.payload, 1)
        },
        clearUser:(state, action)=>{
            return []
        }
    }
})
export const {addUser, deleteUser, clearUser}=user.actions;
export default user.reducer;