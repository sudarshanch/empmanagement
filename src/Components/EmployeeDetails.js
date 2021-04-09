import React, { Component } from 'react'
import { connect } from 'react-redux';
import { isEmpty } from 'lodash'


class EmployeeProfile extends Component {
    render() {
        const { employeeDetails } = this.props;
        return (
            <>
                <h1>EMPLOYEE DETAILS</h1>
                {!isEmpty(employeeDetails) ?
                    <>
                        <div>First name: {employeeDetails.firstName}</div>
                        <div>Last name: {employeeDetails.lastName}</div>
                        <div>Email: {employeeDetails.email} </div>
                        <div>Password: {employeeDetails.password} </div>
                    </>
                    :
                    <div>There is No data to dispaly</div>
                }
                <br />
                <a href="/profile">Go to employees list page</a>
            </>
        )
    }
}



function mapStateToProps(state) {
    const employeeDetails = state.employeeDetailsById;
    return {
        employeeDetails
    }
}

export default connect(mapStateToProps)(EmployeeProfile)
