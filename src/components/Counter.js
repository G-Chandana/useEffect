import React,{useEffect, useState} from 'react';

export default function Counter(){
    const [count, setCount]= useState(0);
    useEffect(()=>{
        console.log("Mounting");
    },[])
    useEffect(()=>{
        console.log("Updating");
    },[count])
    useEffect(()=>{
        return () =>{console.log("Unmounting")} 
    },[])

    return(
        <>
        <h2>my count:{count}</h2>
        <button onClick = {() => {setCount(count + 1)}}>Increment(+)</button>
        <button onClick = {() => {setCount(count - 1)}}>Decrement(-)</button>

        </>
    )
}