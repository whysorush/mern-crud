import React from "react";

const FunctionalComponent=()=>{
    const [response,setResponse] = React.useState({});
    const [value,setValue] = React.useState(0);

    const ref = React.useRef(null); 
    React.useLayoutEffect(()=>{

    })
    React.useEffect(()=>{
        try{
        fetch("https://jsonplaceholder.typicode.com/photos").then(data=>{
            return data.json();
        }).then(results=>{
            setResponse(...results);
        })
    }catch{
        console.log("useEffect")
    }
    },[])
const handleTimer = ()=>{
ref.current= setInterval(()=>{
    setValue((value)=>value+1)
},1000)
}
const clearTimer   =()=>{
     clearInterval(ref.current)
}
    return (
        <>
        <h1>{value}</h1>
            {JSON.stringify(response)} 
        <div>

       {/* <input type="text" ref={focus} onChange={(e)=>{ */}
        
            {/* setValue(e.target.value)
       }}></input> */}
            <button onClick={handleTimer}

                // if(value.length === 0){
                //     focus.current.focus();
                //     return; 
                // }
                // setValue(value+1)
            // }}
            >Click me</button>
            <button onClick={clearTimer}>clearTimer</button>
             </div>
        </>
    ); 
}

export default FunctionalComponent