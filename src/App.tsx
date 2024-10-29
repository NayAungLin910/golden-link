import { FC } from "react";
import Navbar from "./components/Navbar/Navbar";
import "./styles/global.css";

export interface AppPropsInterface {}

const App: FC<AppPropsInterface> = ({}) => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default App;
