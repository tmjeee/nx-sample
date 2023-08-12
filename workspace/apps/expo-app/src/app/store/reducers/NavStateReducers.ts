import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type NavStateReducerState = {
    status: 'unauth-nav' | 'auth-nav';
}

const initialState: NavStateReducerState = {
    status: 'unauth-nav'
}


const slice = createSlice({
    name: 'navState',
    initialState: initialState,
    reducers: {
        changeToAuthNav: (state, action: PayloadAction<string>) => {
           return {
               ...state,
               status: 'auth-nav',
           };
        },
        changeToUnauthNav: (state)  => {
            return {
                ...state,
                status: 'unauth-nav',
            };
        }
    },
    extraReducers: (builder) => {
        // extra builders
    }
});

export const {changeToAuthNav, changeToUnauthNav} =  slice.actions;

export default slice.reducer;
