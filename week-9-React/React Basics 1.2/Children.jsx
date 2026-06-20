import React from "react";

// Main component
function App() {
  return (
    // Parent container with flex display so cards appear side by side
    <div style={{ display: "flex" }}>

      {/* First Card */}
      <Card>
        <div style={{ color: "pink" }}>
          What's Happening?

          {/* Input field placed on the next line */}
          <div>
            <input type="text" />
          </div>
        </div>
      </Card>

      {/* Second Card */}
      <Card>
        <div>Hi there</div>
      </Card>

    </div>
  );
}

// Reusable Card component
// 'children' represents whatever is placed between <Card> and </Card>
function Card({ children }) {
  return (
    <div
      style={{
        background: "black",
        color: "white",
        padding: 10,
        margin: 10,
      }}
    >
      {children}
    </div>
  );
}

export default App; // Makes App available for use in main.jsx
