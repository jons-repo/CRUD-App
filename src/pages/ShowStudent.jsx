import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteStudentThunk } from '../redux/student/student.actions';

import { fetchAllCampusesThunk } from "../redux/campus/campus.actions";
const ShowStudent = () => {
    const { studentId } = useParams();
    const allStudents = useSelector((state) => state.student.allStudents);
    //const allCampuses = useSelector((state) => state.campus.allCampuses);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // State for all variables of a student
    const [initialFormValues, setInitialFormValues] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        imageUrl: '',
        gpa: 0.0,
        campusId: 0,
        campus: ''
    });

    // On mount, fetch data and set initial values
    useEffect(() => {
        // Find student with right id
        const student = allStudents.find((student) => student.id === parseInt(studentId));
        if (student) {
            setInitialFormValues({
                id: student.id,
                firstName: student.firstName,
                lastName: student.lastName,
                email: student.email,
                imageUrl: student.imageUrl,
                gpa: student.gpa,
                campusId: student.campusId,
                campus: student.campus.name
            });
        }
    }, [allStudents, studentId]);

    const handleViewCampusClick = () => {
        navigate(`/view-campus/${initialFormValues.campusId}`);
      }
    
      const handleEditClick = () => {
        navigate(`/edit-student/${initialFormValues.id}`);
      };
    
      const handleDeleteClick = () => {
        dispatch(deleteStudentThunk(initialFormValues.id))
        .then(() => {
                navigate('/students');
            })
            .catch((error) => {
                console.log(error);
            });
      };


    return (

        <center>
            <div>
                <h1 class="centered">View Student</h1>
                <div className="card" style={{ width: '40rem' }}>
                    <div >
                        <img
                            src="https://img.freepik.com/free-vector/college-building-educational-institution-banner_1441-3616.jpg?size=626&ext=jpg"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                Student Details
                            </h5>
                            <p class="leftCentered">Student ID: {initialFormValues.id}</p>
                            <p class="leftCentered">First Name: {initialFormValues.firstName}</p>
                            <p class="leftCentered">Last Name:  {initialFormValues.lastName}</p>
                            <p class="leftCentered">Email: {initialFormValues.email}</p>
                            <p class="leftCentered">GPA: {initialFormValues.gpa}</p>
                            <p class="leftCentered">Campus ID: {initialFormValues.campusId}</p>
                            <p class="leftCentered">Campus: {initialFormValues.campus}</p>
                        </div>
                    </div>


                    <div className="card-body">
                        <button className="card-link" onClick={() => handleEditClick(initialFormValues.id)}>
                            Edit
                        </button>
                        <button className="card-link" onClick={() => handleDeleteClick(initialFormValues.id)}>
                            Delete
                        </button>
                        <button className="card-link" onClick={() => handleViewCampusClick(initialFormValues.campusId)}>
                            View Campus
                        </button>
                    </div>
                </div>


                {/* <div class="alert alert-success" role="alert" id="success_message">Success <i class="glyphicon glyphicon-thumbs-up"></i> Success!.</div> */}


            </div >
        </center>


    );
};

export default ShowStudent;