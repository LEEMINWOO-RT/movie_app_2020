import React from 'react';

class App extends React.Component {

  componentDidMount() {
   console.log('component rendered'); 
  }

  componentDidUpdate() {
    console.log('i just updated');
  }

  componentWillUnmount() {
    console.log('goodbye, cruel world');
  }

  constructor(props){
    super(props);
    console.log('hello');
}
  state = {
    count : 0,
  };

  add = () => {
    this.setState(current => ({
      count : current.count +1,
    }));
  }

  minus = () => {
    this.setState(current => ({
      count : current.count -1,
    }));
  }

  render() {
    console.log('i`m rendering');
    return (
      <div>
    <h1>class component : {this.state.count}</h1>
    <button onClick={this.add}>add</button>
    <button onClick={this.minus}>minus</button>
    </div>
    );
  }
}

export default App;
