import React, { useRef, useEffect, useState } from "react";

export const useKeyboard = () => {
  const [keyPressed, setKeyPressed] = useState("");

  const onKeyPress = (ev) => {
    console.log('ev', ev.keyCode);
    setKeyPressed(ev.key)
  }

  const onKeyDown = (ev) => {
    // TODO обрабатывать ESC DELETE и т.д
  }


  useEffect(() => {
    window.addEventListener("keypress", onKeyPress);
    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keypress", onKeyPress);
  }, [keyPressed]);

  return { keyPressed };
};