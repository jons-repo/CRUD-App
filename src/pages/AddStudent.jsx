import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, addStudentThunk } from "../redux/student/student.actions";
import { fetchAllCampusesThunk } from "../redux/campus/campus.actions";
import StudentForm from "../components/studentForm";

const AddStudent = () => {

    const allCampuses = useSelector((state) => state.campus.allCampuses)
    const dispatch = useDispatch();
    const fetchAllCampuses = () => {
        return dispatch(fetchAllCampusesThunk());
    }

    useEffect(() => {
        fetchAllCampuses();
    }, [])
    const handleFormSubmit = (studentData) => {
        dispatch(addStudentThunk(studentData));
    };

    return (
        //tested allCampuses flow
        <div>
            <h2>Add Student page</h2>
            <StudentForm allCampuses={allCampuses} onSubmit={handleFormSubmit}/>
        </div>
    );
};
export default AddStudent;