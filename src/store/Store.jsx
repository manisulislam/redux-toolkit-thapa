import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/UserSlice"
const store=configureStore({
    reducer:{
        users:user
    }
})

export default store;