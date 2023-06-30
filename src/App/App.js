import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Pages
import Home from "../pages/Home";

import AllCampuses from "../pages/AllCampuses";
import ShowCampus from "../pages/ShowCampus";
import AddCampus from "../pages/AddCampus";
import EditCampus from "../pages/EditCampus";

import AllStudents from "../pages/AllStudents";
import ShowStudent from "../pages/ShowStudent";
import AddStudent from "../pages/AddStudent";
import EditStudent from "../pages/EditStudent";

function App() {
  return (
    <div>
     <AllCampuses />

    {/* <Router>
        <div className="App">
           Navigation 
          <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd", paddingLeft: "15%" }}>
            <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
            <Link to="/campuses" style={{ marginRight: '10px' }}>Campuses</Link>
            <Link to="/campuses/show" style={{ marginRight: '10px' }}>show Campuses</Link>
            <Link to="/campuses/add" style={{ marginRight: '10px' }}>add campus</Link>
            <Link to="/campuses/edit" style={{ marginRight: '10px' }}>edit campus</Link>
            
            <Link to="/students" style={{ marginRight: '10px' }}>Students</Link>
            <Link to="/campuses/show" style={{ marginRight: '10px' }}>Show Students</Link>           
            <Link to="/students/add" style={{ marginRight: '10px' }}>Add Students</Link>           
            <Link to="/students/edit" style={{ marginRight: '10px' }}>Edit Students</Link> 
            
          </nav>
        </div>
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
    </Router>  */}
    </div>
  );
}

export default App;
