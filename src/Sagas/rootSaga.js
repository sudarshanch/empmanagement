import { all, takeLatest } from 'redux-saga/effects'
import {
    CREATE_REGISTRATION_DETAILS, GET_EMPLOYEE_DETAILS_BY_ID, DELETE_EMPLOYEE_DETAILS_BY_ID,
    EMPLOYEE_LOGIN, GET_EMPLOYEES_LIST
} from '../Actions/ActionTypes'
import employeeRegistrationSaga from './employeeRegistrationSaga';
import { employeesDetailsByIdSaga } from './employeeDetailsById';
import { deleteEmployeesByIdSaga } from './deleteEmployeeByIdSaga';
import employeeLoginSaga from './employeeLoginSaga';
import employeesListSaga from './employeesListSaga';


export default function* rootSaga() {
    yield all([takeLatest(GET_EMPLOYEES_LIST, employeesListSaga),
    takeLatest(CREATE_REGISTRATION_DETAILS, employeeRegistrationSaga),
    takeLatest(GET_EMPLOYEE_DETAILS_BY_ID, employeesDetailsByIdSaga),
    takeLatest(DELETE_EMPLOYEE_DETAILS_BY_ID, deleteEmployeesByIdSaga),
    takeLatest(EMPLOYEE_LOGIN, employeeLoginSaga)
    ]);
}