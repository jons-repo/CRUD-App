import axios from "axios";

import CampusActionType from "./campus.types";

export const fetchAllCampuses = (payload) => {
    console.log("FETCH ALL campus ACTION");
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