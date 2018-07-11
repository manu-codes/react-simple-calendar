import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/calendar/'
import AutoComplete from './components/auto-complete'
import Chart from './components/chart/'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comp: 'AutoComplete' };
    this.renderComponent = this.renderComponent.bind(this);
  }
  renderComponent() {
    switch (this.state.comp) {
      case 'AutoComplete':
        return <AutoComplete
          labelDisplay={
            item => item.name
          }
          keyGen={
            item => item._id
          }
          shouldItemRender={
            (item, input) => item.name.toLowerCase().search(input) > -1
          }
          data={
            [
             
              {
                "_id": "5b45f12ff3382720676fadbd",
                "index": 5,
                "picture": "http://placehold.it/32x32",
                "age": 37,
                "name": "Bender Taylor",
                "email": "bendertaylor@momentia.com"
              },
              {
                "_id": "5b45f12ffdf7da1b1bab2b1d",
                "index": 6,
                "picture": "http://placehold.it/32x32",
                "age": 36,
                "name": "Barnett Boyd",
                "email": "barnettboyd@momentia.com"
              },
              {
                "_id": "5b45f12ff6e01d4e555e21f3",
                "index": 7,
                "picture": "http://placehold.it/32x32",
                "age": 26,
                "name": "Richards Kaufman",
                "email": "richardskaufman@momentia.com"
              },
              {
                "_id": "5b45f12feb8a37600f2b5eb9",
                "index": 8,
                "picture": "http://placehold.it/32x32",
                "age": 39,
                "name": "Burgess Randall",
                "email": "burgessrandall@momentia.com"
              },
              {
                "_id": "5b45f12f9a74698999e74623",
                "index": 9,
                "picture": "http://placehold.it/32x32",
                "age": 27,
                "name": "Eva Walker",
                "email": "evawalker@momentia.com"
              },
              {
                "_id": "5b45f12f53e990f9ebe4811b",
                "index": 10,
                "picture": "http://placehold.it/32x32",
                "age": 26,
                "name": "Pittman Munoz",
                "email": "pittmanmunoz@momentia.com"
              },
              {
                "_id": "5b45f12f44909daf8c5c7def",
                "index": 11,
                "picture": "http://placehold.it/32x32",
                "age": 34,
                "name": "Gibbs Graves",
                "email": "gibbsgraves@momentia.com"
              },
              {
                "_id": "5b45f12ffb9d28d7efd52d76",
                "index": 12,
                "picture": "http://placehold.it/32x32",
                "age": 40,
                "name": "Pierce House",
                "email": "piercehouse@momentia.com"
              },
              {
                "_id": "5b45f12fa5d0386cc68ab5c3",
                "index": 13,
                "picture": "http://placehold.it/32x32",
                "age": 24,
                "name": "Gail Conway",
                "email": "gailconway@momentia.com"
              },
              {
                "_id": "5b45f12f2394e01559cc2120",
                "index": 14,
                "picture": "http://placehold.it/32x32",
                "age": 24,
                "name": "Charlene Fitzgerald",
                "email": "charlenefitzgerald@momentia.com"
              },
              {
                "_id": "5b45f12f2bcbdd7fd20cca59",
                "index": 15,
                "picture": "http://placehold.it/32x32",
                "age": 39,
                "name": "Ryan Robbins",
                "email": "ryanrobbins@momentia.com"
              },
              {
                "_id": "5b45f12fb32ca54cd6c1fa95",
                "index": 16,
                "picture": "http://placehold.it/32x32",
                "age": 28,
                "name": "Kimberly Wright",
                "email": "kimberlywright@momentia.com"
              },
              {
                "_id": "5b45f12f7dad2f6c777257e2",
                "index": 17,
                "picture": "http://placehold.it/32x32",
                "age": 37,
                "name": "Robin Gay",
                "email": "robingay@momentia.com"
              },
              {
                "_id": "5b45f12fc5a73849271973f3",
                "index": 18,
                "picture": "http://placehold.it/32x32",
                "age": 20,
                "name": "Josefa Shields",
                "email": "josefashields@momentia.com"
              },
              {
                "_id": "5b45f12f425f39840caccc86",
                "index": 19,
                "picture": "http://placehold.it/32x32",
                "age": 25,
                "name": "Charmaine Stafford",
                "email": "charmainestafford@momentia.com"
              },
              {
                "_id": "5b45f12f871bc1d027cdb8ee",
                "index": 20,
                "picture": "http://placehold.it/32x32",
                "age": 26,
                "name": "Merritt Snider",
                "email": "merrittsnider@momentia.com"
              },
              {
                "_id": "5b45f12f7f84586db6a97351",
                "index": 21,
                "picture": "http://placehold.it/32x32",
                "age": 37,
                "name": "Daniels Vang",
                "email": "danielsvang@momentia.com"
              },
              {
                "_id": "5b45f12fb491d66129c53007",
                "index": 22,
                "picture": "http://placehold.it/32x32",
                "age": 22,
                "name": "Amelia Carr",
                "email": "ameliacarr@momentia.com"
              },
              {
                "_id": "5b45f12fa9168f19e8dc240e",
                "index": 23,
                "picture": "http://placehold.it/32x32",
                "age": 29,
                "name": "Aline Gardner",
                "email": "alinegardner@momentia.com"
              },
              {
                "_id": "5b45f12f29b13bb0a7c19d73",
                "index": 24,
                "picture": "http://placehold.it/32x32",
                "age": 38,
                "name": "Parrish Winters",
                "email": "parrishwinters@momentia.com"
              },
              {
                "_id": "5b45f12f9f63fa00b4a4040e",
                "index": 25,
                "picture": "http://placehold.it/32x32",
                "age": 36,
                "name": "Frieda Delaney",
                "email": "friedadelaney@momentia.com"
              }
            ]
          }
        />;
      case 'Calendar':
        return <Calendar />;
      case 'Chart':
        return <Chart values={[55, 33, 69, 44, 22]} maxLen={300} />;
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
              <li onClick={() => this.setState({ comp: 'AutoComplete' })}>
                <a href='#'>Auto Complete</a>
              </li>
              <li onClick={() => this.setState({ comp: 'Calendar' })}>
                <a href='#'>Calendar</a>
              </li>
              <li onClick={() => this.setState({ comp: 'Chart' })}>
                <a href='#'>Chart</a>
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
