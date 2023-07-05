import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateStudentThunk } from '../redux/student/student.actions';
import StudentForm from '../components/studentForm';

const EditStudent = () => {
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
            });
        }
    }, [allStudents, studentId]);



    const handleFormSubmit = (updatedStudentData) => {

        updatedStudentData.id = studentId;
        dispatch(updateStudentThunk(updatedStudentData))
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
                <h1 class="centered">Edit Student Page</h1>
                <StudentForm initialValues={initialFormValues} handleFormSubmit={handleFormSubmit} />
            </div>
        </center>
    );
};

export default EditStudent;
