import React from 'react'

const CampusCard = ({campusCard}) => {
    console.log(campusCard)
    return(
      <div>
        <h1>{campusCard.name}</h1>
        <h1>{campusCard.address}</h1>
      </div>
    );

}

export default CampusCard;
