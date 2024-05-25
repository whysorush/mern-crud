// import logo from './logo.svg';
// import './App.css';
import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props) // instansiate parent class component, binding of method , initialize your state variable
    this.state = {
      name: ""
    }
  }
  handleChange = (value) => {
    this.setState({
      name: value.currentTarget.value
    })
  }
  componentDidMount(){
    //For api calling
    console.log("componentDidMount")
  }
  getSnapshotBeforeUpdate(){
    console.log("here")
  }
  shouldComponentUpdate(){
    return true;
  }
  render() {
    return (
      <div className="Home">
        Event is visible<br></br>
        Enter some text<h1> {this.state.name}</h1>
        <input type="text" onChange={this.handleChange}></input>
      </div>

    )
  };
}

export default Home;
