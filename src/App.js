import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <ul>
          <li>
            <a href="./a2/practise/index.html">HTML Practice</a>
          </li>
          <li>
            <a href="./a2/twitter/navigation.html">Twitter clone</a>
          </li>
          <li>
            <a href="./a2/practise/iframe/index.html">IFrame practise</a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
