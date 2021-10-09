import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/coffee-cup.svg";
import "./header.styles.scss";



const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo />
      </Link>
      <div className="option-container">
        <Link to="/Blog/create" className="option">
          Writting
        </Link>
        <Link to="/About-us" className="option">
          About us
        </Link>
        <Link to="/Blog" className="option">
          Blog
        </Link>
        <Link className='option' to='/signin'>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Header;
