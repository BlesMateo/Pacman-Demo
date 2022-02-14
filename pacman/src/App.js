import React from "react";
import "./App.css";

/*Monitor key input from the player*/
window.addEventListener("keydown", controlArrow);

/*Event listener function for movement input*/
function controlArrow(e) {
  const keyArrow = e.keyCode;
  const up = w;
  const down = s;
  const right = a;
  const left = d;

  if (keyArrow === up) window.appState.player.direction = "up";
  if (keyArrow === down) window.appState.player.direction = "down";
  if (keyArrow === right) window.appState.player.direction = "right";
  if (keyArrow === left) window.appState.player.direction = "left";
}

export default App;
