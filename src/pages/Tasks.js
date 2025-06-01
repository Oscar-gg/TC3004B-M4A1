import "../App.css";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import { List } from "../components/List";
import { useNavigate, useParams } from "react-router-dom";
import useItems from "../hooks/useItems";

export const TasksPage = ({ token, isLoggedIn }) => {
  const [taskTest, setTaskText] = useState("");

  const { items, getItems, createItem, deleteItem } = useItems({ token });
  useEffect(() => {
    if (isLoggedIn) {
      getItems();
    }
  }, [isLoggedIn, getItems]);

  return (
    <div className="App">
      <div className="bg-zinc-400 py-5">
        <h2 className="text-white text-4xl my-3 font-bold">
          Agrega tus tareas!
        </h2>
        <h3 className="text-white text-2xl mt-3 mb-12 font-bold">
          Haz clic en el nombre de la tarea para inspeccionarla
        </h3>
        <div className="flex flex-row items-center justify-center gap-x-3">
          <Button
            text={"Agregar tarea"}
            onClick={() => {
              setTaskText("");
              createItem(taskTest);
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

        <List items={items} ondelete={deleteItem} />
      </div>
    </div>
  );
};

export const TaskInfo = ({ isLoggedIn, token }) => {
  const { id } = useParams();
  const { item, getItem } = useItems({ token });

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      getItem(id);
    }
  }, [isLoggedIn, id, getItem]);

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
              <p className="text-white text-xl my-3 font-bold">
                Precio: {item?.price ?? "Sin precio"}
              </p>
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
