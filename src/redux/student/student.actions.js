import axios from "axios";

import StudentActionType from "./student.types";

export const fetchAllStudents = (payload) => {
    return {
        type: StudentActionType.FETCH_ALL_STUDENTS,
        payload: payload
    };
};

export const fetchAllStudentsThunk = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get("https://crud-app-backend-da6d46bdx-jons-repo.vercel.app/api/students");
            dispatch(fetchAllStudents(response.data));
        } catch (error) {
            console.error(error);
        }
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
            const response = await axios.post("https://crud-app-backend-da6d46bdx-jons-repo.vercel.app/api/students/addStudent", studentData);
            dispatch(addStudent(response.data));
            return response.data;
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
            console.log(updatedStudentData.id);
            await axios.put(
                `https://crud-app-backend-da6d46bdx-jons-repo.vercel.app/api/students/${updatedStudentData.id}`,
                updatedStudentData
            );
            dispatch(updateStudent(updatedStudentData));
        } catch (error) {
            console.error(error);
        }
    };
};


export const deleteStudent = (payload) => {
    return {
        type: StudentActionType.DELETE_STUDENT,
        payload: payload,
    };
};

export const deleteStudentThunk = (studentId) => {
    return async (dispatch) => {
        try {
            await axios.delete(`https://crud-app-backend-da6d46bdx-jons-repo.vercel.app/api/students/${studentId}`);
            dispatch(deleteStudent(studentId));
        } catch (error) {
            console.error(error);
        }
    };
};