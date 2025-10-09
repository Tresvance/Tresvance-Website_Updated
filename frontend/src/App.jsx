import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Choose from "./pages/Choose";
import JoinUs from "./pages/JoinUs";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Choose />} />
        <Route path="/choose-us" element={<Choose />}/>
        <Route path="/join-us" element={<JoinUs />} />
      </Routes>
    </Router>
  );
}

export default App;
