import React from 'react';
import './auth.css'
import { Input } from '../ui/Input';
import { BsFolderPlus } from "react-icons/bs";
import { Button } from '../ui/Button';

export const Register = () => {
    return (
      <div className="auth_main">
        <form className='auth_form'>
          <div className="auth_container">
            <div className="auth_header">
              <BsFolderPlus />
              <p className='auth_heading'>Welcome</p>
              <p className="auth_title">Create a new account</p>
            </div>
            <div className="auth_item">
              <label> Name * </label>
              <Input placeholder="Enter your name" />
            </div>
            <div className="auth_item">
              <label> Email * </label>
              <Input placeholder="Enter your email" />
            </div>
            <div className="auth_item">
              <label> Password * </label>
              <Input placeholder="Enter your password" />
            </div>
            <div className="auth_action">
                <Button>Register</Button>
            </div>
          </div>
        </form>
      </div>
    );
}