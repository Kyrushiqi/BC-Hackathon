import "./App.css";
import Sidebar from "./components/sidebar/sidebar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Technical from "./pages/technical/technical.jsx";
import Behavioral from "./pages/behavioral/behavioral.jsx";

function App() {
  return (
    <div>
      <h1 id="title">Interview Prep AI</h1>

      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="/behavioral" element={<Behavioral />} />
      </Routes>
    </div>
  );
}

export default App;
