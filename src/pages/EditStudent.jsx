import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addStudentThunk } from "../redux/student/student.actions";
import StudentForm from "../components/studentForm";

const EditStudent = (id) => {

    const dispatch = useDispatch();

    const student = useSelector((state) =>
        state.students && state.students.find((student) => student.id === parseInt(id))
    );



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