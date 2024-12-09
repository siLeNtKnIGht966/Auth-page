import  React from 'react';
import {Input} from "../ui/Input"
import { BsFolderPlus } from "react-icons/bs";
import './auth.css';
import { Button } from "../ui/Button";
import {Link} from 'react-router-dom'

export const Login = () => {
      const submitHandler = (event) => {
        event.preventDefault();
      };
    return (
      <div className="auth_main">
        <form className="auth_form" onSubmit={submitHandler}>
          <div className="auth_container">
            <div className="auth_header">
              <BsFolderPlus />
              <p className="auth_heading">Welcome Back</p>
              <p className="auth_title">Login to continue</p>
            </div>
            <div className="auth_item">
              <label> Email * </label>
              <Input placeholder="Enter your email" type="email" required />
            </div>
            <div className="auth_item">
              <label> Password * </label>
              <Input
                placeholder="Enter your password"
                type="password"
                required
              />
            </div>
            <div className="auth_action">
              <Button>Login</Button>
            </div>
            <div className="auth_options">
                <Link to="/register">create new account</Link>
                <Link to="/forget/password">forget password?</Link>

            </div>
          </div>
        </form>
      </div>
    );
}
