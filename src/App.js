import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './component/Home';
class App extends React.Component {
  constructor(props) {
    super(props) // instansiate parent class component, binding of method , initialize your state variable
    this.state = {
      flag: true,
      status:"Click above to see"
    }
  }
  render() {
    return (
      <div className="App">
        {!this.state.flag? <Home/> : ""}<button onClick={()=>{
          this.setState({
            flag:  !this.state.flag,
            status:this.state.flag? "Click above to hide" : "Click above to see"
          })
          
        }}> {this.state.flag} Click me</button><h1>{this.state.status}</h1>

      </div>

    )
  };
}

export default App;
