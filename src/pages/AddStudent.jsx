import React from "react";
import { useDispatch } from "react-redux";
import { addStudent, addStudentThunk } from "../redux/student/student.actions";
import StudentForm from "../components/studentForm";

const AddStudent = () => {
    const dispatch = useDispatch();
    const handleFormSubmit = (studentData) => {
        dispatch(addStudentThunk(studentData));
    };

    return (
        <center>
            <div>
            <h2 class="centered">Add Student Page</h2>
            <StudentForm onSubmit={handleFormSubmit}/>
            </div>
        </center>
    );
    
};
export default AddStudent;