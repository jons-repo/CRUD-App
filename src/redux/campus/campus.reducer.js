import CampusActionType from "./campus.types";

export const INITIAL_CAMPUS_STATE = {
    allCampuses: [],
};

const campusReducer = (state = INITIAL_CAMPUS_STATE, { type, payload }) => {
    switch (type) {
        case CampusActionType.FETCH_ALL_CAMPUSES:
            return {...state, allCampuses: payload};

        case CampusActionType.ADD_CAMPUS:
            return {...state, allCampuses: [...state.allCampuses, payload]};
        
        case CampusActionType.UPDATE_CAMPUS:
            const updatedCampuses = state.allCampuses.map((campus) => {
                if (campus.id === payload.id) {
                    return { ...campus, ...payload };
                }
                return campus;
            });
            return { ...state, allCampuses: updatedCampuses };

        case CampusActionType.DELETE_CAMPUS:
            const filteredCampuses = state.allCampuses.filter((campus) => campus.id !== payload);
            return { ...state, allCampuses: filteredCampuses };
        
        default:
            return state;
    }
};

export default campusReducer;