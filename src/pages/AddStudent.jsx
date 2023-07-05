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
        //tested allCampuses flow
        <div>
            <h2>Add Student page</h2>
            <StudentForm handleFormSubmit={handleFormSubmit}/>
        </div>
    );
};
export default AddStudent;