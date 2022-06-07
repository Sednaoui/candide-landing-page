import logo from './assets/logo.png';
import twitterLogo from './assets/twitter.svg';
import githubLogo from './assets/github.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
        <h1>
          CANDIDE
        </h1>
        <div>
          <a href="https://twitter.com/candidewallet" target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} alt="twitter" />
          </a>
          <a href="https://github.com/Sednaoui/Candide/tree/main/wallet" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="github" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
