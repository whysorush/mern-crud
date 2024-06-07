import DemoCallback from "./DemoCallback";
import React from "react";

const NewHooks = () =>{
    const [count, setCount] = React.useState(0);
    const handleClick = () =>{
        setCount(count + 1); 
    };
    const handleChange = React.useCallback(()=>{},[])
    return (<>
        <DemoCallback  handleChange={handleChange}/>
        <button onClick={handleClick}>handle Click</button>
    </>)
}
export default NewHooks;