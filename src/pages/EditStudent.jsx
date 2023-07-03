import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateStudentThunk, fetchAllStudentsThunk } from '../redux/student/student.actions';
import StudentForm from '../components/studentForm';

const EditStudent = ({ student }) => {
    console.log(student.id);
    const dispatch = useDispatch();
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
        dispatch(fetchAllStudentsThunk());
        setInitialFormValues({
            firstName: student.firstName ,
            lastName: student.lastName,
            email: student.email ,
            imageUrl: student.imageUrl,
            gpa: student.gpa ,
            campusId: student.campusId,
        });
    }, []);

    // Submit form and update data
    const handleFormSubmit = (updatedStudentData) => {
        dispatch(updateStudentThunk(updatedStudentData));
    };

    return (
        <div>
            <h2>Edit Student Page</h2>
            <StudentForm initialValues={initialFormValues} onSubmit={handleFormSubmit} />
        </div>
    );
};

export default EditStudent;
