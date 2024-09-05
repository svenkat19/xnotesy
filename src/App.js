import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Ghar from "./components/Ghar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Ghar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
