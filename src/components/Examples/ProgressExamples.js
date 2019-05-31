import React, { useState, useEffect } from "react";
import Progress from "../Progress";

export default function ProgressExamples() {
  const [primaryProgress, setPrimaryProgress] = useState(1);
  const [secondaryProgress, setSecondaryProgress] = useState(1);
  const [successProgress, setSuccessProgress] = useState(1);
  const [warningProgress, setWarningProgress] = useState(1);
  const [errorProgress, setErrorProgress] = useState(1);

  useEffect(() => {
    setInterval(() => {
      const rand1 = Math.random() * 10;
      const rand2 = Math.random() * 10;
      const rand3 = Math.random() * 10;
      const rand4 = Math.random() * 10;
      const rand5 = Math.random() * 10;
      setPrimaryProgress(rand1);
      setSecondaryProgress(rand2);
      setSuccessProgress(rand3);
      setWarningProgress(rand4);
      setErrorProgress(rand5);
    }, 5000);
  }, []);

  return (
    <div className="example">
      <div>
        <h3 style={{ textAlign: "left" }}>Progress!</h3>
      </div>
      <Progress type="primary" total={100} current={primaryProgress * 10} />
      <Progress tick type="primary" total={10} current={primaryProgress} />
      <Progress type="secondary" total={100} current={secondaryProgress * 10} />
      <Progress tick type="secondary" total={10} current={secondaryProgress} />
      <Progress type="success" total={100} current={successProgress * 10} />
      <Progress tick type="success" total={10} current={successProgress} />
      <Progress type="warning" total={100} current={warningProgress * 10} />
      <Progress tick type="warning" total={10} current={warningProgress} />
      <Progress type="error" total={100} current={errorProgress * 10} />
      <Progress tick type="error" total={10} current={errorProgress} />
    </div>
  );
}
