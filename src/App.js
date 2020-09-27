import React from "react";
import Home from "./Pages/Home";
import "./Styles/App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-sub">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
