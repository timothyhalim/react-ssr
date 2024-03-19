// Counter.js
import React from "react";
import {useState} from "react";

export const Counter = () => {
const [ count, setCount ] = useState(0);
return(
    <button onClick={()=> setCount(count+1)}> You clicked the counter {count} times </button>
)}