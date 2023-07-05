import React from 'react'

const CampusCard = ({ campusCard }) => {
  console.log(campusCard)
  return (
    <div class="button">

      <div className="card" style={{ width: "25rem" }}>
        <div class="cardButton">
          <img src="https://img.freepik.com/free-vector/college-building-educational-institution-banner_1441-3616.jpg?size=626&ext=jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{campusCard.name}</h5>
            <p className="card-text">Total Students: {campusCard.students.length}</p>
          </div>
        </div>

        <div className="card-body">
          <button className="card-link">
            Edit
          </button>
          <button className="card-link">
            Delete
          </button>
        </div>
      </div>
    </div>
  );

}

export default CampusCard;
