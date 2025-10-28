// src/exercise/01.js
import { useEffect } from "react";

/**
 * Custom Hook: useDocumentTitle
 * -----------------------------
 * Sets the document title to a specific value when the component mounts.
 * This hook demonstrates a simple useEffect usage.
 */

export function useDocumentTitle() {
  useEffect(() => {
    document.title = "Welcome to the home page!";
  }, []);
}
