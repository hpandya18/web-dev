import "./App.css";
import "./vendors/bootstrap/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import { default as Practice7 } from "./components/a7/Practice";
import { default as Build7 } from "./components/a7/Build";

import { default as Practice6 } from "./components/a6/Practice";
import { default as Build6 } from "./components/a6/Build";

import { default as Practice8 } from "./components/a8/Practice";
import { default as Build8 } from "./components/a8/Build";

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
      </div>
    </BrowserRouter>
  );
}

export default App;
