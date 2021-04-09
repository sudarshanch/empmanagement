import React, { Component } from 'react'
import { connect } from 'react-redux';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next'
import {
  getEmployeeDetailsById, deleteEmployeeDetailsById,
  getEmployeeLogin, getEmployeesList
} from '../Actions/ActionCreators';
import store from '../Store';


class EmployeesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectingToDetails: false,
    }
  }

  componentDidMount() {
    store.dispatch(getEmployeesList());
    store.dispatch(getEmployeeLogin())
  }

  viewDetails = (row) => {
    const { history } = this.props;
    const callBackSuccess = () => {
      history.push('/profileById');
    }
    store.dispatch(getEmployeeDetailsById(row.id, callBackSuccess));
  }

  deleteEmployeeDetails = (row) => {
    const callBackSuccess = () => {
      store.dispatch(getEmployeesList());
    }
    store.dispatch(deleteEmployeeDetailsById(row.id, callBackSuccess));
  }

  viewDetailsFormatter = (cell, row) => {
    return (
      <button onClick={() => this.viewDetails(row)}>view</button>)
  };

  deleteEmployeeFormatter = (cell, row) => {
    return (
      <button onClick={() => this.deleteEmployeeDetails(row)}>Delete</button>)
  };

  render() {
    const customTotal = (from, to, size) => (
      <span className="react-bootstrap-table-pagination-total">
        Showing {from} to {to} of {size} Results
      </span>
    );
    const options = {
      hideSizePerPage: true,
      sizePerPage: 10,
      showTotal: true,
      paginationTotalRenderer: customTotal,
    };
    const { employeeData } = this.props;
    console.log(employeeData, 'employeeDatapro');
    const employeeList = employeeData ? employeeData : [];
    const columns = [{
      dataField: 'firstName',
      text: 'First name',
    }, {
      dataField: 'lastName',
      text: 'Last name',
      sort: true,
    }, {
      dataField: 'email',
      text: 'Email address',
      sort: true,
    },
    {
      dataField: 'password',
      text: 'Password',
      sort: true,
    }];

    columns.push({
      dataField: '',
      text: '',
      headerStyle: { width: '70px' },
      formatter: this.viewDetailsFormatter,
      csvExport: false,
    });

    columns.push({
      dataField: '',
      text: '',
      headerStyle: { width: '70px' },
      formatter: this.deleteEmployeeFormatter,
      csvExport: false,
    });

    return (
      <div>
        <ToolkitProvider
          keyField="id"
          data={employeeList}
          columns={columns}
          search
        >
          {
            props => (
              <div>
                <h5>WELCOME TO</h5>
                <h1>EMPLOYEE MANAGEMENT</h1>
                <hr />
                <BootstrapTable
                  {...props.baseProps}
                  headerClasses="header-class bg-info"
                  bordered={false}
                  hover={true}
                  pagination={paginationFactory(options)}
                />
              </div>
            )
          }
        </ToolkitProvider>
        <br />
        <a href="/login">Logout</a>
      </div>
    )
  }
}



function mapStateToProps(state) {
  const employeeData = state.employeesList.employeesList;

  return {
    employeeData,
  }
}

export default connect(mapStateToProps)(EmployeesList)
