
import React from "react";

// Parent component
function App() {
  return (
    <div>

      {/* Array of React components */}
      {/* 'key' helps React identify each item uniquely */}
      {[
        <Todo key={1} title={"Eat Healthy Food"} done={true} />,
        <Todo key={2} title={"Go to gym"} done={false} />
      ]}

    </div>
  );
}

// Child component
// Receives data from App through props
function Todo({ title, done }) {
  return (
    <div>

      {/* Display title and use a ternary operator for conditional rendering */}
      {title} - {done ? "Yes Donee!" : "Do it Quickly!!"}

    </div>
  );
}

export default App;
