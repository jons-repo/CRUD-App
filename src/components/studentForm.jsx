import React, { useState } from "react";
import { useEffect } from "react";
const StudentForm = ({ handleFormSubmit, initialValues, allCampuses }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [gpa, setGpa] = useState(0.0);
    const [campusId, setCampusID] = useState(0);
    const [emailError, setEmailError] = useState('');

    //validate Email
    const validateEmail = (input) => {
        //check here for regex format > https://mailtrap.io/blog/validate-emails-in-react/
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailRegex.test(input);
    }

    // Set initial form values
    useEffect(() => {
        if (initialValues) {
            setFirstName(initialValues.firstName);
            setLastName(initialValues.lastName);
            setEmail(initialValues.email);
            setImageUrl(initialValues.imageUrl);
            setGpa(initialValues.gpa);
            setCampusID(initialValues.campusId);
        }
    }, [initialValues]);

    // Set initial form values
    useEffect(() => {
        if (initialValues) {
            setFirstName(initialValues.firstName);
            setLastName(initialValues.lastName);
            setEmail(initialValues.email);
            setImageUrl(initialValues.imageUrl);
            setGpa(initialValues.gpa);
            setCampusID(initialValues.campusId);
        }
    }, [initialValues]);

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
        console.log(firstName);
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

        if(!validateEmail(email)){
            setEmailError("Please enter a valid email address.");
            return;
        }

        const studentData = {
            firstName,
            lastName,
            email,
            imageUrl,
            gpa,
            campusId,
            ...(initialValues ? {id : initialValues.id} : {}) // object spread syntax to include id only when edit data
        };
        console.log(studentData);
        handleFormSubmit(studentData);

        setFirstName("");
        setLastName("");
        setEmail("");
        setImageUrl("");
        setGpa(0.0);
        setCampusID(0);
        setEmailError("");
    };

    return (

        <div>
            <br></br>
            <form className="form-group" style={{ backgroundColor: "#e3f2fd", display: "inline-block", padding:" 1rem 2rem", borderRadius: "10px"}} onSubmit={handleSubmitChange}>

                <center><legend><h3><b>Student Registration Form</b></h3></legend></center><br />


                <div class="formInput">
                    <label htmlFor="firstName" >First Name </label>
                    <div>
                        <input type="text" placeholder="FirstName" id="firstName" value={firstName} onChange={handleFirstNameChange} />
                    </div>
                </div>
                <div class="formInput">
                    <label htmlFor="lastName">Last Name </label>
                    <div>
                        <input type="text" placeholder="LastName" id="lastName" value={lastName} onChange={handleLastNameChange} />
                    </div>
                </div>
                <div class="formInput">
                    <label htmlFor="email">Email </label>
                    <div>
                        <input type="text" placeholder="fake@gmail.com" id="email" value={email} onChange={handleEmailChange} />
                    </div>
                </div>
                <div class="formInput">
                    <label htmlFor="imageUrl">Image Url </label>
                    <div>
                        <input type="text" placeholder="http://image.com" id="imageUrl" value={imageUrl} onChange={handleImageUrlChange} />

                    </div>
                </div>
                <div class="formInput">
                    <label htmlFor="gpa">GPA </label>
                    <div>
                        <input type="number" step="0.1" id="gpa" value={gpa} onChange={handleGpaChange} />
                    </div>
                </div>
                <div class="formInput">
                    <label htmlFor="campus id">Campus: </label>
                    <select id="campusId" value={campusId} onChange={handleCampusIdChange}>
                      <option value = "">Select Campus</option>
                      {allCampuses 
                      ? allCampuses.map((campus) => {return(<option key={campus.id} value={campus.id}>{campus.name}</option>)})
                      : "error getting data"};
                    </select>
                </div>
                <br></br>

                <button class="button" type="submit">Submit</button>


            </form>


            {/* <div class="alert alert-success" role="alert" id="success_message">Success <i class="glyphicon glyphicon-thumbs-up"></i> Success!.</div> */}


        </div>

    );
};

export default StudentForm;