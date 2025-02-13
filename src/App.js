import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Button } from "./components/Button";
import { RotatingTriangle } from "./components/Triangle";
import { useState } from "react";

function App() {
  const [direction, setDirection] = useState("right");
  const complementaryDirection = direction === "right" ? "left" : "right";

  const handleClick = () => {
    setDirection(complementaryDirection);
  };

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <p className="my-3">
          La figura de la izquierda tiene rotación "{direction}", y la figura de
          la derecha tiene rotación "{complementaryDirection}."
        </p>
        <Button onClick={handleClick} />
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

      <Footer />
    </div>
  );
}

export default App;
