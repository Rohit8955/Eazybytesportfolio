import { configureStore } from "@reduxjs/toolkit";
import Projectslice from "./Projectslice";
const Store = configureStore({
    reducer:{
        projectlist:Projectslice,
    }
})

export default Store