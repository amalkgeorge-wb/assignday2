import React, { useState } from "react"

function Button(){
const [counter,setCounter] = useState(0)

    return(
        <div>
        <p className="count">counter value = {counter}</p>
        <button className="btn" onClick={()=>(counter<25 ? setCounter(counter+1): "")}>+</button>
        <button className="btn"  onClick={()=>(counter>0 ? setCounter(counter-1) : "")}>-</button>
        <button className="btn" onClick={()=>{setCounter(0)}}>reset</button>
        </div>
    )
}
export default Button