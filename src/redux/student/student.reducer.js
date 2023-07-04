import StudentActionType from "./student.types";

const INITIAL_STUDENT_STATE = {
    allStudents: [],
};

const studentReducer = (state = INITIAL_STUDENT_STATE, { type, payload }) => {
    switch (type) {
        case StudentActionType.FETCH_ALL_STUDENTS:
            return { ...state, allStudents: payload };

        case StudentActionType.ADD_STUDENT:
            return { ...state, allStudents: [...state.allStudents, payload] };

        case StudentActionType.DELETE_STUDENT:
            return {
                ...state,
                allStudents: state.allStudents.filter(
                    (student) => student.id !== payload
                ),
            };

        default:
            return state;
    }
};

export default studentReducer;
