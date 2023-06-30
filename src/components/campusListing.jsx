import React from 'react'

const ListCampuses = (props) => {
    console.log(props.list);
    return props.list ? (
        props.list.map((campus) => {
            return (
                <div key = {campus.id}>
                    <h1>{campus.name}</h1>
                    <h1>{campus.address}</h1>
                </div>
            );
        })
    ) : (
        <h1>Loading ...</h1>
    );
}

export default ListCampuses;