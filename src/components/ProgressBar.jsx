import React, { useState, useEffect } from "react";

const ProgressBar = ({ value, variant }) => {
  const [progress, setProgress] = useState(0);
  let width = "";
  let height = "";
  let radius_out = "";
  let radius_in = "";

  switch (variant) {
    case "md":
      width = "615px";
      height = "20px";
      radius_out = "6px";
      radius_in = "0px";
      break;
    default:
      width = "300px";
      height = "10px";
      radius_out = "10px";
      radius_in = "10px";
  }

  useEffect(() => {
    // Update the progress whenever the 'value' prop changes
    const calculatedProgress = (value / 100) * 100;
    setProgress(calculatedProgress);
  }, [value]);

  return (
    <div
      style={{
        width: width,
        height: height,
        border: "1px solid #ccc",
        borderRadius: radius_out,
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: "#F94144",
          borderRadius: radius_in,
        }}
        data-in
      />
    </div>
  );
};

export default ProgressBar;