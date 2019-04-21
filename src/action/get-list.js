import React, { Component } from 'react';
import GetData from '../data/ADRINI_API.json';

class GetList extends Component {
  render() {
    return (
      <div>
        {GetData.map((getDetail, index) => {
          return <div>
            <h1>{getDetail.id}</h1>
            <h1>{getDetail.name}</h1>
            <h1>{getDetail.timestamp}</h1>
          </div>
        })}
      </div>
    );
  }
}

export default GetList;
