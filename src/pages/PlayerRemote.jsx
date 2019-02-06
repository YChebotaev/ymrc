import React, { useState } from "react";
import {
  PlayerControls,
  PrevTrack,
  PlayTrack,
  NextTrack
} from "../components/PlayerControls";

export const PlayerRemote = ({ match: { params } }) => {
  return (
    <PlayerControls>
      <PrevTrack rcid={params.rcid} />
      <PlayTrack rcid={params.rcid} />
      <NextTrack rcid={params.rcid} />
    </PlayerControls>
  );
};
