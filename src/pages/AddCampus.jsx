import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCampusThunk } from '../redux/campus/campus.actions';
import CampusForm from '../components/campusForm';
const AddCampus = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (campusData) => {
    const payload = await dispatch(addCampusThunk(campusData));
    navigate(`/view-campus/${payload.id}`);
  };

  return (
    <center>
      <div>
        <h1 class="centered">Add Campus Page</h1>
        <CampusForm handleFormSubmit={handleFormSubmit} />
      </div>
    </center>
  )
}

export default AddCampus;