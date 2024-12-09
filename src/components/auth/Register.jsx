import React ,{useState} from 'react';
import './auth.css'
import { Input } from '../ui/Input';
import { BsFolderPlus } from "react-icons/bs";
import { Button } from '../ui/Button';
import { BackToLogin } from '../ui/BackToLogin';

export const Register = () => {
  const [name,setName] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nameChange = (event) =>{
    setName(event.target.value)
  }
  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = (event) => {
       event.preventDefault();
       console.log(name,email,password)
  }
    return (
      <div className="auth_main">
        <form className='auth_form' onSubmit={submitHandler}>
          <div className="auth_container">
            <div className="auth_header">
              <BsFolderPlus />
              <p className='auth_heading'>Welcome</p>
              <p className="auth_title">Create a new account</p>
            </div>
            <div className="auth_item">
              <label> Name * </label>
              <Input placeholder="Enter your name" type="text"  required onChange={nameChange}/>
            </div>
            <div className="auth_item">
              <label> Email * </label>
              <Input placeholder="Enter your email" type="email" required onChange={emailChange} />
            </div>
            <div className="auth_item">
              <label> Password * </label>
              <Input placeholder="Enter your password" type="password" required onChange={passwordChange}  />
            </div>
            <div className="auth_action">
                <Button>Register</Button>
            </div>
            <div>
                <BackToLogin/>
            </div>
          </div>
        </form>
      </div>
    );
}