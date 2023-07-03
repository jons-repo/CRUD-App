import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addStudentThunk } from "../redux/student/student.actions";
import StudentForm from "../components/studentForm";

const EditStudent = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div>
        <h2>Edit Student Page</h2>
        <StudentForm/> 
        </div>


    );
};

export default EditStudent;