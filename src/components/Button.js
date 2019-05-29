import React from "react";
import "./Button.scss";

export default function Button(props) {
  const {
    text = "default",
    type,
    onClick = () => console.log("click!"),
    className = "",
    ...rest
  } = props;

  return (
    <div className="button-border">
      <button className={`airy-button ${type} ${className}`} onClick={onClick} {...rest}>
        {text}
      </button>
    </div>
  );
}
