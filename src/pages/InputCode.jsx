import React from "react";
import { CodeInput } from "../components/CodeInput";

export const InputCode = ({ history, setDisabled, setRcid }) => {
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
      <CodeInput
        onComplete={handleComplete}
        setDisabled={setDisabled}
        setRcid={setRcid}
      />
    </div>
  );

  function handleComplete(value) {
    history.push(`/${value}`);
  }
};
