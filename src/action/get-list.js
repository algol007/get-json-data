import React, { Component } from 'react';
import GetData from '../data/ADRINI_API.json';

class GetList extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        {GetData.map((getDetail, index) => {
          return <h1>{getDetail.name}</h1>
        })}
      </div>
    );
  }
}

export default GetList;
