import React from "react";
import { Link } from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";
const Practice = () => {
  return (
    <div>
      <h1>Practice</h1>
      <Link to="/a7/twitter/home">Build</Link> |
      <Link to="/a7/practice">Practice</Link>
      <ReduxExamples />
    </div>
  );
};
export default Practice;
