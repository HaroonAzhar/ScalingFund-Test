import React from "react";

import "./App.css";
import Investments from "./components/investments";

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>ScalingFunds Live Coding Challenge</h1>
    </header>
    <main className="App-main">
      <Investments />
    </main>
  </div>
);

export default App;
