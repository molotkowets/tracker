import "./track.css";
import { IconPlay, IconMinus, IconPause } from "./IconButton";
import React from "react";

function Button({ name, track, setTrackers }) {
  function toggleTrack() {
    setTrackers(function (prevState) {
      let ReDataNaw;
      if (!prevState[name].pauseState) {
        ReDataNaw = prevState[name].dataNaw;
      } else {
        ReDataNaw =
          new Date().getTime() -
          (prevState[name].dataPause - prevState[name].dataNaw);
      }

      const test = {
        [name]: {
          dataNaw: ReDataNaw,
          dataPause: new Date().getTime(),
          pauseState: !prevState[name].pauseState,
        },
      };
      localStorage.setItem("Tracks", JSON.stringify({ ...prevState, ...test }));
      return {
        ...prevState,
        ...test,
      };
    });
  }

  function deleteTrack() {
    setTrackers(function (prevState) {
      const newState = { ...prevState };
      delete newState[name];
      localStorage.setItem("Tracks", JSON.stringify({ ...newState }));
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
