import React, { Component } from 'react';

class GetData extends Component {
    state = {
        loading: true
    };

    async componentDidMount() {
        const url = "https://api.adrini.com/api/get/channels/443806782782898177?count=8";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }

    render() {
        return (
          <div>
            
          </div>
        );
    }
}

export default GetData;