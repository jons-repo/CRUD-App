import axios from "axios";

import CampusActionType from "./campus.types";
import StudentActionTypes from "../student/student.types";

export const fetchAllCampuses = (payload) => {
    return {
        type: CampusActionType.FETCH_ALL_CAMPUSES,
        payload: payload,
    };
};

export const fetchAllCampusesThunk = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:8000/api/campuses");
            dispatch(fetchAllCampuses(response.data));
        } catch (error) {
            console.error(error);
        }
    };
};

export const addCampus = (payload) => {
    return {
        type: CampusActionType.ADD_CAMPUS,
        payload: payload
    };
};

export const addCampusThunk = (campusData) => {
    return async (dispatch) => {
        try {
            await axios.post("http://localhost:8000/api/campuses/addCampus", campusData);
            dispatch(addCampus(campusData));
        } catch (error) {
            console.error(error);
        }
    };
};