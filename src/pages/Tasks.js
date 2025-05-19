import "../App.css";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import { List } from "../components/List";
import { useNavigate, useParams } from "react-router-dom";

export const TasksPage = ({ isLoggedIn, token }) => {
  const [taskTest, setTaskText] = useState("");

  const [items, setItems] = useState([
    { name: "Tarea 1", id: 1 },
    { name: "Tarea 2", id: 2 },
    { name: "Tarea 3", id: 3 },
  ]);

  useEffect(() => {
    if (isLoggedIn) {
      getItems();
    }
  }, [isLoggedIn]);

  const getItems = async () => {
    console.log("Token", token);
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/items/get`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    const data = await res.json();

    const formatted_items = data.map((item) => {
      return { name: item.name, id: item.id };
    });
    setItems(formatted_items);
  };

  const handleDelete = async (id) => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/items/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      }
    );

    await getItems();
    // setItems(items.filter((item) => item.id !== id));
  };

  const handleCreate = async (name) => {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/items/create`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, price: 0 }),
    });

    await getItems();
    // setItems(items.filter((item) => item.id !== id));
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
              handleCreate(taskTest);
              // setItems([...items, { name: taskTest, id: crypto.randomUUID() }]);
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

export const TaskInfo = ({ isLoggedIn, token }) => {
  const { id } = useParams();

  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  const getItem = async () => {
    console.log("Token", token);
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/items/get/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
      }
    );
    const data = await res.json();

    console.log("Data", data);
    setItem(data);
  };

  useEffect(() => {
    if (isLoggedIn) {
      getItem();
    }
  }, [isLoggedIn]);

  return (
    <div className="App">
      <div className="bg-zinc-400 py-5">
        <div className="flex flex-row items-center justify-center gap-x-3">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="text-lg text-white bg-red-400 p-2 rounded-md"
          >
            Regresar
          </button>
          <h2 className="text-white text-4xl my-3 font-bold">
            Inspeccionando tus tareas!
          </h2>
        </div>
        <div>
          {item ? (
            <>
              <h2 className="text-white text-xl my-3 font-bold">
                Nombre del producto: {item.name}
              </h2>
              <p className="text-white text-xl my-3 font-bold">Id: {item.id}</p>
            </>
          ) : (
            <h2 className="text-white text-4xl my-3 font-bold">
              Cargando producto...
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};
