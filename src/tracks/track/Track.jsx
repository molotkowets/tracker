import "./track.css";
import Button from "./Button";
import React, { useEffect, useState } from "react";
import { getTime } from "./outTime";

function Track({ name, track, setTrackers }) {
  const [time, setTime] = useState();
  useEffect(() => {
    let timer;
    if (!track.pauseState) {
      timer = setInterval(() => setTime(getTime(track)), 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [track.pauseState]);
  return (
    <div className="track">
      <div className="text">
        {name}
        <div className="time">{time}</div>
        {name ? (
          <Button name={name} track={track} setTrackers={setTrackers} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
//
export default Track;
