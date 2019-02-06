import React from "react";
import { CodeInput } from "../components/CodeInput";

export const InputCode = ({ history, setDisabled, setRcid }) => {
  return (
    <CodeInput
      onComplete={handleComplete}
      setDisabled={setDisabled}
      setRcid={setRcid}
    />
  );

  function handleComplete(value) {
    history.push(`/${value}`);
  }
};
