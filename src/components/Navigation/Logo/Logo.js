import React from "react";
import logo from "../../../assets/images/AB.jpg";
import { Link } from "react-router-dom";

const Logo = () => (
  <Link to="/">
    <img src={logo} alt="brand logo" style={{ height: 75, marginTop: 33, marginLeft:13, borderRadius: 37 }} />
  </Link>
);

export default Logo;
