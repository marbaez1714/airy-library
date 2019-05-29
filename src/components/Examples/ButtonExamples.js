import React from "react";
import Button from "../Button.js";

export default function ButtonExamples() {
  return (
    <div className="example">
      <div>
        <h3 style={{ textAlign: "left" }}>Buttons!</h3>
      </div>
      <div className="button-wrapper">
        <Button type="primary" text="primary" />
        <Button type="secondary" text="secondary" />
        <Button type="success" text="success" />
        <Button type="warning" text="warning" />
        <Button type="error" text="error" />
      </div>
    </div>
  );
}
