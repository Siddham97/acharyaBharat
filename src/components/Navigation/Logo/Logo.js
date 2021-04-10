import React from "react";
import logo from "../../../assets/images/AB.jpeg";
import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/">
    <img src={logo} alt="brand logo" style={{ height: 45, margin: 6, borderRadius: 4 }} />
  </Link>
);

export default Logo;
