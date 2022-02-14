import { useState, useEffect } from "react";
import "./App.css";

/*Event listener function for movement input*/
const useCharacterControls = () => {
  const { up, down, left, right } = useCharacterControls();

  const keys = {
    KeyW: "up",
    KeyS: "down",
    KeyA: "left",
    KeyD: "right",
  };

  const movementKey = (key) => keys[key];

  const [movement, setMovement] = useState({
    up: false,
    down: false,
    left: false,
    right: false,
  });

  useEffect(() => {
    const handleMoveUp = (e) => {
      setMovement((m) => ({ ...m, [movementKey(e.code)]: true }));
    };
    const handleMoveDown = (e) => {
      setMovement((m) => ({ ...m, [movementKey(e.code)]: false }));
    };
    document.addEventListener("keydown", handleMoveDown);
    document.addEventListener("keyup", handleMoveUp);
    return () => {
      document.removeEventListener("keydown", handleMoveDown);
      document.removeEventListener("keyup", handleMoveUp);
    };
  }, []);

  return movement;
};

export default useCharacterControls;
