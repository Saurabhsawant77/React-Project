import { useState } from 'react';
import './App.css'

function App() {

  let [count, setCounter] = useState(15) 
  //let count = 15;

  const add = () => {
    
    count = count+1;
    setCounter(count);
    console.log("value added",  Math.round(Math.random()*10) +" " + count);
  }

  const sub = () => {
    if(count<0){
      count=0;
      setCounter(count);
    }
    else{
      
      setCounter(count);
      count = count-1;
      console.log("value subtracted", Math.random()*10 +" " + count);
    }
   
  }
  
  
  

  return (
    <>
    <h1>Saurabh Bhava</h1>
    <h2>Counter value: {count}</h2>
    <button onClick={add}>Add value {count}</button> <br />
    <button onClick={sub}>Remove Value {count}</button>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ea vel omnis atque quae ad, ipsam corporis voluptatibus veniam impedit, sint culpa. Nulla iste, suscipit sequi et totam eligendi modi! {count}</p>
    </>
  )
}

export default App