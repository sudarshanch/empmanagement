import React from 'react';
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux';
import store from '../Store';
import { getEmployeeLogin } from '../Actions/ActionCreators';
import { toast } from 'react-toastify';
class EmployeeLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            showErrMessage: false,
        }
    }

    handleSubmit = (e) => {
        const { email, password } = this.state;
        const { history } = this.props;
        const callBackSuccess = (isLoggedIn) => {
            toast.success('You logged in successfully',{
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            isLoggedIn && history.push('/profile');

        }
        const callBackError = () => {
            this.setState({ showErrMessage: true })
        }
        e.preventDefault({});
        const payload = { email, password }
        store.dispatch(getEmployeeLogin(payload, callBackSuccess, callBackError))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        const { email, password, showErrMessage } = this.state;
        return (
            <>
                <h1>EMPLOYEE LOGIN</h1>
                <Form id="form" onSubmit={this.handleSubmit}>
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
                                Username or Password Incorrect
                        </Form.Text>
                        )}
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <br />
                <a href="/">Sign up</a>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        isUserLoggedIn: state.employeeLogin.isUserLoggedIn,
    }
}

export default connect(mapStateToProps)(EmployeeLogin);