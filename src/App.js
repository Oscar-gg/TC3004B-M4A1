import "./App.css";
// import { Header } from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TasksPage } from "./pages/Tasks";
import { RotationPage } from "./pages/Rotation";
import { Footer } from "./components/Footer";
import ResponsiveAppBar from "./components/Navbar";

import Signin from "./components/Signin";

const pages = ["About", "Todo"];

const navigation = {
  Todo: "/todo",
  About: "/",
};

function App() {
  return (
    <BrowserRouter>
      <Signin />
      <ResponsiveAppBar navigation={navigation} pages={pages} />
      <Routes>
        <Route path="/" element={<RotationPage />} />
        <Route path="/todo" element={<TasksPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
