import React, { useState, useEffect } from "react";
import "./App.css";

const drumPads = [
  {
    key: "Q",
    name: "Heater 1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    key: "W",
    name: "Heater 2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    name: "Heater 3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    name: "Heater 4",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    name: "Clap",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "D",
    name: "Open-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    name: "Kick-n'-Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    name: "Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    name: "Closed-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (key, name) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0; // Reset audio to start
    audio.play();
    setDisplay(name);
  };

  const handleKeyPress = (e) => {
    const key = e.key.toUpperCase();
    const drumPad = drumPads.find((pad) => pad.key === key);
    if (drumPad) {
      handleClick(drumPad.key, drumPad.name);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="drum-pads">
        {drumPads.map((drumPad) => (
          <div
            key={drumPad.key}
            className="drum-pad"
            id={drumPad.name}
            onClick={() => handleClick(drumPad.key, drumPad.name)}
          >
            {drumPad.key}
            <audio className="clip" id={drumPad.key} src={drumPad.src} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;