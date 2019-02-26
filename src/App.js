import React, { Component } from "react";
import Register from "./containers/register/Register";
import Login from "./containers/login/Login";
import Dashboard from "./containers/dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Routes dynamic */}
        <Dashboard />
        <Register />
        <Login />
      </div>
    );
  }
}

export default App;