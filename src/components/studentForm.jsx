import React, { useState } from "react";
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
            campusId
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
        <form onSubmit={handleSubmitChange}>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" value={email} onChange={handleEmailChange} /> {emailError}
                
            </div>
            <div>
                <label htmlFor="imageUrl">Image Url: </label>
                <input type="text" id="imageUrl" value={imageUrl} onChange={handleImageUrlChange} />
            </div>
            <div>
                <label htmlFor="gpa">GPA: </label>
                <input type="number" step="0.1" id="gpa" value={gpa} onChange={handleGpaChange} />
            </div>
            <div>
                <label htmlFor="campus id">Campus : </label>
                <select id="campusId" value={campusId} onChange={handleCampusIdChange}>
                    <option value = "">Select Campus</option>
                    {allCampuses 
                    ? allCampuses.map((campus) => {return(<option key={campus.id} value={campus.id}>{campus.name}</option>)})
                    : "error getting data"}
                </select> 
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default StudentForm;