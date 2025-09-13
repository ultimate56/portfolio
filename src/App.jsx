import React from "react";
<<<<<<< HEAD

import About from "./pages/About";
=======
import { BrowserRouter } from "react-router-dom";
import CursorDot from "./Components/Cursor";
import Routes from "./routes/Routes"; // Updated import path
import Layout from "./layout/Layout";
>>>>>>> b97ec97e47f33431c36d09db6266cc7ae7c5bb2f

const App = ({ children }) => {
  return (
<<<<<<< HEAD
    <div>
      

      <About/>
    </div>
=======
    <BrowserRouter>
      <CursorDot />
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
>>>>>>> b97ec97e47f33431c36d09db6266cc7ae7c5bb2f
  );
};

export default App;
