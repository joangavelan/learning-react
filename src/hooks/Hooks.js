import React, { useState, useEffect } from 'react';
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
  const [color, setColor] = useState('');

  function increment() {
    setCount((count) => count + 1);
  }

  function decrement() {
    setCount((count) => count - 1);
  }

  useEffect(() => {
    if(count === 0) {
      setColor('black')
    } else if(count > 0) {
      setColor('green')
    } else {
      setColor('red')
    }
  })

  return (
    <>
      <button onClick={decrement}>-</button>
      <span style={{color: color}}>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default Counter;