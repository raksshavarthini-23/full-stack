import React, { useState } from 'react'

const Counter = () => {
    const [count,setcount]=useState(0); 
    const handleincrement = ()=>{
        setcount(count+1);
    }
    const handledecrement = ()=>{}
    const handleReset = ()=>{};

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setcount(count+1)}>increment</button>
            <button onClick={()=>setcount(0)}>reset</button>
            <button onClick={()=>setcount(count-1)}>decrement</button> 
        </div>
    )
}

export default Counter

