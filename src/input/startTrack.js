import moment from "moment";

export function startTrack({ StateTrackers, getValue }) {
  console.log(getValue);

  if (true) {
    return (StateTrackers[getValue] = {
      dataNaw: moment().utc().unix(),
      dataPause: "",
      pauseState: false,
    });
  } else {
    alert("Enter track name");
  }
}
//   let getValue = document.getElementById("nameTracker").value;

//   let setTracer = {
//     dataNaw: moment().utc().unix(),
//     dataPause: "",
//     pauseState: false,
//   };
//   if (getValue) {
//     localStorage.setItem(getValue, JSON.stringify(setTracer));
//     console.log(moment().utc().unix(), "good");
//     // start(getValue);
//   } else {
//     alert("Enter track name");
//   }

// export function start(getValue) {
//   return getValue;
// }
// export function startTrack() {
//     let getValue = document.getElementById("nameTracker").value;
//     let setTracer = {
//       dataNaw: moment().utc().unix(),
//       dataPause: "",
//       pauseState: false,
//     };
//     if (getValue) {
//       localStorage.setItem(getValue, JSON.stringify(setTracer));
//       console.log(moment().utc().unix(), "good");
//       // start(getValue);
//     } else {
//       alert("Enter track name");
//     }
//   }
