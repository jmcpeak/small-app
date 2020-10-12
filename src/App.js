import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

const Button = React.lazy(() => import('@material-ui/core/Button'));

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </a>
        <Suspense fallback={<span style={{ height: 36, width: 130 }} />}>
          <Button variant="contained">Hello World</Button>
        </Suspense>
      </header>
    </div>
  );
};

export default App;
