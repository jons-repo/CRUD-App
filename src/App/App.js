import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
// Pages
import Home from "../pages/Home";

import AllCampuses from "../pages/Campuses";
import ShowCampus from "../pages/Campuses";
import AddCampus from "../pages/Campuses";
import EditCampus from "../pages/Campuses";

import AllStudents from "../pages/Students";
import ShowStudent from "../pages/Students";
import AddStudent from "../pages/Students";
import EditStudent from "../pages/Students";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route> path="/" element={<Home />} </Route>
        
        <Route> path="/campuses" element={<AllCampuses />} </Route>
        <Route> path="/campuses/show" element={<ShowCampus />} </Route>
        <Route> path="/campuses/add" element={<AddCampus />} </Route>
        <Route> path="/campuses/edit" element={<EditCampus />} </Route>

        <Route> path="/students" element={<AllStudents />} </Route>
        <Route> path="/students/show" element={<ShowStudent />} </Route>
        <Route> path="/students/add" element={<AddStudent />} </Route>
        <Route> path="/students/edit" element={<EditStudent />} </Route>
      </Routes>
    </Router>
  );
}

export default App;
