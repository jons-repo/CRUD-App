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
    <Router>
      
        <div className="App">
          
          <nav className="navbar" style={{ backgroundColor: "#e3f2fd" }}>
            <p></p>
            <Link to="/" >Home</Link> 
            <Link to="/campuses" >Campuses</Link>
            {/* <Link to="/campuses/show" >show Campuses</Link> */}
            <Link to="/campuses/add">add campus</Link>
            {/* <Link to="/campuses/edit">edit campus</Link> */}
            
            <Link to="/students" >Students</Link>
            <Link to="/students/add" >Add Students</Link>           
            {/* <Link to="/students/edit" >Edit Students</Link>  */}
            <p></p>
          </nav>

        </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campuses" element={<AllCampuses />} />
        <Route path="/view-campus/:campusId" element={<ShowCampus />} />
        <Route path="/campuses/add" element={<AddCampus />} />
        {/* <Route path="/campuses/edit" element={<EditCampus />} /> */}

        <Route path="/students" element={<AllStudents />} />
        <Route path={`/view-student/:studentId`} element={<ShowStudent />} />
        <Route path="/students/add" element={<AddStudent />} />
        <Route path={`/edit-student/:studentId`} element={<EditStudent />} />
      </Routes>
    </Router> 
    </div>
  );
}

export default App;
