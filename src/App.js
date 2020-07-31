import React from 'react';
import './App.css';
import logo from './img/marcus.png';
import refresh from './img/refresh.png';

// TO DO
// Raiting pillar of quotes

const { quotes } = require('./mockDatabase.json')

class App extends React.Component {
  state = {
    quote: {}
  }

  componentDidMount() {
    this.setQuote();
  }
  
  setQuote = () => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    this.setState({ quote });
  }

  render() {
    const { quote, author } = this.state.quote;
    return (  
      <div className='wrapper'>
        <section>
          <div className='text-container'>
            <p className='quote-body'>
              {quote}
            </p>
            <p className='quote-author'>
              {`- ${author}`}
              <button className='btn' onClick={() => this.setQuote()}>
                <img className="refresh" src={refresh} alt="refresh" />
              </button>
            </p>
          </div>
          <div className='image-container'>
            <img src={logo} alt="marcus aurelius" />
          </div>
        </section>
        <footer>
            <span className="copyright">Natalie Pina &copy;2020. </span>
        </footer>
      </div>
    )
  }
}

export default App;
