import React, { Component } from 'react';
import AutoComplete from './containers/AutoComplete';
import News from './containers/News';

class App extends Component {

  render() {
    return (
      <div>
        <AutoComplete />
        <News />
      </div>
    );
  }
}

export default App;
