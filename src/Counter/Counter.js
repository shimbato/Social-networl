import { useEffect, useRef, useState } from "react";
import { set } from "react-hook-form";

export function Counter() {
  const [counter, setCounter] = useState(0);
  const interval = useRef();

  const startCounter = () => {
    setCounter(counter + 1);
    clearInterval(interval.current)
    interval.current = setInterval(() => {
      setCounter((currentCounter) => currentCounter + 1);
    }, 1000);
    
  };

  const stopCounter = () => {
    clearInterval(interval.current);
  };

  useEffect(()=>()=>{
      clearInterval(interval.current);
  },[]);

  return (
    <div>
      <button onClick={startCounter}>start</button>
      <button onClick={stopCounter}>stop</button>
      <div>{counter}</div>
    </div>
  );
}
