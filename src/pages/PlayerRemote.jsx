import React from "react";
import {
  PlayerControls,
  PrevTrack,
  PlayTrack,
  NextTrack
} from "../components/PlayerControls";

export const PlayerRemote = ({ match: { params } }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <PlayerControls>
        <PrevTrack rcid={params.rcid} />
        <PlayTrack rcid={params.rcid} />
        <NextTrack rcid={params.rcid} />
      </PlayerControls>
    </div>
  );
};
