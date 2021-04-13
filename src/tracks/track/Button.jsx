import "./track.css";
import { IconPlay, IconMinus, IconPause } from "./IconButton";
import React from "react";

function Button({ name, track, setTrackers }) {
  function toggleTrack() {
    setTrackers(function (prevState) {
      return {
        ...prevState,
        [name]: {
          ...prevState[name],
          pauseState: !prevState[name].pauseState,
        },
      };
    });
  }

  function deleteTrack() {
    setTrackers(function (prevState) {
      const newState = { ...prevState };
      delete newState[name];
      return newState;
    });
  }

  return (
    <div className="button">
      <button onClick={toggleTrack}>
        {track.pauseState ? <IconPlay /> : <IconPause />}
      </button>
      <button onClick={deleteTrack}>
        <IconMinus />
      </button>
    </div>
  );
}

export default Button;
