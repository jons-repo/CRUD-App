import React from 'react'

const CampusCard = ({campusCard}) => {
    console.log(campusCard)
    return(
      <div>

        <div className="card" style={{ width: "25rem" }}>
          <img src="https://img.freepik.com/free-vector/college-building-educational-institution-banner_1441-3616.jpg?size=626&ext=jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{campusCard.name}</h5>
            <p className="card-text">Total Students: {campusCard.students.length}</p>
          </div>
          <div className="card-body">
            <a href="#" className="card-link">Edit</a>
            <a href="#" className="card-link">Delete</a>
          </div>
        </div>
      </div>
    );

}

export default CampusCard;
