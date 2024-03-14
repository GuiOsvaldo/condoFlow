
import {Form, Button, Alert} from "react-bootstrap";
import "./index.css";
import React, { useState } from "react";
import BackgroundImage from "../../img/background.jpg";
import Logo from "../../img/logo.png";


const Login = () => {
    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");
  
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setLoading(true);
      await delay(500);
      console.log(`Username :${inputUsername}, Password :${inputPassword}`);
      if (inputUsername !== "admin" || inputPassword !== "admin") {
        setShow(true);
      }
      setLoading(false);
    };
  
    const handlePassword = () => {};
  
    function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
  
    return (
      <div
        className="sign-in__wrapper"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
      
        <div className="sign-in__backdrop"></div>
       
        <Form className="shadow p-4 bg-white rounded" onSubmit={handleSubmit}>
        
          <img
            className="mx-auto d-block mb-2"
            id="img"
            src={Logo}
            alt="logo"
          />
          
          {/* ALerta */}
          {show ? (
            <Alert
              className="mb-2"
              variant="danger"
              onClose={() => setShow(false)}
              dismissible
            >
              Verifique os seus dados.
            </Alert>
          ) : (
            <div />
          )}
          <Form.Group className="mb-2" controlId="username">
          
            <Form.Control
              type="text"
              value={inputUsername}
              placeholder="Email do usuário"
              onChange={(e) => setInputUsername(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="password">
       
            <Form.Control
              type="password"
              value={inputPassword}
              placeholder="Senha do usuário"
              onChange={(e) => setInputPassword(e.target.value)}
              required
            />
          </Form.Group><br/>
         
          {!loading ? (
            <Button className="w-100" id="back"  variant="primary" type="submit">
              Entrar
            </Button>
          ) : (
            <Button className="w-100" id="process" variant="primary" type="submit" disabled>
              Aguarde...
            </Button>
          )}
          <div className="d-grid justify-content-end">
            <Button
              className="text-muted px-0"
              variant="link"
              onClick={handlePassword}
            >
             Esquceu a senha?
            
            </Button>
          </div>
        </Form>
        {/* Footer */}
        <div  className="w-100 mb-2 position-absolute bottom-0 start-50  translate-middle-x text-white text-center" id="footer">
         <span className="span"> CondoFlow   | &copy;2024 </span>
        </div>
      </div>
    );
  };
  export default Login;
  
