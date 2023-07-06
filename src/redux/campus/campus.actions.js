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
            const response = await axios.post("http://localhost:8000/api/campuses/addCampus", campusData);
            dispatch(addCampus(campusData));
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };
};

export const updateCampus = (payload) => {
    return {
        type: CampusActionType.UPDATE_CAMPUS,
        payload: payload,
    };
};

export const updateCampusThunk = (campusData) => {
    return async (dispatch) => {
        try {
            await axios.put(`http://localhost:8000/api/campuses/${campusData.id}`, campusData);
            dispatch(updateCampus(campusData));
        } catch (error) {
            console.error(error);
        }
    };
};

export const deleteCampus = (payload) => {
    return {
        type: CampusActionType.DELETE_CAMPUS,
        payload: payload,
    };
};

export const deleteCampusThunk = (campusId) => {
    return async (dispatch) => {
        try {
            await axios.delete(`http://localhost:8000/api/campuses/${campusId}`);
            dispatch(deleteCampus(campusId));
        } catch (error) {
            console.error(error);
        }
    };
};