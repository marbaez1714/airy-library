import React from "react";
import "./Progress.scss";

export default function Progress(props) {
  const { total, current, type = "primary" } = props;
  const progress = `${(current / total) * 100}%`;

  return (
    <div className="progress-bar">
      <div className={`progress-inner ${type}`} style={{ width: `${progress}` }} />
    </div>
  );
}
