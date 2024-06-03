import {withRouter} from "react-router";

import React from 'react';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    // const {history} = (props)
        handleClick = ()=>{

            // history.push('/contact-us');
        }
        render(){
            return <div onClick={this.handleClick}>In Home Page</div>; 
        }
}
// const HomePage=()=>{
//     const {history} = (props)
//     const handleClick = ()=>{
//         history.push('/contact-us');
//     }
//     return <div onClick={handleClick}>In Home Page</div>; 
//     }
    
    export default withRouter(HomePage);