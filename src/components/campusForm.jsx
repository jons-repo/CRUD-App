import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCampus, updateCampus } from '../redux/campus/campus.actions';

const CampusForm = ({ handleFormSubmit, initialValues }) => {
    const dispatch = useDispatch();

    //Initialize variables useStates
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [nameError, setNameError] = useState(null);

    // Set initial form values if the campusForm is used in EditCampus page
    useEffect(() => {
        if (initialValues) {
            setName(initialValues.name);
            setImageUrl(initialValues.imageUrl);
            setAddress(initialValues.address);
            setDescription(initialValues.description);
        }
    }, [initialValues]);

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

    //handle submit 
    const handleSubmit = (event) => {
        event.preventDefault();

        //error messages
        if (name === "") {
            setNameError("Please enter campus name.")
            return
        }
        //-----------------
        //set up data/json
        const campusData = {
            name,
            imageUrl,
            address,
            description,
            ...(initialValues ? { id: initialValues.id } : {}),
        };

        if (initialValues) {
            dispatch(updateCampus(campusData));
        } else {
            dispatch(addCampus(campusData));
        }
        handleFormSubmit(campusData);
        setName('');
        setImageUrl('');
        setAddress('');
        setDescription('');
    };

    return (
        <div>
            <br />
            <form
                className="form-group"
                style={{
                    backgroundColor: '#e3f2fd',
                    display: 'inline-block',
                    padding: '1rem 2rem',
                    borderRadius: '10px',
                }}
                onSubmit={handleSubmit}
            >
                <center>
                    <legend>
                        <h3>
                            <b>Campus Registration Form</b>
                        </h3>
                    </legend>
                </center>
                <br />

                <div className="formInput">
                    <label htmlFor="name">Name</label>
                    <div>
                        <input
                            type="text"
                            placeholder="Campus Name"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                        />
                        {nameError ? <br /> : null} {nameError}
                    </div>
                </div>
                <div className="formInput">
                    <label htmlFor="imageUrl">Image Url</label>
                    <div>
                        <input
                            type="text"
                            placeholder="http://image.com"
                            id="imageUrl"
                            value={imageUrl}
                            onChange={handleImageUrlChange}
                        />
                    </div>
                </div>
                <div className="formInput">
                    <label htmlFor="address">Address</label>
                    <div>
                        <input
                            type="text"
                            placeholder="Campus Address"
                            id="address"
                            value={address}
                            onChange={handleAddressChange}
                        />
                    </div>
                </div>
                <div className="formInput">
                    <label htmlFor="description">Description</label>
                    <div>
                        <input
                            type="text"
                            placeholder="Campus Description"
                            id="description"
                            value={description}
                            onChange={handleDescriptionChange}
                        />
                    </div>
                </div>

                <br></br>

                <button class="submitButton" type="submit">Submit</button>

            </form>
        </div>
    );
};

export default CampusForm;
