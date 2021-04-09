import { put, call } from 'redux-saga/effects'
import { CREATE_REGISTRATION_DETAILS_SUCCESS } from '../Actions/ActionTypes';

export default function* employeeRegistrationSaga(action) {
    try {
        const response = yield call(() =>
            fetch("http://localhost:4000/employees", {
                method: 'POST',
                credentials: 'same-origin',
                body: JSON.stringify(action.payload),
                headers: new Headers({
                    'Content-Type': 'application/json;charset=utf-8',
                    'X-Requested-With': 'XMLHttpRequest',
                }),
            }).then(res => res)
        );
        yield put({ type: CREATE_REGISTRATION_DETAILS_SUCCESS, response })
        action.callBackSuccess();
    } catch (err) {
        console.log(err);
    }

}