import React from 'react';
import './App.css';

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
          <p className='quote-body'>{quote}</p>
          <p className='quote-author'>{`- ${author}`}</p>
          <button className='quote-btn' onClick={() => this.setQuote()}>Click</button>
        </section>
        <footer>
            <span className="copyright">Natalie Pina &copy;2020. </span>
        </footer>
      </div>
    )
  }
}

export default App;
