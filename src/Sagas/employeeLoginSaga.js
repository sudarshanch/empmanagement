import { put, call } from 'redux-saga/effects'
import { isEmpty } from 'lodash';
import { EMPLOYEE_LOGIN_SUCCESS } from '../Actions/ActionTypes';

export default function* employeeLoginSaga(action) {
    try {
        const response = yield call(() =>
            fetch(`http://localhost:4000/employees/`, {
                method: 'GET',
                credentials: 'same-origin',
                headers: new Headers({
                    'Content-Type': 'application/json;charset=utf-8',
                    'X-Requested-With': 'XMLHttpRequest',
                }),
            }).then(res => res.json())
        );
        const user = response.filter(res => {
            console.log(res, 'res12');
            return res.email === action.payload.email
        });
        const isUserLoggedIn = !isEmpty(user) ? user[0].password === action.payload.password : false;
        const loginUser = {
            user,
            isUserLoggedIn,
        }
        if (isUserLoggedIn) {
            yield put({ type: EMPLOYEE_LOGIN_SUCCESS, loginUser })
            action.callBackSuccess(isUserLoggedIn);
        }
        else {
            action.callBackError();
        }
    } catch (err) {
        console.log(err);
    }

}