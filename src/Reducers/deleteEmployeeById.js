import {  DELETE_EMPLOYEE_DETAILS_BY_ID_SUCCESS } from "../Actions/ActionTypes";

export const deleteEmployeeById = (state = {}, action) => {
    switch(action.type){
        case DELETE_EMPLOYEE_DETAILS_BY_ID_SUCCESS:
            return action.employeeDetails;
        default:
            return state;
    }
}