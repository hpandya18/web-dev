import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";
import { Link } from "react-router-dom";
const Practice = () => {
  return (
    <div>
      <h1>Practice</h1>
      <ConditionalOutput />
      <Styles />
      <Classes />
      <TodoList />
      <Link to="/a6/twitter/home">Build</Link> |
      <Link to="/a6/hello">Hello World!</Link>
    </div>
  );
};

export default Practice;
