import { put, call } from 'redux-saga/effects'
import { GET_EMPLOYEES_LIST_SUCCESS } from '../Actions/ActionTypes'

export default function* employeesListSaga(action) {
    try {
        const employeesList = yield call(() => fetch(`http://localhost:4000/employees/`, {
            method: "GET",
            credentials: "same-origin",
            headers: new Headers({
                'Content-Type': 'application/json;charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest',
            })
        }).then(res => res.json()).then(json => json))
        yield put({ type: GET_EMPLOYEES_LIST_SUCCESS, employeesList })
    }
    catch (error) {
        console.log(error);
    }

}