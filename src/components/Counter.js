import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux'
import {counterActions} from '../store/counter'

const Counter = () => {
  

  const stepValueInteger = 5;

  const counter = useSelector((state) => state.counter.counter);
  const toggleCounter = useSelector((state) => state.counter.showCounter);
  //console.log(toggleCounter)
  const dispatch = useDispatch();

  const incrmentHandler = () => {
    // dispatch({type: 'increment'})
    dispatch(counterActions.increment())
  };

  const toggleCounterHandler = () => {
    //console.log('here')
    // dispatch({type: 'toggle'})
    //console.log('tog')
    dispatch(counterActions.toggle())
  };

  const increaseHandler = () => {
    // dispatch({type: 'increase', stepValue: stepValueInteger})
    dispatch(counterActions.increase(
      stepValueInteger
    ))
  };


  const decrementHandler = () => {
    // dispatch({type: 'decrement'})
    //console.log('hee')
    dispatch(counterActions.decrement())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrmentHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment By {stepValueInteger}</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
