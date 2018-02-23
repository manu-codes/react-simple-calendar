import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/calendar/'
import Chart from './components/chart/'
import Rating from './components/rating'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comp: 'Calendar' };
    this.renderComponent = this.renderComponent.bind(this);
  }
  renderComponent() {
    switch (this.state.comp) {
      case 'Calendar':
        return <Calendar />;
      case 'Chart':
        return <Chart values={[55, 33, 69, 44, 22]} maxLen={300} />;
      case 'Rating':
        return <Rating max={5} value={3} size={24} color='#cccccc' baseColor='#ffcc00'/>
      default:
        return <Calendar />
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React {this.state.comp}</h1>
        </header>
        <div className="App-intro">
          <section className='sec left-sec comp-list'>
            <ul>
              <li onClick={() => this.setState({ comp: 'Calendar' })}>
                <a href='#'>Calendar</a>
              </li>
              <li onClick={() => this.setState({ comp: 'Chart' })}>
                <a href='#'>Chart</a>
              </li>
              <li onClick={() => this.setState({ comp: 'Rating' })}>
                <a href='#'>Rating</a>
              </li>
            </ul>
          </section>
          <section className='sec'>
            {this.renderComponent()}
          </section>

        </div>
      </div>
    );
  }
}

export default App;
