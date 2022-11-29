import { useState } from "react";
function Counter(props) {
    const {delta} = props
    const {maxnum} = props 
    const [count, setCount] = useState(1)
     
    function incr(){
        setCount(
            function(oldCount){
                if (oldCount + delta > maxnum) {
                    return 0
                } else {
                    return oldCount + delta
                }
                    
            }
        )
    }
    function Res(){
        setCount(0)
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
  