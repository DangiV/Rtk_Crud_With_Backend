import { configureStore } from "@reduxjs/toolkit";
import  userSlice from "../Feature/UserSlice";

const store = configureStore({
    reducer : {
        users : userSlice,
    },
})

export default store;