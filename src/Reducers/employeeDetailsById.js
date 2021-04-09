import { GET_EMPLOYEE_DETAILS_BY_ID_SUCCESS } from "../Actions/ActionTypes";

export const employeeDetailsById = (state = {}, action) => {
    switch(action.type){
        case GET_EMPLOYEE_DETAILS_BY_ID_SUCCESS:
            return action.employeeDetails;
        default:
            return state;
    }
}