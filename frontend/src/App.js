import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RequestRepairPage from "./pages/RequestRepairPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/request-repair" element={<RequestRepairPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;