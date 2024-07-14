import React from "react";
import Input from "./input/Input";
import Textarea from "./textbox/Textarea";

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
      <Textarea label="Description" placeholder="Write your message..." maxLength={500} />
      <Textarea label="Description" placeholder="Enter a description..." errorMessage={'This field is required'} maxLength={500} />
      <Textarea label="Description" placeholder="Write your message..." maxLength={500} />
    </div>
  );
}
