import { createSlice } from "@reduxjs/toolkit";
import { projects } from "../projectsdata";
const Projectslice = createSlice({
    name:"project",
    initialState:{
        data:projects.filter((item)=>item.category==='React'),
    },
    reducers:{
        changeprojects: (state,action)=>{
            state.data = projects.filter((item)=>item.category===action.payload);
        },
    }
})
export const {changeprojects} = Projectslice.actions;
export default Projectslice.reducer;