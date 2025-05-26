import "./App.css";
// import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TasksPage, TaskInfo } from "./pages/Tasks";
import { RotationPage } from "./pages/Rotation";
import { Footer } from "./components/Footer";
import ResponsiveAppBar from "./components/Navbar";
import { Login } from "./pages/Login";
// import Signin from "./components/Signin";
import { AuthMiddleware } from "./components/AuthMiddleware";
import { useState } from "react";
import LifeCycle from "./components/Lifecycle";
import useAuth from "./hooks/useAuth";

const pages = ["Login", "Todo", "Rotate!"];

const navigation = {
  Login: "/",
  Todo: "/todo",
  "Rotate!": "/rotate",
};

function App() {
  const [show, setShow] = useState(false);
  const { isLoggedIn, login, token, setIsLoggedIn } = useAuth();

  return (
    <>
      <BrowserRouter>
        {/* <Signin /> */}
        <ResponsiveAppBar
          navigation={navigation}
          pages={pages}
          setIsLoggedIn={setIsLoggedIn}
        />
        <Routes>
          <Route
            element={
              <AuthMiddleware condition={!isLoggedIn} redirectTo="/todo" />
            }
          >
            <Route
              path="/"
              element={
                <Login
                  login={login}
                  setIsLoggedIn={setIsLoggedIn}
                  isLoggedIn={isLoggedIn}
                />
              }
            />
          </Route>
          <Route
            element={<AuthMiddleware condition={isLoggedIn} redirectTo="/" />}
          >
            <Route
              path="/todo"
              element={<TasksPage isLoggedIn={isLoggedIn} token={token} />}
            />
            <Route
              path="/rotate"
              element={<RotationPage isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="/todo/:id"
              element={<TaskInfo isLoggedIn={isLoggedIn} token={token} />}
            />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>

      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide LifeCycle" : "Show LifeCycle"}
      </button>
      {show && <LifeCycle />}
    </>
  );
}

export default App;
