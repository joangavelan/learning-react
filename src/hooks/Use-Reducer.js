import {useState, useReducer} from 'react'

function reducer() {

}

function Counter() {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  const [count, setCount] = useState(0);

  function increment() {
    setCount((count) => count + 1);
  }

  function decrement() {
    setCount((count) => count - 1);
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span style={{margin: '5px'}}>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default Counter;