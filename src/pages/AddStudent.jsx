import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addStudentThunk } from "../redux/student/student.actions";

import StudentForm from "../components/studentForm";

const AddStudent = () => {

    const dispatch = useDispatch();
    
    const handleFormSubmit = (studentData) => {
        dispatch(addStudentThunk(studentData));
    };

    return (

        <center>
            <div>
            <h1 class="centered">Add Student Page</h1>
            <StudentForm handleFormSubmit={handleFormSubmit}/>
            </div>
        </center>

    );
    
};
export default AddStudent;