import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addStudentThunk } from "../redux/student/student.actions";
import StudentForm from "../components/studentForm";

const EditStudent = () => {

    const dispatch = useDispatch();

    const { id } = useParams();
    const students = useSelector((state) => state.students);
    const student = students.find((student) => student.id === parseInt(id));

    console.log("id:", id);
    console.log("students:", students);
    console.log("student:", student);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [gpa, setGpa] = useState(0.0);
    const [campusId, setCampusId] = useState(0);

    useEffect(() => {
        if (student) {
            setFirstName(student.firstName);
            setLastName(student.lastName);
            setEmail(student.email);
            setImageUrl(student.imageUrl);
            setGpa(student.gpa);
            setCampusId(student.campusId);
        }
    }, [student]);

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const updatedStudentData = {
            id: student.id,
            firstName,
            lastName,
            email,
            imageUrl,
            gpa,
            campusId,
        };

        dispatch(addStudentThunk(updatedStudentData));
    };

    return (
        <div>
        <h2>Edit Student Page</h2>
        <StudentForm 
            firstName={firstName}
            lastName={lastName}
            email={email}
            imageUrl={imageUrl}
            gpa={gpa}
            campusId={campusId}
            onSubmit={handleFormSubmit} /> 
        </div>


    );
};

export default EditStudent;