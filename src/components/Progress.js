import React from "react";
import "./Progress.scss";

export default function Progress(props) {
  const { total, current, tick, type = "primary" } = props;
  const progress = `${(current / total) * 100}%`;

  if (tick) {
    const tickMarks = [];
    for (let i = 1; i <= total; i++) {
      tickMarks.push(
        <div
          className={`progress-tick ${i === parseInt(current) && "currentTick"} ${i <= current &&
            type}`}
        />
      );
    }
    return (
      <div className="progress-bar">
        <div className="tick-bar-inner">{tickMarks}</div>
      </div>
    );
  }

  return (
    <div className="progress-bar">
      <div className={`progress-inner ${type}`} style={{ width: `${progress}` }} />
    </div>
  );
}
