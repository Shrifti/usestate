import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(1)
    function incr(){
        setCount(
            function(oldCount){
                return oldCount + 1
            }
        )
    }
    function Res(){
        setCount(
            function(oldCount){
                return 0
            }
        )
    }
    return (
      <div>
        <h1>Counter</h1>
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add 1 to Counter</button>
        <button onClick={Res}>Reset</button>
      </div>
    );
  }
  
  export default Counter;
  