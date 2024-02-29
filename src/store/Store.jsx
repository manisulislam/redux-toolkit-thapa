import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/UserSlice"
const store=configureStore({
    reducer:{
        user:user
    }
})

export default store;