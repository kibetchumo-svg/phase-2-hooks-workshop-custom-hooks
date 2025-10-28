// src/exercise/03.js
import { useState, useEffect } from "react";

/**
 * Custom Hook: useMouseCoordinates
 * --------------------------------
 * Tracks the user's mouse coordinates on the screen.
 * Returns an object with the latest `clientX` and `clientY` values.
 */

export function useMouseCoordinates() {
  const [coords, setCoords] = useState({ clientX: 0, clientY: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setCoords({ clientX: e.clientX, clientY: e.clientY });
    }

    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return coords;
}
