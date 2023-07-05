import React, { useEffect } from 'react';
import { useDispatch, useSelector} from "react-redux";
import { fetchAllCampusesThunk } from '../redux/campus/campus.actions';
import ListCampuses from '../components/campusListing';

const AllCampuses = () => {

   const allCampuses = useSelector((state) => state.campus.allCampuses) 
   const dispatch = useDispatch(); 
   const fetchAllCampuses = () => {
    return dispatch(fetchAllCampusesThunk());
   }

   useEffect(() => {
    fetchAllCampuses();
   }, [])

  return (
    <div>
        <h1 class="centered">Campus page</h1>
        <div class="cards">
            <ListCampuses list = {allCampuses}/>
        </div>

    </div>
  );
};

export default AllCampuses;