import { EMPLOYEE_LOGIN_SUCCESS } from "../Actions/ActionTypes";

export function employeeLogin(state = false, action) {
    switch (action.type) {
        case EMPLOYEE_LOGIN_SUCCESS:
            return {
                isUserLoggedIn: action.loginUser.isUserLoggedIn,
                user: action.loginUser.user,
            }
        default:
            return state;
    }
}