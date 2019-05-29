import React from "react";
import Progress from "../Progress";
export default function ProgressExamples() {
  return (
    <div className="example">
      <div>
        <h3 style={{ textAlign: "left" }}>Progress!</h3>
      </div>
      <Progress type="primary" total={100} current={10} />
      <Progress type="secondary" total={100} current={20} />
      <Progress type="success" total={100} current={30} />
      <Progress type="warning" total={100} current={40} />
      <Progress type="error" total={100} current={60} />
    </div>
  );
}
