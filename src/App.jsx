import React from 'react';

function App() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

export default App;
