import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialAuthState= {isAuth: false};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            //console.log('inc')
            state.isAuth = true;
        },
        logout(state) {
            //console.log('here');
            state.isAuth = false;
        },
    }
});

export const authActions = authSlice.actions;

export const authSliceReducer = authSlice.reducer;