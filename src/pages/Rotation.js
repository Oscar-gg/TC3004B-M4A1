import logo from "../logo.svg";
import "../App.css";
import { Button } from "../components/Button";
import { RotatingTriangle } from "../components/Triangle";
import { useState } from "react";

export const RotationPage = () => {
  const [direction, setDirection] = useState("right");
  const complementaryDirection = direction === "right" ? "left" : "right";
  const handleClick = () => {
    setDirection(complementaryDirection);
  };

  return (
    <header className="App-header">
      <p className="my-3">
        La figura de la izquierda tiene rotación "{direction}", y la figura de
        la derecha tiene rotación "{complementaryDirection}."
      </p>
      <Button text={"Cambiar dirección"} onClick={handleClick} />
      <div className="flex flex-row items-center justify-center">
        <RotatingTriangle direction={complementaryDirection} />
        {direction === "left" ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <img src={logo} className="App-logo" alt="logo" />
        )}

        <RotatingTriangle direction={direction} />
      </div>
    </header>
  );
};
