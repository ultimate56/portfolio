import React from "react";
import { BrowserRouter } from "react-router-dom";
import CursorDot from "./Components/Cursor";
import Routes from "./routes/Routes"; // Updated import path
import Layout from "./layout/Layout";

const App = ({ children }) => {
  return (
    <BrowserRouter>
      <CursorDot />
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
