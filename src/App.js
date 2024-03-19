//App.js
import React from "react";
import { Counter } from "./Counter.js";

export default function App(props) {
  return(
    <>
      <h1>Hi {props.text}</h1>
      <Counter />
    </>
)}