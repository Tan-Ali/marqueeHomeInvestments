import logo from './logo.svg';
import './App.css';
import Jumbotron from './component/Jumbotron';
import NavBar from './component/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <Jumbotron>
        <p>
          
          Edit <code>src/App.js</code> and save to reload.
        </p>
        </Jumbotron>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
