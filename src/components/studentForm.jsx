import React, { useState } from "react";
const StudentForm = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [gpa, setGpa] = useState(0.0);
    const [campusId, setCampusID] = useState(0);

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleImageUrlChange = (event) => {
        setImageUrl(event.target.value);
    };

    const handleGpaChange = (event) => {
        setGpa(event.target.value);
    };

    const handleCampusIdChange = (event) => {
        setCampusID(event.target.value);
    };
    
    const handleSubmitChange = (event) => {
        event.preventDefault();

        const studentData = {
            firstName,
            lastName,
            email,
            imageUrl,
            gpa,
            campusId
        };

        onSubmit(studentData);

        setFirstName("");
        setLastName("");
        setEmail("");
        setImageUrl("");
        setGpa(0.0);
        setCampusID(0);
    };

    return (
        <form onSubmit={handleSubmitChange}>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type = "text" id= "firstName" value={firstName} onChange={handleFirstNameChange}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default StudentForm;