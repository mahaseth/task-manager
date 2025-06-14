import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from "./pages/Dashboard";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Dashboard/>} />
        <Route path = "/add" element = {<AddTask/>} />
        <Route path = "/edit/:id" element = {<EditTask/>} />
      </Routes>
    </Router>
  )
}

export default App
