import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllStudentsThunk } from "../redux/student/student.actions";

const CampusForm = ({handleFormSubmit}) => {
    const allStudents = useSelector((state) => state.student.allStudents);
    const dispatch = useDispatch();

    //Initialize useStates
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");


    const fetchAllStudents = () => {
        return dispatch(fetchAllStudentsThunk());
    };

    useEffect(() => {
        fetchAllStudents();
    }, []);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleImageUrlChange = (event) => {
        setImageUrl(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmitChange = (event) => {
        event.preventDefault();
        
        const campusData = {
            name,
            imageUrl,
            address,
            description
        };
        console.log(campusData);
        handleFormSubmit(campusData);

        setName("");
        setAddress("");
        setDescription("");
        setImageUrl("");

    };

    return (
        <div>
            <br></br>
            <form className="form-group" style={{ backgroundColor: "#e3f2fd", display: "inline-block", padding:" 1rem 2rem", borderRadius: "10px"}} onSubmit={handleSubmitChange}>

                <center><legend><h3><b>Campus Form</b></h3></legend></center><br />


                <div class="formInput">
                    <label htmlFor="name" >Campus Name </label>
                    <div>
                        <input type="text" placeholder="Campus Name" id="name" value={name} onChange={handleNameChange} />
                    </div>
                </div>
                <div class="formInput">
                    <label htmlFor="address">Address </label>
                    <div>
                        <input type="text" placeholder="Address" id="address" value={address} onChange={handleAddressChange} />
                    </div>
                </div>
                <div class="formInput">
                    <label htmlFor="description">Description </label>
                    <div>
                        <input type="text" placeholder="Description" id="description" value={description} onChange={handleDescriptionChange} />
                    </div>
                </div>
                <div class="formInput">
                    <label htmlFor="imageUrl">Image Url </label>
                    <div>
                        <input type="text" placeholder="http://image.com" id="imageUrl" value={imageUrl} onChange={handleImageUrlChange} />

                    </div>
                </div>
                <br></br>

                <button class="button" type="submit">Submit</button>


            </form>


            {/* <div class="alert alert-success" role="alert" id="success_message">Success <i class="glyphicon glyphicon-thumbs-up"></i> Success!.</div> */}

        </div>
    );
};

export default CampusForm;