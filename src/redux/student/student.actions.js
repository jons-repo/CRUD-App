import axios from "axios";

import StudentActionType from "./student.types";

export const fetchAllStudents = (payload) => {
    return {
        type: StudentActionType.FETCH_ALL_STUDENTS,
        payload: payload
    };
};

export const addStudent = (payload) => {
    return {
        type: StudentActionType.ADD_STUDENT,
        payload: payload
    };
};

export const addStudentThunk = (studentData) => {
    return async (dispatch) => {
        try {
            await axios.post("http://localhost:8000/api/students/addStudent", studentData);
            dispatch(addStudent(studentData));
        } catch (error) {
            console.error(error);
        }
    };
};

export const fetchAllStudentsThunk = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("http://localhost:8000/api/students");
            dispatch(fetchAllStudents(response.data));
        } catch (error) {
            console.error(error);
        }
    };
};

export const updateStudent = (payload) => {
    return {
        type: StudentActionType.UPDATE_STUDENT,
        payload: payload,
    };
};

export const updateStudentThunk = (updatedStudentData) => {
    return async (dispatch) => {
        try {
            await axios.put(
                `http://localhost:8000/api/students/${updatedStudentData.id}`,
                updatedStudentData
            );
            dispatch(updateStudent(updatedStudentData));
        } catch (error) {
            console.error(error);
        }
    };
};

