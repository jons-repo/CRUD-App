import React from 'react';
import { useNavigate } from 'react-router-dom';

const CampusCard = ({ campusCard }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/campuses/edit/${campusCard.id}`);
  };

  return (
    <div className="button">
      <div className="card" style={{ width: '25rem' }}>
        <div className="cardButton">
          <img
            src="https://img.freepik.com/free-vector/college-building-educational-institution-banner_1441-3616.jpg?size=626&ext=jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{campusCard.name}</h5>
            <p className="card-text">Total Students: {campusCard.students.length}</p>
          </div>
        </div>

        <div className="card-body">
          <button onClick={handleEditClick} className="card-link">
            Edit
          </button>
          <button className="card-link">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampusCard;
