import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteStudentThunk } from '../redux/student/student.actions';
import ListStudents from "../components/studentListing";

import { fetchAllCampusesThunk } from "../redux/campus/campus.actions";
const ShowCampus = () => {
    const { campusId } = useParams();
    // const allStudents = useSelector((state) => state.student.allCampuses);
    const allCampuses = useSelector((state) => state.campus.allCampuses);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // State for all variables of a student
    const [initialFormValues, setInitialFormValues] = useState({
        id: '',
        name: '',
        imageUrl: '',
        address: '',
        description: ''
    });

    // On mount, fetch data and set initial values
    useEffect(() => {
        // Find student with right id
        const campus = allCampuses.find((student) => student.id === parseInt(campusId));
        if (campus) {
            setInitialFormValues({
                id: campus.id,
                name: campus.name,
                imageUrl: campus.imageUrl,
                address: campus.address,
                description: campus.description
            });
        }
    }, [allCampuses, campusId]);

    const handleViewCampusClick = () => {
        // navigate(`/view-campus/${initialFormValues.campusId}`);
    }

    const handleEditClick = () => {
        // navigate(`/edit-campuse/${initialFormValues.id}`);
    };

    const handleDeleteClick = () => {
        // dispatch(deleteStudentThunk(initialFormValues.id))
        // .then(() => {
        //         navigate('/students');
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    };


    return (

        <center>
            <div>
                <h1 class="centered">View Campus</h1>
                <div className="card" style={{ width: '40rem' }}>
                    <div >
                        <img
                            src="https://img.freepik.com/free-vector/college-building-educational-institution-banner_1441-3616.jpg?size=626&ext=jpg"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                Campus Details
                            </h5>
                            <p class="leftCentered">Campus ID: {initialFormValues.id}</p>
                            <p class="leftCentered">Campus Name: {initialFormValues.name}</p>
                            <p class="leftCentered">Campus Address:  {initialFormValues.address}</p>
                            <p class="leftCentered">Campus Description: {initialFormValues.description}</p>
                        </div>
                    </div>


                    <div className="card-body">
                        <button className="card-link" onClick={() => handleEditClick(initialFormValues.id)}>
                            Edit
                        </button>
                        <button className="card-link" onClick={() => handleDeleteClick(initialFormValues.id)}>
                            Delete
                        </button>
                    </div>
                </div>
                <h1 class="centered">Students</h1>
                <div class="cards">
                    <ListStudents list={[]} />
                </div>


                {/* <div class="alert alert-success" role="alert" id="success_message">Success <i class="glyphicon glyphicon-thumbs-up"></i> Success!.</div> */}


            </div >
        </center>


    );
};

export default ShowCampus;