import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateCampusThunk } from '../redux/campus/campus.actions';
import CampusForm from '../components/campusForm';

const EditCampus = () => {
    const { campusId } = useParams();
    const allCampuses = useSelector((state) => state.campus.allCampuses);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [initialFormValues, setInitialFormValues] = useState({
        name: '',
        address: '',
        description: '',
        imageUrl: '',
    });

    useEffect(() => {
        const campus = allCampuses.find((campus) => campus.id === parseInt(campusId));
        if (campus) {
            setInitialFormValues({
                name: campus.name,
                address: campus.address,
                description: campus.description,
                imageUrl: campus.imageUrl,
            });
        }
    }, [allCampuses, campusId]);

    const handleFormSubmit = (updatedCampusData) => {
        updatedCampusData.id = campusId;
        dispatch(updateCampusThunk(updatedCampusData))
            .then(() => {
                navigate('/campuses');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <h2>Edit Campus Page</h2>
            <CampusForm initialFormValues={initialFormValues} handleFormSubmit={handleFormSubmit} />
        </div>
    );
};

export default EditCampus;
