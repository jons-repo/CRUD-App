import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { fetchAllStudentsThunk } from '../redux/student/student.actions';
import ListStudents from '../components/studentListing';

const AllStudents = () => {
    const allStudents = useSelector((state) => state.student.allStudents);
    const dispatch = useDispatch();
    const fetchAllStudents = () => {
        return dispatch(fetchAllStudentsThunk());
    };

    useEffect(() => {
        fetchAllStudents();
    }, []);

    return (
        <div>
            <h1>Students</h1>
            <ListStudents list = {allStudents}/>
            
        </div>
    );
};
export default AllStudents;