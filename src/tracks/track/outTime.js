import moment from "moment";

function formatTime(durationInMilliseconds) {
  return `${padNumber(
    durationInMilliseconds.get("days") * 24 +
      durationInMilliseconds.get("hours")
  )}:${padNumber(durationInMilliseconds.get("minutes"))}:${padNumber(
    durationInMilliseconds.get("seconds")
  )}`;
}

export function getTime(track) {
  console.log(track);
  let durationInMilliseconds;

  if (!track.pauseState) {
    durationInMilliseconds = moment.duration(
      new Date().getTime() - track.dataNaw
    );
  } else {
    durationInMilliseconds = track.dataPause
      ? (durationInMilliseconds = moment.duration(
          track.dataPause - track.dataNaw,
          "seconds"
        ))
      : (durationInMilliseconds = moment.duration(track.dataNaw, "seconds"));
  }
  return formatTime(durationInMilliseconds);
}

function padNumber(value) {
  return String(value).padStart(2, "0");
}
