import "./Counter.css"
import { useEffect,useState } from "react";
const Counter = () =>{
    const [count,setCount] = useState(0);
    const [message, setMessage] = useState(""); 
    useEffect(()=>{
        setMessage(`Updated Count ${count}`);
    },[count])
    function increment(){
        console.log("Count = ", count+1);
        setCount(count+2)
    }
    function decrement(){
        console.log("Count = ", count-1);
        setCount(count-2)
    }
  return (
    <div>
      <h1>My Counter App</h1>
      <div className="counter">
        <button className="btn" onClick={decrement}>-</button>
        <div className="id1">{count}</div>
        <button className="btn" onClick={increment}>+</button>
      </div>
      <h2>{message}</h2>
    </div>
  )
}

export default Counter
