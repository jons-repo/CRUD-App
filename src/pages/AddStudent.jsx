import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addStudentThunk } from "../redux/student/student.actions";

import StudentForm from "../components/studentForm";

const AddStudent = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleFormSubmit = async (studentData) => {
        const payload = await dispatch(addStudentThunk(studentData));
        navigate(`/view-student/${payload.id}`);
    };

    return (

        <center>
            <div>
                <h1 class="centered">Add Student Page</h1>
                <StudentForm handleFormSubmit={handleFormSubmit} />
            </div>
        </center>

    );

};
export default AddStudent;