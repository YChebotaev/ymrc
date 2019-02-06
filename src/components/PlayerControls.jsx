import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faFastForward,
  faFastBackward
} from "@fortawesome/free-solid-svg-icons";
import "./PlayerControls.css";
import axios from "axios";

export function PlayerControls({ children }) {
  return <div className="player-controls">{children}</div>;
}

export function PrevTrack({ rcid }) {
  async function prevTrack() {
    await axios.post("/.netlify/functions/send_event", {
      method: "prevTrack",
      params: [rcid]
    });
  }

  return (
    <button
      className="control-button control-button__prev-track"
      onClick={prevTrack}
    >
      <FontAwesomeIcon icon={faFastBackward} />
    </button>
  );
}

export function PlayTrack({ rcid }) {
  async function playPause() {
    await axios.post("/.netlify/functions/send_event", {
      method: "play",
      params: [rcid]
    });
  }

  return (
    <button
      className="control-button control-button__play-track"
      onClick={playPause}
    >
      <FontAwesomeIcon icon={faPlay} />
    </button>
  );
}

export function NextTrack({ rcid }) {
  async function nextTrack() {
    await axios.post("/.netlify/functions/send_event", {
      method: "nextTrack",
      params: [rcid]
    });
  }
  return (
    <button
      className="control-button control-button__next-track"
      onClick={nextTrack}
    >
      <FontAwesomeIcon icon={faFastForward} />
    </button>
  );
}
