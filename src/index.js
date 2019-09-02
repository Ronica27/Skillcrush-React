import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  var firstName = "Adda";
  var colorName = { backgroundColor: "blue" };
  return (
    <div>
      <h1>Buggy Code Challenge</h1>
      <p>This year is: {new Date().getFullYear()}</p>
      <p>{firstName} is my favorite crusher of skillz!</p>
      {/*this comment shouldn't appear on the screen, just in the code*/}
      <h3 style={colorName} className="red">
        Make me colorful!
      </h3>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
