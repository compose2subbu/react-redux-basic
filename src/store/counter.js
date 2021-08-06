import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialCounterState= {counter: 0, showCounter: true};


const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            //console.log('inc')
            state.counter++;
        },
        decrement(state) {
            //console.log('here');
            state.counter--;
        },
        increase(state, action) {
            //let n = +action.payload;
            //console.log(typeof(state.counter))
            //console.log(typeof(action.payload))
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            //console.log('toggle')
            state.showCounter = !state.showCounter;
        },
    }
});

// export const counterActions = counterSlice.actions;
export const counterActions = counterSlice.actions;

export const counterSliceReducer = counterSlice.reducer;