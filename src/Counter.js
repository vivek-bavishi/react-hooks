import React, { useState,useEffect } from 'react';

import './gsass.sass';

function Counter() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div className="Counter">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setCount(0)}>
        reset
      </button>
    </div>
  );
}

export default Counter;
