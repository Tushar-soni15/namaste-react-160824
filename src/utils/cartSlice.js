import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        additem: (state, action) => {
            //mutating the state over here
            state.items.push(action.payload);
        }, 
        removeItem(state, action){
            state.items.pop(action.payload);
        },
        emptyItems(state, action){
            state.items.length = 0;
        },
    },
});


export const {additem, removeItem, emptyItems} = cartSlice.actions; // export the actions

export default cartSlice.reducer; // export the reducers