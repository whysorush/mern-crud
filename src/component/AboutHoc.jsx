import React from "react";

export const Increment = () => {
    const [counter, setCounter] = React.useState(0);
    const handleClick = () => {
        setCounter(counter + 1);
    }
    return (
        <>
            <button onClick={handleClick}>Increment</button>
        </>
    )
};

export const IncrementOnHover = (props) => {
    const {handleClick,counter}  = props;
    return (
        <div>
        Counter is {counter}
            <button onMouseOver={handleClick}>Hover</button>
        </div>
    );
};

const AboutHoc=(WrappedComponent)=> {
    // constructor(props){
    //     super(props);
    // }
    return class extends React.Component{
        constructor(props){
            super(props);
            this.state= {
                counter : 0
            }
        }
        handleClick=()=>{
            const {counter} =this.state;
            this.setState({counter:counter+1})
        }
        render(){
            const {counter} =this.state;
            return(
                <WrappedComponent handleClick={this.handleClick} counter={counter}/>
            );
        }
    };
}; 

const EnhancedComponent  = AboutHoc(IncrementOnHover);
export default EnhancedComponent;