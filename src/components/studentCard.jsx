import React from 'react'
import { Link } from 'react-router-dom';

const StudentCard = ({studentCard}) => {
    console.log(studentCard);
    const campusName = studentCard.campus ? studentCard.campus.name : "none";
    return(
      <div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="https://img.freepik.com/free-vector/college-building-educational-institution-banner_1441-3616.jpg?size=626&ext=jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{studentCard.firstName} {studentCard.lastName}</h5>
            <p className="card-text">Campus: {campusName}</p>
          </div>
          <div className="card-body">
            <Link to={`/edit-student/${studentCard.id}`} className="card-link">
              Edit
            </Link>
            <a href="#" className="card-link">Delete</a>
          </div>
        </div>

      </div>
    );

}

export default StudentCard;