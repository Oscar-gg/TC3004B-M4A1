import "../App.css";
import { Button } from "../components/Button";
import { useState } from "react";
import { List } from "../components/List";

export const TasksPage = () => {
  const [taskTest, setTaskText] = useState("");

  const [items, setItems] = useState([
    { name: "Tarea 1", id: 1 },
    { name: "Tarea 2", id: 2 },
    { name: "Tarea 3", id: 3 },
  ]);
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <div className="App">
      <div className="bg-zinc-400 py-5">
        <h2 className="text-white text-4xl my-3 font-bold">
          Agrega tus tareas!
        </h2>
        <div className="flex flex-row items-center justify-center gap-x-3">
          <Button
            text={"Agregar tarea"}
            onClick={() => {
              setTaskText("");
              setItems([...items, { name: taskTest, id: crypto.randomUUID() }]);
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
    </div>
  );
};
