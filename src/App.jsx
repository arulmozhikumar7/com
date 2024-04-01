import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "@pages/LandingPage";
import ProjectPage from "@pages/ProjectPage";
import ProjectDetailPage from "@pages/ProjectDetailPage";
import TeamPage from "@pages/TeamPage";
import DiscussProjectPage from "@pages/DiscussProjectPage";
import NotFoundPage from "@pages/NotFoundPage";

import "@assets/css/styles.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/project" element={<ProjectPage />} />
        <Route exact path="/project/:id" element={<ProjectDetailPage />} />
        <Route exact path="/team" element={<TeamPage />} />
        <Route exact path="/discuss-project" element={<DiscussProjectPage />} />
        <Route path="" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
