import { call } from 'redux-saga/effects'

export function* deleteEmployeesByIdSaga(action) {
    try {
        yield call(() => fetch(`http://localhost:4000/employees/${action.id}`, {
            method: "DELETE",
            credentials: "same-origin",
            headers: new Headers({
                'Content-Type': 'application/json;charset=utf-8',
                'X-Requested-With': 'XMLHttpRequest',
            })
        }).then(res => { console.log(res.json(), 'res12') }))
        action.callBackSuccess();
    }
    catch (error) {
        console.log(error);
    }

}