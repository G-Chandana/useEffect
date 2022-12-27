import React,{useState} from 'react';
import Counter from './components/Counter';

export default function App(){
  const [show, setShow] = useState(true);

  return(
    <>
     <button onClick={() => {setShow(!show)}}>{show? 'Hide':'Show'}</button>
     {show && <Counter/>}

    </>
  )
}