import { useState } from "react";

function App() {
    const[count, setCount] = React.useState(0)
    
    return (
    <div>
      <Button count ={count} setCount={setCount}></Button>
    </div>
  )
}

function onButtonClick() {
    setCount(count + 1);
  }

  return React.createElement(
    'button',
    { onClick: onButtonClick },
    `Counter ${count}`
  );

export default App

