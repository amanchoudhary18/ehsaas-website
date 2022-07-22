import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import EventCalendar from "./pages/EventCalendar";
import Exebody from "./pages/Exebody";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/calendar" element={<EventCalendar />}></Route>
        <Route path="/exebody" element={<Exebody />}></Route>
      </Routes>
    </div>
  );
}

export default App;
