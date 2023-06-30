import { combineReducers } from "redux";
import campusReducer from "./campus/campus.reducer";
import studentReducer from "./student/student.reducer";

const rootReducer = combineReducers({
    campus: campusReducer,
    student: studentReducer,
});

export default rootReducer;