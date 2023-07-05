import React from 'react';
import StudentCard from './studentCard';

const ListStudents = (props) => {
    
    return props.list && props.list.length > 0 ? (
      props.list.map((studentCard) => {
        console.log(studentCard);
        return (
          <div class="card-padding">
            <StudentCard studentCard={studentCard} campusName2={props.campusName2} />
          </div>
        );
      })
    ) : (
      <p>Students database is empty</p>
    );
  };
  

export default ListStudents;