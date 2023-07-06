import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCampusThunk } from '../redux/campus/campus.actions';

const CampusCard = ({ campusCard }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleViewClick = () => {
    navigate(`/view-campus/${campusCard.id}`);
  }

  const handleEditClick = () => {
    navigate(`/campuses/edit/${campusCard.id}`);
  };

  const handleDeleteClick = () => {
    dispatch(deleteCampusThunk(campusCard.id))
      .then(() => {
        navigate('/campuses');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="card" style={{ width: '25rem' }}>
        <div className="cardButton" onClick={() => handleViewClick(campusCard.id)}>
          <img
            src="https://img.freepik.com/free-vector/college-building-educational-institution-banner_1441-3616.jpg?size=626&ext=jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{campusCard.name}</h5>
            <p className="card-text">Total Students: {campusCard.students ? campusCard.students.length : 0}</p>
          </div>
        </div>
        <div className="card-body">
          <button onClick={handleEditClick} className="card-link">
            Edit
          </button>
          <button onClick={handleDeleteClick} className="card-link">
            Delete
          </button>
        </div>
      </div>

    </div>
  );
};

export default CampusCard;
