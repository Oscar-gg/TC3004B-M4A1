import { useState, useEffect } from "react";

export const RotatingTriangle = ({ direction }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) =>
        direction === "right" ? prevRotation - 10 : prevRotation + 10
      );
    }, 200);
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div
      style={{
        width: 0,
        height: 0,
        borderLeft: "50px solid transparent",
        borderRight: "50px solid transparent",
        borderBottom: "100px solid blue",
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.5s",
      }}
    ></div>
  );
};
