import { createSlice } from "@reduxjs/toolkit";

const user=createSlice({
    name:"users",
    initialState:[],
    reducers:{
        addUser:(state,action)=>{},
        deleteUser:(state,action)=>{},
        clearUser:(state, action)=>{}
    }
})

export default user.reducer;