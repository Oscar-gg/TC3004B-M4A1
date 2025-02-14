import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Button } from "./components/Button";
import { RotatingTriangle } from "./components/Triangle";
import { useState } from "react";
import { List } from "./components/List";

function App() {
  const [direction, setDirection] = useState("right");
  const [taskTest, setTaskText] = useState("");

  const complementaryDirection = direction === "right" ? "left" : "right";
  const [items, setItems] = useState([
    { name: "Tarea 1", id: 1 },
    { name: "Tarea 2", id: 2 },
    { name: "Tarea 3", id: 3 },
  ]);

  const handleClick = () => {
    setDirection(complementaryDirection);
  };

  const handleDelete = (id) => {
    console.log("Deleting item with id", id);
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <div className="bg-zinc-400 py-5">
        <h2 className="text-white text-4xl my-3 font-bold">
          Agrega tus tareas!
        </h2>
        <div className="flex flex-row items-center justify-center gap-x-3">
          <Button
            text={"Agregar tarea"}
            onClick={() => {
              setTaskText("");
              setItems([...items, { name: taskTest, id: items.length + 1 }]);
            }}
          />
          <input
            type="text"
            onChange={(e) => {
              setTaskText(e.target.value);
            }}
            value={taskTest}
            className="p-2 rounded-md bg-white"
          />
        </div>

        <List items={items} ondelete={handleDelete} />
      </div>
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

      <Footer />
    </div>
  );
}

export default App;
