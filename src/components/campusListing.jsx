import React from 'react';
import CampusCard from './campusCard';

const ListCampuses = (props) => {
    //check list empty if not load data using studentCard  
    return props.list && props.list.length > 0 ? (
      props.list.map((campusCard) => {
        console.log(campusCard);
        return (
          <div class="card-padding">
            <CampusCard campusCard={campusCard} />
          </div>
        );
      })
    ) : (
      <p>Campus database is empty</p>
    );
  };
  


export default ListCampuses;

