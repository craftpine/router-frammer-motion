import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "../pages/Home";
import Team from "../pages/Team";
import Projects from "../pages/Projects";
import Calendar from "../pages/Calendar";
import { AnimatePresence } from "framer-motion";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/project" element={<Projects />} />
        <Route exact path="/calendar" element={<Calendar />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
