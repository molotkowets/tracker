import "./App.css";
import Input from "./input/Input";
import Tracks from "./tracks/Tracks";
import React, { useState } from "react";

function App() {
  const [StateTrackers, setTrackers] = useState({});

  return (
    <div className="App">
      <h2>tracker</h2>
      <Input StateTrackers={StateTrackers} setTrackers={setTrackers} />
      <Tracks StateTrackers={StateTrackers} setTrackers={setTrackers} />
    </div>
  );
}

export default App;
