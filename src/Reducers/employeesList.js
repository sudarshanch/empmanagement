import { GET_EMPLOYEES_LIST_SUCCESS } from "../Actions/ActionTypes";

export default function employeesList(state = [], action) {
    switch (action.type) {
        case GET_EMPLOYEES_LIST_SUCCESS:
            return { ...state, employeesList: action.employeesList }
        default:
            return state;
    }
}