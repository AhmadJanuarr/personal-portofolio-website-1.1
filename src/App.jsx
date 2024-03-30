import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import { DarkModeProvider } from "./DarkModeContext";

import "./App.css";
export default function App() {
  return (
    <DarkModeProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
    </DarkModeProvider>
  );
}
