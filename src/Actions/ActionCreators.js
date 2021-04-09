import { CREATE_REGISTRATION_DETAILS, GET_EMPLOYEE_DETAILS_BY_ID, DELETE_EMPLOYEE_DETAILS_BY_ID, EMPLOYEE_LOGIN, GET_EMPLOYEES_LIST } from "./ActionTypes";

export function getEmployeesList(){
    return{
        type: GET_EMPLOYEES_LIST,
    };
}

export function createRegistrationDetails(payload, callBackSuccess){
    return{
        type: CREATE_REGISTRATION_DETAILS,
        payload,
        callBackSuccess,
    };
}

export function getEmployeeLogin(payload, callBackSuccess, callBackError){
    return{
        type: EMPLOYEE_LOGIN,
        payload,
        callBackSuccess,
        callBackError,
    };
}

export function getEmployeeDetailsById(id, callBackSuccess){
    return{
        type: GET_EMPLOYEE_DETAILS_BY_ID,
        id,
        callBackSuccess,
    };
}

export function deleteEmployeeDetailsById(id, callBackSuccess){
    return{
        type: DELETE_EMPLOYEE_DETAILS_BY_ID,
        id,
        callBackSuccess,
    };
}