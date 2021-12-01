import "./App.css";
import "./vendors/bootstrap/bootstrap.min.css";
import { BrowserRouter, Link, Route } from "react-router-dom";

import { default as Practice7 } from "./components/a7/Practice";
import { default as Build7 } from "./components/a7/Build";

import { default as Practice6 } from "./components/a6/Practice";
import { default as Build6 } from "./components/a6/Build";

import { default as Practice8 } from "./components/a8/Practice";
import { default as Build8 } from "./components/a8/Build";

import { default as Practice9 } from "./components/a9/Practice";
import { default as Build9 } from "./components/a9/Build";

import HelloWorldA6 from "./components/a6/HelloWorld";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/a6/hello" exact={true}>
          <HelloWorldA6 />
        </Route>
        <Route path={["/a6", "/a6/practice"]} exact={true}>
          <Practice6 />
        </Route>
        <Route path="/a6/twitter">
          <Build6 />
        </Route>
        <Route path={["/a7", "/a7/practice"]} exact={true}>
          <Practice7 />
        </Route>
        <Route path="/a7/twitter">
          <Build7 />
        </Route>
        <Route path="/a8/practice">
          <Practice8 />
        </Route>
        <Route path={["/", "a8/", "/a8/twitter"]}>
          <Build8 />
        </Route>
        <Route path="/a9/practice">
          <Practice9 />
        </Route>
        <Route path="/a9/twitter">
          <Build9 />
        </Route>
      </div>
      <div>
        <h2>Assignments</h2>
        <ul>
          <li>
            <a href="./a2/twitter/navigation.html">Assignment - 2</a>
          </li>
          <li>
            <a href="./a3/challenge/index.html">Assignment - 3</a>
          </li>
          <li>
            <a href="./a4/twitter/explore/explore.html">Assignment - 4</a>
          </li>
          <li>
            <a href="./a5/build/ExploreScreen/index.html">Assignment - 5</a>
          </li>
          <li>
            <Link to="/a6/hello">Assignment - 6</Link>
          </li>
          <li>
            <Link to="/a7/twitter/home">Assignment - 7</Link>
          </li>
          <li>
            <Link to="/a8/twitter/home">Assignment - 8</Link>
          </li>
          <li>
            <Link to="/a4/practise/index.html">Practice - 4</Link>
          </li>
          <li>
            <Link to="/a5/practise/js/index.html">Practice - 5</Link>
          </li>
          <li>
            <Link to="/a6/practice">Practice - 6</Link>
          </li>
          <li>
            <Link to="/a7/practice">Practice - 7</Link>
          </li>
          <li>
            <Link to="/a8/practice">Practice - 8</Link>
          </li>
          <li>
            <Link to="/a9/practice">Practice - 9</Link>
          </li>
        </ul>
      </div>
    </BrowserRouter>
  );
}

export default App;
