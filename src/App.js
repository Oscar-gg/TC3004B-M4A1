import "./App.css";
// import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TasksPage } from "./pages/Tasks";
import { RotationPage } from "./pages/Rotation";
import { Footer } from "./components/Footer";
import ResponsiveAppBar from "./components/Navbar";
import { Login } from "./pages/Login";
// import Signin from "./components/Signin";
import { AuthMiddleware } from "./components/AuthMiddleware";
import { useState } from "react";

const pages = ["Login", "Todo", "Rotate!"];

const navigation = {
  Login: "/",
  Todo: "/todo",
  "Rotate!": "/rotate",
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (user) => {
    let isLogin = false;

    if (user.username === "oscar" && user.password === "123") {
      isLogin = true;
    }
    return isLogin;
  };

  return (
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
          <Route path="/todo" element={<TasksPage isLoggedIn={isLoggedIn} />} />
          <Route
            path="/rotate"
            element={<RotationPage isLoggedIn={isLoggedIn} />}
          />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
