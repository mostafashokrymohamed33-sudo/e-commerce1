import {createSlice} from "@reduxjs/toolkit"

const favSlice =createSlice({
    name:"fav",
    initialState:[],
    reducers:{
        addToFav:((state,action)=>{
            state.push(action.payload)
        }),
        removeFromfav:((state,action)=>{
            alert (`remove ${action.payload.title} from fav . `)
           return state.filter(item => item.id !== action.payload.id);
        }),
    }
})

export  const {addToFav, removeFromfav}=favSlice.actions;
export default favSlice.reducer;
