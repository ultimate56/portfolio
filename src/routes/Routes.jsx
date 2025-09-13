import { Routes as RouterRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import E404 from "../pages/E404";
import Contact from "../pages/Contact";
import Project from "../pages/Project";

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<E404 />} />
    </RouterRoutes>
  );
};

export default Routes;
