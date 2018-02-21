import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/calendar/'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React calendar</h1>
        </header>
        <p className="App-intro">
         <Calendar/>
        </p>
      </div>
    );
  }
}

export default App;
