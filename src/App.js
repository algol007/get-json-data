import React, { Component } from 'react';
import GetList from './action/get-list';
import GetData from './action/get-data';

class App extends Component {
  render() {
    return (
      <div>
        {/* <GetList /> */}
        <GetData />
      </div>
    );
  }
}

export default App;
