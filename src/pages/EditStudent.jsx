import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addStudentThunk } from "../redux/student/student.actions";
import StudentForm from "../components/studentForm";

const EditStudent = () => {

    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [gpa, setGpa] = useState(0.0);
    const [campusId, setCampusId] = useState(0);

    const handleFormSubmit = (event) => {
        event.preventDefault();
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