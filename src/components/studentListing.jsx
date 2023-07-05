import React from 'react';
import StudentCard from './studentCard';

const ListStudents = (props) => {
    console.log("at the propslist", props.list);
    return props.list && props.list.length > 0 ? (
      props.list.map((studentCard) => {
        console.log(studentCard);
        return (
          <div class="card-padding">
            <StudentCard studentCard={studentCard} />
          </div>
        );
      })
    ) : (
      <p>Students database is empty</p>
    );
  };
  

export default ListStudents;