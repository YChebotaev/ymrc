import React from "react";
import PinInput from "react-pin-input";
import "./CodeInput.css";

export function CodeInput({ onComplete }) {
  return (
    <div className="code-input">
      <PinInput
        length={8}
        secret={false}
        type="numeric"
        onComplete={onComplete}
      />
    </div>
  );
}
