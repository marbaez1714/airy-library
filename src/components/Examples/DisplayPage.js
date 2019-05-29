import React from "react";
import ColorExamples from "./ColorExamples";
import ButtonExamples from "./ButtonExamples";
import "./DisplayPage.scss";

export default function DisplayPage(props) {
  return (
    <div>
      <h1>Airy Library!</h1>
      <div className="displayPage">
        <ColorExamples />
        <ButtonExamples />
      </div>
    </div>
  );
}
