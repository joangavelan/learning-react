import React, { useState } from 'react';
import '../index.css';

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

function Counter() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(null);

  function increment() {
    setCount((count) => count + 1);
  }

  function decrement() {
    setCount((count) => count - 1);
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span style={{color: theme}}>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default Counter;