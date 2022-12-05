import { useState,useEffect } from "react";
function Counter(props) {
    const {delta,getRset,needToReset,maxvalue} = props
    const {maxnum,Setmaxvalue} = props 
    const [count, setCount] = useState(0)
    
    useEffect(()=>{
        if(needToReset){
            setCount(0)
            getRset(false)
        }
    },[needToReset,getRset])

    useEffect(()=>{
        if(maxvalue<count)
            Setmaxvalue(count)
    
    },[maxvalue,Setmaxvalue,count])
    function incr(){
        setCount(
            function(oldCount){
                if (oldCount + delta > maxnum)
                    return 0
                    return oldCount + delta
                    
            }
        )
    }
    function Res(){
        getRset(true)
        //setCount(0)
    }
   
    return (
      <div>
        <h1>Counter</h1>
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add {delta} to Counter</button>
        <button onClick={Res}>Reset</button>
      </div>
    );
  }
  
  export default Counter;
  