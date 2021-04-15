import "./input.css";
import { PlayIcon } from "./PlayIcon";
import { useState } from "react";
// import { startTrack } from "./startTrack";

function Input({ setTrackers }) {
  function start() {
    setTrackers(startTrack);
  }

  const [value, setValue] = useState("");

  const onChange = ({ target: { value } }) => {
    setValue(value);
  };

  function startTrack(prevState) {
    if (value) {
      const test = {
        [value]: {
          dataNaw: new Date().getTime(),
          dataPause: "",
          pauseState: false,
        },
      };
      localStorage.setItem("Tracks", JSON.stringify({ ...prevState, ...test }));
      return {
        ...prevState,
        ...test,
      };
    } else {
      alert("Enter track name");
      return prevState;
    }
  }

  return (
    <div className="input">
      <input
        id="nameTracker"
        type="text"
        placeholder="Enter tracer name"
        value={value}
        onChange={onChange}
      />
      <button onClick={start}>
        <PlayIcon />
      </button>
    </div>
  );
}

export default Input;
