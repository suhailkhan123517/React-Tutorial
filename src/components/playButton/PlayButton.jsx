import React, { useState } from "react";
import "./PlayButton.css";

export default function PlayButton({ name, onPlay, onPause }) {
  const [playing, setPlaying] = useState(false);
  const handlClick = () => {
    if (playing) {
      onPause();
    } else {
      onPlay();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <button onClick={handlClick}>
        {name} {playing ? "||" : ">"}
      </button>
    </>
  );
}
