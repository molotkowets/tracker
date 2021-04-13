export function setPause(getName, statePause, StateTrackers) {
  let trackerGet = StateTrackers[getName];

  trackerGet.pauseState = !trackerGet.pauseState;
  localStorage.setItem(getName, JSON.stringify(trackerGet));
}

export function deleteItem(getName, statePause) {
  console.log("test pro");
  localStorage.removeItem(getName);
  console.log("delete");
  statePause();
}
