import React from 'react'
import './backtologin.css'
import { FaLongArrowAltLeft } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'

export const BackToLogin = () => {
  const navigate = useNavigate();
  const  navigateHandler = () => {
        navigate('/login')
  }
  return (
    <div className="back_toLogin_ui" onClick={navigateHandler}>
      <FaLongArrowAltLeft />
      <span>Back to login</span>
    </div>
  );
}
