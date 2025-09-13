import React from "react";
import { BrowserRouter } from "react-router-dom";
import CursorDot from "./Components/Cursor";
import Routes from "./routes/Routes"; // Updated import path

const App = () => {
  return (
    <BrowserRouter>
      <CursorDot />
      <Routes />
    </BrowserRouter>
  );
};

export default App;
