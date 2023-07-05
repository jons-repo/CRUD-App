import React from 'react';
import { useDispatch } from 'react-redux';
import { addCampusThunk } from '../redux/campus/campus.actions';
import CampusForm from '../components/campusForm';
const AddCampus = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = (campusData) => {
    dispatch(addCampusThunk(campusData));
  };

  return (
    <center>
            <div>
            <h1 class="centered">Add Campus Page</h1>
            <CampusForm handleFormSubmit={handleFormSubmit}/>
            </div>
        </center>
  )
}

export default AddCampus;
