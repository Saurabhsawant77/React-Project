import { useState } from 'react';
import './App.css'

function App() {

  let [count, setCounter] = useState(15) 
  //let count = 15;

  const add = () => {
    
    // count = count+1;
    setCounter(count+1);// asa kela tri ekdach update honar ani use state mhule hota hee (saglyach ekach batch bnnar)
    setCounter(count+1);// asa kela tri ekdach update honar ani use state mhule hota hee (saglyach ekach batch bnnar)
    setCounter(count+1);// asa kela tri ekdach update honar ani use state mhule hota hee (saglyach ekach batch bnnar)
    setCounter(count+1);// asa kela tri ekdach update honar ani use state mhule hota hee (saglyach ekach batch bnnar)
    setCounter(count+1);// asa kela tri ekdach update honar ani use state mhule hota hee (saglyach ekach batch bnnar)
    setCounter(prevCoyunter => prevCoyunter+1);
    setCounter(prevCoyunter => prevCoyunter+1);
    setCounter(prevCoyunter => prevCoyunter+1);
    setCounter(prevCoyunter => prevCoyunter+1); //setCounter() return callback value 

    console.log("value added",  Math.round(Math.random()*10) +" " + count);
  }

  const sub = () => {
    if(count<=0){
      count=0;
      setCounter(count);
    }
    else{
      count = count-1;
      setCounter(count);
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

    <h2>git add .  </h2>
    <h2>git commit -m "counter Project"</h2>
    <h2>git push origin main</h2>
    <h2>git status</h2>

<h1>Create Vite Project</h1>
    <h3>npm create vite@latest</h3>
    <h3>cd project_name</h3>
    <h3>npm install -| to install node modules</h3>
    <h2>To Use tailwind in react</h2>
    <h3>npm install -D tailwindcss postcss autoprefixer</h3>
    <h3>npx tailwindcss init -p</h3>
    <h3>tailwind.config.js</h3>
    <p>  content: [
    "./index.html",
    "./src/**/*.js,ts,jsx,tsx",
  ]
    </p>
    <h3>index.css</h3>
<p>
@tailwind base;
@tailwind components;
@tailwind utilities;</p>

    </>
  )
}

export default App
