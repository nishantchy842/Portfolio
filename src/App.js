// import logo from './logo.svg';
import './App.css';
import { useState } from "react";

const App=()=> {
const arr = ['red','black','green','yellow','pink']
const name = 'Hari'
const [a,setA]= useState(10)
 const changeNumber = (action) => {
action === 'inc' ? setA(a+1): setA(a-1)
}
  return (
    <div className="App">
    <h1>{arr[0]} {arr[2]} {name}</h1>
    <h2 style={{backgroundColor: 'red'}}>{arr} </h2>
          <p>
          WelCome to First React APP
        </p>
        <button >ClickMe</button>
        Name:<input placeholder='enter a number' />
        {arr.map((item)=>{
          return <ul style={{color: item}}><li>{item}</li></ul>
        })}
      <div className='square'>Hello</div>
      <>
      <button onClick={()=>changeNumber('inc')}>+</button>
      {a}
      <button onClick={()=>changeNumber('dec')}>-</button>
      </>
      <div style={{backgroundColor:'red', padding:a+'px'}}></div>
    </div> 
  );
}

export default App;
