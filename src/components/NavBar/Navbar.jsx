import React, { useState, useEffect } from "react";
import SignUpToModal from "./SignUp/SignUptoModal";
import styles from "./Navbar.module.css";
import LogoMilan from "../LogoMilan/LogoMilan";
import LogOut from './LogOut'
import FotoProfil from './FotoProfil'
import DropDownMenu from './DropDownMenu'

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [token, setToken] = useState(localStorage.getItem('token'))

  useEffect(() => {
    console.log(localStorage.getItem('token'))       
    if(localStorage.getItem('token')){
      setIsLogin(true)      
    }else{
      setIsLogin(false)
    }
  }, [])

  const handleLogOut = () => {
    localStorage.removeItem('token')
    setIsLogin(false)
  }

  return (
    <React.Fragment>
      <div className={styles.container}>
        <LogoMilan />
        <input
          type="text"
          className={styles.input}
          placeholder="Search movies"
        ></input>
        {/* <SignUp />             */}
        {isLogin==false ? <SignUpToModal setIsLogin={setIsLogin}/> : <DropDownMenu />}
      </div>
    </React.Fragment>
  );
};
export default Navbar;
