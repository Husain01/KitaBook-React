import { Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App main-container">
        <Navbar></Navbar>       
      <Routes>
        <Route path="/mock" element={<Mockman/>}/>
      </Routes>
    </div>
  );
}

export default App;
