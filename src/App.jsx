// App.jsx
import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0); // Declare a state variable 'count' initialized to 0

  return (
    <div>
      <h1>Counter App</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default App;
