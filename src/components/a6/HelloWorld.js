import React from "react";
import { Link } from "react-router-dom";

const HelloWorld = () => {
  return (
    <>
      <Link to="/a6/twitter/home">Build</Link>
      <h1>Hello World!</h1>
      <Link to="/a6/practice">Practice</Link>
    </>
  );
};

export default HelloWorld;
