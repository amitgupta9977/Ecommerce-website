import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Todo from "./components/Todo";
import NotFound from "./components/NotFound";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/todos" element={<Todo />} />
        <Route element={<NotFound />} />{" "}
      </Routes>
    </Router>
  );
};

export default App;
