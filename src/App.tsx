import { FC } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./styles/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

export interface AppPropsInterface {}

const App: FC<AppPropsInterface> = ({}) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
