import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
import { useEffect, useState } from "react";
import PrivateRoute from "./guard/PrivateRoute";
import LoginForm from "./pages/LoginForm";

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn === "true") {
      setisLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setisLoggedIn(true);
    localStorage.setItem("loggedIn", "true");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            !isLoggedIn ? (
              <LoginForm onLogin={handleLogin} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <AddTask />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <EditTask />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
