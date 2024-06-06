import React from "react";

const FunctionalComponent=()=>{
    const [value,setValue] = React.useState(0);
    React.useEffect(()=>{
        console.log("useEffect")
    })

    return (
        <>
        <p>
            {value} 
        </p>
        <div>

       
            <button onClick={()=>{
                setValue(value+1)
            }}>Increment</button>
             </div>
        </>
    ); 
}

export default FunctionalComponent