import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateCampusThunk, fetchAllCampusesThunk } from '../redux/campus/campus.actions';
import CampusForm from '../components/campusForm';

const EditCampus = () => {
    const { campusId } = useParams();
    const allCampuses = useSelector((state) => state.campus.allCampuses);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [initialFormValues, setInitialFormValues] = useState({
        id: '',
        name: '',
        address: '',
        description: '',
        imageUrl: '',
    });

    useEffect(() => {
        const campus = allCampuses.find((campus) => campus.id === parseInt(campusId));
        if (campus) {
            setInitialFormValues({
                id: campus.id,
                name: campus.name,
                address: campus.address,
                description: campus.description,
                imageUrl: campus.imageUrl,
            });
        }
    }, [allCampuses, campusId]);

    useEffect(() => {
        dispatch(fetchAllCampusesThunk());
    }, [dispatch]);

    const handleFormSubmit = (updatedCampusData) => {
        dispatch(updateCampusThunk(updatedCampusData))
            .then(() => {
                navigate('/campuses');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <center>
            <div>
            <h1 class="centered">Edit Campus Page</h1>
            <CampusForm initialValues={initialFormValues} handleFormSubmit={handleFormSubmit} />
        </div>  
        </center>

    );
};

export default EditCampus;