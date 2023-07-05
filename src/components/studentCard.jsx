import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteStudentThunk } from '../redux/student/student.actions';

const StudentCard = ({ studentCard, campusName2 }) => {
  const campusName = studentCard.campus ? studentCard.campus.name : campusName2 ? campusName2 : 'none';
  console.log("campuse name: ", campusName2);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleViewClick = () => {
    navigate(`/view-student/${studentCard.id}`);
  }

  const handleEditClick = () => {
    navigate(`/edit-student/${studentCard.id}`);
  };

  const handleDeleteClick = () => {
    dispatch(deleteStudentThunk(studentCard.id));
    if (campusName2) {
      setTimeout(() => {
        window.location.reload();
      }, 200);
    };
  }

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <div class="cardButton" onClick={() => handleViewClick(studentCard.id)}>
          <img
            src="https://img.freepik.com/free-vector/college-building-educational-institution-banner_1441-3616.jpg?size=626&ext=jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {studentCard.firstName} {studentCard.lastName}
            </h5>
            <p className="card-text">Campus: {campusName}</p>
          </div>
        </div>


        <div className="card-body">
          <button onClick={() => handleEditClick(studentCard.id)} className="card-link">
            Edit
          </button>
          <button onClick={() => handleDeleteClick(studentCard.id)} className="card-link">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
