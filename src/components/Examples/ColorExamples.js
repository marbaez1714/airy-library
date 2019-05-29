import React from "react";
import "../../tokens/ColorTokens.scss";
export default function ColorExamples() {
  return (
    <div className="example">
      <h3 style={{ textAlign: "left" }}>Colors!</h3>
      <div className="colorGrid">
        <div className="colorWrapper">
          <div className="colorBox white" />
        </div>
        <div className="colorWrapper">
          <div className="colorBox grey" />
        </div>
        <div className="colorWrapper">
          <div className="colorBox nes-grey" />
        </div>
        <div className="colorWrapper">
          <div className="colorBox dark" />
        </div>
        <div className="colorWrapper">
          <div className="colorBox primary" />
        </div>
        <div className="colorWrapper">
          <div className="colorBox primary-dark" />
        </div>
        <div className="colorWrapper">
          <div className="colorBox success" />
        </div>
        <div className="colorWrapper">
          <div className="colorBox success-dark" />
        </div>
        <div className="colorWrapper">
          <div className="colorBox warning" />
        </div>
        <div className="colorWrapper">
          <div className="colorBox warning-dark" />
        </div>
        <div className="colorWrapper">
          <div className="colorBox error" />
        </div>
        <div className="colorWrapper">
          <div className="colorBox error-dark" />
        </div>
      </div>
    </div>
  );
}
