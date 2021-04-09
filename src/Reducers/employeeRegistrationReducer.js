import { CREATE_REGISTRATION_DETAILS_SUCCESS } from "../Actions/ActionTypes";

export default function employeeRegistrationReducer(state = [], action) {
    switch (action.type) {
        case CREATE_REGISTRATION_DETAILS_SUCCESS:
            return { ...state, payload: action.payload }
        default:
            return state;
    }
}