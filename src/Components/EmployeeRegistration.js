import React from 'react';
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import store from '../Store';
import { createRegistrationDetails, getEmployeesList } from '../Actions/ActionCreators';
import { toast } from 'react-toastify';

class EmployeesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      showErrMessage: false,
    }
  }

  componentDidMount() {
    store.dispatch(getEmployeesList());

  }
  handleSubmit = (e) => {
    const { firstName, lastName, email, password } = this.state;
    const { employeeData } = this.props;
    const callBackSuccess = () => {
      toast.success('registered Successfully',{
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      this.props.history.push('/login');
      this.setState({ showErrMessage: false });  
    }
    e.preventDefault({});
    const payload = { firstName, lastName, email, password }
    const isEmpRegisteredAlready = employeeData &&employeeData.filter(emp => {
      return emp.email === payload.email
    })
    isEmpty(isEmpRegisteredAlready) ?
     store.dispatch(createRegistrationDetails(payload, callBackSuccess)) :
     this.setState({ showErrMessage: true })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { firstName, lastName, email, password, showErrMessage } = this.state;
    return (
      <>
        <h1>EMPLOYEE REGISTRATION</h1>
        <Form id="form" onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" name="firstName" value={firstName} onChange={this.handleChange} required />
          </Form.Group>
          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" name="lastName" value={lastName} onChange={this.handleChange} required />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicMobile">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="Enter Password" name="password" value={password} onChange={this.handleChange} required />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            {showErrMessage && (
              <Form.Text id="errMessage">
                already have an user with this email
              </Form.Text>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <br />
        <a href="/login">Login</a>
      </>
    )
  }
}

function mapStateToProps(state) {
  const employeeData = state.employeesList.employeesList
  return {
    employeeData
  }
}

export default connect(mapStateToProps)(EmployeesList);