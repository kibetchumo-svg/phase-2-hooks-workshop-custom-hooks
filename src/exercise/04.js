// src/exercise/04.js
import { useState, useEffect } from "react";

/**
 * Custom Hook: useLocalStorage
 * ----------------------------
 * Synchronizes state with localStorage.
 * Returns the current value and a setter function.
 *
 * Example:
 * const [name, setName] = useLocalStorage("username", "Guest");
 */

export function useLocalStorage(key, initialValue = null) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? stored : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}
