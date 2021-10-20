import "./App.css";
import "./vendors/bootstrap/bootstrap.min.css";
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";
import Build from "./components/a6/Build";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./components/a6/Build/HomeScreen";
import ExploreScreen from "./components/a6/Build/ExploreScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/a6/hello" exact={true}>
          <HelloWorld />
        </Route>
        <Route path={["/", "/a6", "/a6/practice"]}>
          <Practice />
        </Route>
        <Route path="/a6/build" exact={true}>
          <Build />
        </Route>
        <Route path="/a6/twitter/home" component={HomeScreen} />
        <Route path="/a6/twitter/explore" component={ExploreScreen} />
      </div>
    </BrowserRouter>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//         <ul>
//           <li>
//             <a href="./a2/practise/index.html">HTML Practice</a>
//           </li>
//           <li>
//             <a href="./a2/twitter/navigation.html">Twitter clone</a>
//           </li>
//           <li>
//             <a href="./a2/practise/iframe/index.html">IFrame practise</a>
//           </li>
//           <li>
//             <a href="/a3/practise/css/index.html">CSS practise</a>
//           </li>
//           <li>
//             <a href="/a3/challenge/index.html">CSS Challenge</a>
//           </li>
//           <li>
//             <a href="./a4/practise/bootstrap/index.html">Bootstrap Practise</a>
//           </li>
//           <li>
//             <a href="./a4/twitter/explore/explore.html">Twitter Bootstrap</a>
//           </li>
//           <li>
//             <a href="./a5/practise/js/index.html">JS practice</a>
//           </li>
//           <li>
//             <a href="./a5/todos/index.html">TODO list</a>
//           </li>
//           <li>
//             <a href="./a5/build/ExploreScreen/index.html">
//               Explore Screen by using Components.
//             </a>
//           </li>
//         </ul>
//       </header>
//     </div>
//   );
// }

export default App;
