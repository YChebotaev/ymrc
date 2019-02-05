/* global Pusher */

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faFastForward,
  faFastBackward
} from "@fortawesome/free-solid-svg-icons";
import PinInput from "react-pin-input";
import Pusher from "pusher";

import "./styles.css";

let channel = null;
Pusher.logToConsole = true;
const pusher = new Pusher("3f43dc4d450902026e31", {
  cluster: "eu",
  forceTLS: true
});

function App() {
  const [disabled, setDisabled] = useState(true);
  const [rcid, setRcid] = useState("");

  const prevTrack = () => {
    channel && channel.trigger("client-prevTrack", {});
  };

  const playPause = () => {
    channel && channel.trigger("client-play", {});
  };

  const nextTrack = () => {
    channel && channel.trigger("client-nextTrack", {});
  };

  return (
    <>
      <div className="pin-code">
        <PinInput
          length={8}
          secret={false}
          type="numeric"
          onChange={(value, index) => {
            if (value.length !== 8) {
              setDisabled(true);
              setRcid("");
            }
          }}
          onComplete={(value, index) => {
            pusher.unsubscribe(`rc-${rcid}`);
            channel = null;
            setDisabled(false);
            setRcid(value);
            channel = pusher.subscribe(`private-rc-${value}`);
          }}
        />
      </div>
      <div className="player-controls">
        <button disabled={disabled} onClick={prevTrack}>
          <FontAwesomeIcon icon={faFastBackward} />
        </button>
        <button disabled={disabled} onClick={playPause}>
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button disabled={disabled} onClick={nextTrack}>
          <FontAwesomeIcon icon={faFastForward} />
        </button>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
