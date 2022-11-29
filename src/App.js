import './App.css'
import Counter from './Counter';
import { useState } from 'react';
function App() {

  const [delta, setDelta] = useState(1)
  const [Maxnum, setMax] = useState(1)
  function handleDelta(e){
  console.log(e);  
  setDelta(Number(e.target.value))
}
function handleMaxnum(maxnumber){
  setMax(Number(maxnumber.target.value))
}
  return (
    <div className="App">
      Usestate
      <input type = "number" value ={delta} onChange = {handleDelta}/>
      <input type = "number" value ={Maxnum} onChange = {handleMaxnum}/>
      <Counter delta = {delta} maxnum = {Maxnum}/>
      <Counter delta = {delta} maxnum ={Maxnum}/>
    </div>
  );
}

export default App;
