import { put, call } from 'redux-saga/effects'
import { GET_EMPLOYEE_DETAILS_BY_ID_SUCCESS } from '../Actions/ActionTypes';

export function* employeesDetailsByIdSaga(action) {
    try {
        const employeeDetails = yield call(() => fetch(`http://localhost:4000/employees/${action.id}`, {
            method: "GET",
            credentials: "same-origin",
            headers: new Headers({
                'Content-Type': 'application/json;charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest',
            })
        }).then(res => res.json()))
        yield put({ type: GET_EMPLOYEE_DETAILS_BY_ID_SUCCESS, employeeDetails })
        action.callBackSuccess();
    }
    catch (error) {
        console.log(error);
    }

}