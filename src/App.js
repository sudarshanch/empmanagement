import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import EmployeeDetails from './Components/EmployeeDetails';
import EmployeeLogin from './Components/EmployeeLogin';
import EmployeesList from './Components/EmployeesList';
import EmployeeRegistration from './Components/EmployeeRegistration';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={EmployeeRegistration} />
      <Route path="/profile" component={EmployeesList} />
      <Route path="/profileById" component={EmployeeDetails} />
      <Route path="/login" component={EmployeeLogin} />
    </div>
  );
}

export default App;
