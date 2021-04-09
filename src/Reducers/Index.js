import { combineReducers } from 'redux';
import employeeRegistrationReducer from './employeeRegistrationReducer';
import employeesList from './employeesList';
import { employeeDetailsById } from './employeeDetailsById';
import { deleteEmployeeById } from './deleteEmployeeById';
import { employeeLogin } from './employeeLogin';

    export const rootReducer = combineReducers({
        employeeRegistrationReducer,
        employeesList,
        employeeDetailsById,
        deleteEmployeeById,
        employeeLogin,
})


