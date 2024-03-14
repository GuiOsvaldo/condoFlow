
//import Dashboard from "./scenes/dashboard";
import React from "react";
import { BrowserRouter as Router , Route } from "react-router-dom";
import Login from "./scenes/login";
import Dashboard from "./scenes/dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () =>{
  return ( 
     
    <Router>
      <Route  path="/" exact  element={<Login />}/>
      <Route  path="/home"  element={<Dashboard />}/>
    </Router>

  );
};
export default App;

