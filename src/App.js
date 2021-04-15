import "./App.css";
import Input from "./input/Input";
import Tracks from "./tracks/Tracks";
import React, { useState, useEffect } from "react";

function App() {
  const [StateTrackers, setTrackers] = useState({});

  // localStorage.setItem("Tracks", JSON.stringify(StateTrackers));
  console.log(!!localStorage.getItem("Tracks"));
  useEffect(() => {
    if (!!localStorage.getItem("Tracks")) {
      setTrackers(startTrack);
    }
    return () => {};
  }, []);

  return (
    <div className="App">
      <h2>tracker</h2>
      <Input StateTrackers={StateTrackers} setTrackers={setTrackers} />
      <Tracks StateTrackers={StateTrackers} setTrackers={setTrackers} />
    </div>
  );
}

export default App;

function startTrack(prevState) {
  let tracks = JSON.parse(localStorage.getItem("Tracks"));
  return {
    ...prevState,
    ...tracks,
  };
}
