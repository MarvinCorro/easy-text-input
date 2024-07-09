import React from "react";
import Input from "./input/Input";

export function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        gap: "40px",
      }}
    >
      <Input
        placeholder="name@email.com"
        label="Email"
        disabled={false}
        required={true}
        maxLength={50}
        trailingIcon="question"
        textHint="This is a hint text."
      />
      <Input
        placeholder="name@email.com"
        label="Email"
        disabled={false}
        required={true}
        maxLength={50}
        leadingIcon="envelope"
        trailingIcon="question"
        textHint="This is a hint text."
      />
      <Input
        placeholder="name@email.com"
        label="Email"
        disabled={true}
        required={true}
        maxLength={50}
        trailingIcon="question"
        textHint="This is a hint text."
      />
      <Input
        placeholder="name@email.com"
        label="Email"
        disabled={false}
        required={true}
        maxLength={50}
        trailingIcon="question"
        errorMessage="This is an error message."
      />
    </div>
  );
}
