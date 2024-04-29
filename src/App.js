import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChartsAndMaps from "./components/ChartsAndMaps";
import Contacts from "./components/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/chartsandmaps" element={<ChartsAndMaps />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
