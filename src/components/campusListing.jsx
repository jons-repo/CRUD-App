import React from 'react';
import CampusCard from './campusCard';

const ListCampuses = (props) => {
  console.log("at the propslist",props.list);
  return props.list ? (
        props.list.map((campusCard) => {
            console.log(campusCard)
            return(
                <div>
                    <CampusCard campusCard={campusCard} />
                </div>
            );
        })
    )
    : (
    <h1>Loading ...</h1>
  );
}

export default ListCampuses;

