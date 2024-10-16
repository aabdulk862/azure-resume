import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Employment from "./components/employment";
import Education from "./components/Education";
import References from "./components/references";
import Skills from "./components/skills";
import Projects from "./components/projects";
import resumeData from './data/resumeData';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Contact data={resumeData} />} />
        <Route path="/employment" element={<Employment data={resumeData.work} />} />
        <Route path="/education" element={<Education data = {resumeData.education} />} />
        <Route path="/skills" element={<Skills data={resumeData.skills} />} />
        <Route path="/projects" element={<Projects data={resumeData.projects} />} />
        <Route path="/references" element={<References data={resumeData.references} />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
