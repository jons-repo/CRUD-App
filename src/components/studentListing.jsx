import React from 'react';
import StudentCard from './studentCard';

const ListStudents = (props) => {
  console.log("at the propslist",props.list);
  return props.list ? (
        props.list.map((studentCard) => {
            console.log(studentCard)
            return(
                <div class="card-padding">
                    <StudentCard studentCard = {studentCard} />
                </div>
            );
        })
    )
    : (
    <h1>Loading ...</h1>
  );
}

export default ListStudents;