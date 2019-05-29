import React from "react";
import ColorExamples from "./ColorExamples";
import ButtonExamples from "./ButtonExamples";
import ProgressExamples from "./ProgressExamples";
import "./DisplayPage.scss";

export default function DisplayPage(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="displayPage">
        <ColorExamples />
        <ButtonExamples />
        <ProgressExamples />
      </div>
    </div>
  );
}
