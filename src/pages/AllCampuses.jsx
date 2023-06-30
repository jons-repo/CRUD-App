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
        <h1>Campus page</h1>
        <ListCampuses list = {allCampuses}/>
    </div>
  )
}

export default AllCampuses;