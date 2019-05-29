import React from "react";
import Button from "../Button.js";
export default function ButtonExamples() {
  return (
    <div>
      <h3 style={{ textAlign: "left" }}>Buttons!</h3>
      <div className="button-wrapper">
        <Button type="primary" />
      </div>
      <div className="button-wrapper">
        <Button type="secondary" />
      </div>
      <div className="button-wrapper">
        <Button type="success" />
      </div>
      <div className="button-wrapper">
        <Button type="warning" />
      </div>
      <div className="button-wrapper">
        <Button type="error" />
      </div>
    </div>
  );
}
