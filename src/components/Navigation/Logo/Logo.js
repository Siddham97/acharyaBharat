import React from "react";
import logo from "../../../assets/images/AB.jpg";
import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/">
    <img src={logo} alt="brand logo" style={{ height: 70, marginTop: 25, marginLeft:13, borderRadius: 35 }} />
  </Link>
);

export default Logo;
