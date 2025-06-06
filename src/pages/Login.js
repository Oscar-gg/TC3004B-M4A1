import "../App.css";
import { Button } from "../components/Button";
import { useState } from "react";

export const Login = ({ login }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onsumbit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Los campos no deben estar vacios");
      return;
    }

    const isLogin = await login({ username, password });
    if (!isLogin) {
      alert("Usuario o contraseña incorrecta");
    }

    return;
  };

  return (
    <>
      <h1 className="text-3xl text-center my-4">Login</h1>
      <form onSubmit={onsumbit}>
        <div className="flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="username"
            className="my-3 p-2 border-2 border-gray-300"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            className="my-3 p-2 border-2 border-gray-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button text={"Login"} className="mb-4" />
        </div>
      </form>
    </>
  );
};
