import "./App.css";

import Header from "./component/Header/Header";
import Login from "./component/Login/Login";
import Data from "./component/TableData/Data";
import Report from "./component/Report/Report";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Data />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </div>
  );
}

export default App;
