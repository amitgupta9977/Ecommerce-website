import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import CreateDepartment from "./components/CreateDepartment";
import EditDepartment from "./components/EditDepartment";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-department" element={<CreateDepartment />} />
          <Route path="/edit-department" element={<EditDepartment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
