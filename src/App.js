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

const loginRoute = "http://localhost:5000/login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = async (user) => {
    const isLogin = await fetch(loginRoute, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await isLogin.json();
    if (data.status === 200) {
      return true;
    }

    return data;
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
