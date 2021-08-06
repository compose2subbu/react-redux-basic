// import {createStore} from 'redux'
import {createSlice, configureStore} from '@reduxjs/toolkit';
import {authSliceReducer} from './auth';
import {counterSliceReducer} from './counter';







const store = configureStore({
    reducer: {counter: counterSliceReducer, auth: authSliceReducer}
});
// const store = configureStore({
//     reducer: {counter: counterSlice.reducer}
// });




export default store;
// const counterReducer = (state = initialState, action) => {
//     if(action.type === 'increment'){
//         //state.counter++;
//         //return state;
        
        
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }


//     if(action.type === 'increase'){
//         return {
//             counter: state.counter + action.stepValue,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'decrement'){
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'toggle'){
//         //console.log('here too')
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }
//     return state;
// }

// const store = createStore(counterReducer);
// const store = createStore(counterSlice.reducer);