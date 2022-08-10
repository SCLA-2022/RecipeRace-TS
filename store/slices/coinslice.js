import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


// initial state for current user session
const initialState = {
    coins: [
    ],
};

// lol

export const userSessionSlice = createSlice({
    name: "coinslice",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // updates user session data
        appendCoin: (state, action) => {
            if (action.payload) {
                axios.post('https://40e9-207-151-52-49.ngrok.io/add-marker-atm', action.payload).then(res => {
                    console.log('res', res)
                }).catch(err => {
                    if (err) throw err;
                })
                state.coins.push(action.payload)
            }
        },

        loadCoin: (state, action) => {
            const coins = axios.get()
            if(action.payload){
                // console.log(action.payload)
                state.markers = action.payload
            }
        },
    },
});
// export functions to update the date
export const { appendCoin, loadCoin} = userSessionSlice.actions;
// getting data
export const getCoin = (state) => state.map.coins;
// getting data
export default userSessionSlice.reducer;