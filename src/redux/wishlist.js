import {createSlice} from "@reduxjs/toolkit"
const initialState = {
 hotels:[]
};

const wishlist = createSlice({
    name:"hotels",initialState,
    reducers:{
        addtowish(state,action){
            state.hotels.push(action.payload)
        },
        Remove(state,action){
          state.hotels=  state.hotels.filter((el)=>el.id!==action.payload.id)
        }
    }
})
export const{addtowish,Remove} = wishlist.actions;
export default wishlist.reducer;

