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

        const studentData = {
            firstName,
            lastName,
            email,
            imageUrl,
            gpa,
            campusId
        };
        console.log(studentData);
        onSubmit(studentData);

        setFirstName("");
        setLastName("");
        setEmail("");
        setImageUrl("");
        setGpa(0.0);
        setCampusID(0);
    };

    return (
        <div>
            <form class="addForm" onSubmit={handleSubmitChange}>

                <center><legend><h3><b>Student Registration Form</b></h3></legend></center><br />


                <div class="formInput">
                    <label htmlFor="firstName" >First Name: </label>
                    <div>
                        <input type="text" placeholder="FirstName" id="firstName" value={firstName} onChange={handleFirstNameChange} />
                    </div>
                </div>
                <div class="formInput">
                    <label htmlFor="lastName">Last Name: </label>
                    <div>
                        <input type="text" placeholder="LastName" id="lastName" value={lastName} onChange={handleLastNameChange} />
                    </div>
                </div>
                <div class="formInput">
                    <label htmlFor="email">Email: </label>
                    <div>
                        <input type="text" placeholder="fake@gmail.com" id="email" value={email} onChange={handleEmailChange} />
                    </div>
                </div>
                <div class="formInput">
                    <label htmlFor="imageUrl">Image Url: </label>
                    <div>
                        <input type="text" placeholder="http://image.com" id="imageUrl" value={imageUrl} onChange={handleImageUrlChange} />

                    </div>
                </div>
                <div class="formInput">
                    <label htmlFor="gpa">GPA: </label>
                    <div>
                        <input type="number" step="0.1" id="gpa" value={gpa} onChange={handleGpaChange} />
                    </div>
                </div>
                <div class="formInput">
                    <label htmlFor="campus id">Campus ID: </label>
                    <div>
                        <input type="number" id="campuId" value={campusId} onChange={handleCampusIdChange} />
                    </div>
                </div>
                <br></br>

                <button type="submit">Submit</button>


            </form>


            <div class="container">

                <form class="well form-horizontal" action=" " method="post" id="contact_form">
                    <fieldset>

                        {/* <!-- Form Name --> */}

                        {/* <!-- Text input--> */}

                        <div >
                            <label >First Name</label>
                            <div >
                                <div >
                                    <input name="first_name" placeholder="First Name" type="text" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- Text input--> */}

                        <div class="form-group">
                            <label class="col-md-4 control-label" >Last Name</label>
                            <div class="col-md-4 inputGroupContainer">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                    <input name="last_name" placeholder="Last Name" class="form-control" type="text" />
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <label class="col-md-4 control-label">Department / Office</label>
                            <div class="col-md-4 selectContainer">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
                                    <select name="department" class="form-control selectpicker">
                                        <option value="">Select your Department/Office</option>
                                        <option>Department of Engineering</option>
                                        <option>Department of Agriculture</option>
                                        <option >Accounting Office</option>
                                        <option >Tresurer's Office</option>
                                        <option >MPDC</option>
                                        <option >MCTC</option>
                                        <option >MCR</option>
                                        <option >Mayor's Office</option>
                                        <option >Tourism Office</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Text input--> */}

                        <div class="form-group">
                            <label class="col-md-4 control-label">Username</label>
                            <div class="col-md-4 inputGroupContainer">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                    <input name="user_name" placeholder="Username" class="form-control" type="text" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- Text input--> */}

                        <div class="form-group">
                            <label class="col-md-4 control-label" >Password</label>
                            <div class="col-md-4 inputGroupContainer">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                    <input name="user_password" placeholder="Password" class="form-control" type="password" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- Text input--> */}

                        <div class="form-group">
                            <label class="col-md-4 control-label" >Confirm Password</label>
                            <div class="col-md-4 inputGroupContainer">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                    <input name="confirm_password" placeholder="Confirm Password" class="form-control" type="password" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- Text input--> */}
                        <div class="form-group">
                            <label class="col-md-4 control-label">E-Mail</label>
                            <div class="col-md-4 inputGroupContainer">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                                    <input name="email" placeholder="E-Mail Address" class="form-control" type="text" />
                                </div>
                            </div>
                        </div>


                        {/* <!-- Text input--> */}

                        <div class="form-group">
                            <label class="col-md-4 control-label">Contact No.</label>
                            <div class="col-md-4 inputGroupContainer">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="glyphicon glyphicon-earphone"></i></span>
                                    <input name="contact_no" placeholder="(639)" class="form-control" type="text" />
                                </div>
                            </div>
                        </div>

                        {/* <!-- Select Basic --> */}

                        {/* <!-- Success message --> */}
                        <div class="alert alert-success" role="alert" id="success_message">Success <i class="glyphicon glyphicon-thumbs-up"></i> Success!.</div>

                        {/* <!-- Button --> */}
                        <div class="form-group">
                            <label class="col-md-4 control-label"></label>
                            <div class="col-md-4"><br />
                            </div>
                        </div>

                    </fieldset>
                </form>
            </div>
        </div>


    );
};

export default StudentForm;