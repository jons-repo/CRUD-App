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

        case StudentActionType.UPDATE_STUDENT:
            const updatedStudents = state.allStudents.map((student) => 
                student.id === payload.id ? payload : student
            );
            return { ...state, allStudents : updatedStudents};

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
