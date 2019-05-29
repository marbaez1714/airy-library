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
    <button className={`airy-button  ${className}`} onClick={onClick} {...rest}>
      <div className={`button-inner ${type}`}>{text}</div>
    </button>
  );
}
