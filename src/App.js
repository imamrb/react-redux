import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from './actions'

function App () {
  const counter = useSelector(state => state.counter) // extract counter from global state
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <h1>Counter {counter}</h1>

      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {isLogged ? <h3>Valuable Information that can be seen after logged in!</h3> : ''}
    </div>
  );
}

export default App;
