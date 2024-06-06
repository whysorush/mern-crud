// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Home from './component/Home';
import Header from './component/Header'; 
import {Route, Switch} from "react-router-dom"
import HomePage from './component/HomePage';
import Aboutus from './component/Aboutus';
import Contactus from './component/Contactus';
import AboutHoc from './component/AboutHoc';
import FunctionalComponent from './component/FunctionalComponent';
class App extends React.Component {
  constructor(props) {
    super(props) // instansiate parent class component, binding of method , initialize your state variable
    this.state = {
      flag: false,
      status:"Click above to see"
    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
        <Route component = {HomePage} path ='/' exact />
          <Route component = {Aboutus} path = '/about-us' exact />
          <Route component = {Contactus} path = '/contact-us' exact />

          <Route component = {AboutHoc} path = '/about-hoc' exact />
          <Route component = {FunctionalComponent} path = '/finctional-components' exact />

          {/* <Route element={<HomePage/>} path ='/' />
          <Route element = {<Aboutus/>} path = '/about-us'/>
          <Route element = {<Contactus/>} path = '/contact-us'/> */}

        </Switch>
        {/* {!this.state.flag? <Home/> : ""}<button onClick={()=>{
          this.setState({
            flag:  !this.state.flag,
            status:this.state.flag? "Click above to hide" : "Click above to see"
          })
          
        }}> {this.state.flag} Click me</button><h1>{this.state.status}</h1> */}

      </div>

    )
  };
}

export default App;
