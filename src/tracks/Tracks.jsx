import Track from "./track/Track";
import "./tracks.css";

function Tracks({ StateTrackers, setTrackers }) {
  const tracks = Object.entries(StateTrackers);

  return (
    <div className="tracks">
      {!!tracks.length
        ? tracks.map(([name, value]) => (
            <Track name={name} track={value} setTrackers={setTrackers} />
          ))
        : "loading..."}
    </div>
  );
}

export default Tracks;
