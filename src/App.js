import './App.css'
import Counter from './Counter';
import { useState } from 'react';
function App() {

  const [delta, setDelta] = useState(1)
  const [Maxnum, setMax] = useState(10)
  const [reset,setReset] = useState(false)
  const [Maxvalue,setMaxv] = useState(0)

  function handleDelta(e){
  console.log(e);  
  setDelta(Number(e.target.value))
}
function handleMaxnum(maxnumber){
  setMax(Number(maxnumber.target.value))
}
function getReset(data){
  console.log(data)
  setReset(data)
}
function setMaxvalue(count){
  return setMaxv(count) 
}
  return (
    <div className="App">
      Usestate
      <input type = "number" value ={delta} onChange = {handleDelta}/>
      <input type = "number" value ={Maxnum} onChange = {handleMaxnum}/>
      <p>maximum value {Maxvalue} </p>
      <Counter delta = {delta} maxnum = {Maxnum} getRset = {getReset} needToReset = {reset} Setmaxvalue = {setMaxvalue} maxvalue = {Maxvalue}/>
      <Counter delta = {delta} maxnum ={Maxnum} getRset = {getReset} needToReset = {reset} Setmaxvalue = {setMaxvalue} maxvalue = {Maxvalue}/>
    </div>
  );
}

export default App;
