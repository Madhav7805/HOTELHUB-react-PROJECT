import {createSlice} from "@reduxjs/toolkit"

const initialState = {
 inputd:[]
};
const inputdata = createSlice({
    name:"inputd",initialState,
     reducers:{
        addtoinput(state,action){
            state.inputd.push(action.payload)
        }}

    
})
export const{addtoinput} = inputdata.actions
export const inputreducer= inputdata.reducer