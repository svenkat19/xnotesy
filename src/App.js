import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Ghar from "./components/Ghar";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <NoteState>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Ghar />} />
          </Routes>
        </div>
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
