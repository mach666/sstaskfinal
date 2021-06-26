import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App(props) {
  const [counter,setCounter]=useState(null)
  
  const clickHandler=()=>{
    setCounter(counter+1)
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("You Clicked at"+props.date.toLocaleTimeString()));
    ul.appendChild(li);
  }
  
  return (
    <div>
      <div className="logo"><img src="https://sleeksky.com/assets/img/SleekSky_logo_lightbg.png" height="50px" width="100px"></img></div>
  <div className="header"> <h3> Current Time is: {props.date.toLocaleTimeString()}</h3></div>
 

  <div className='sidebar'><button onClick={clickHandler}>CLICK HERE</button></div>
  <div className="body"><ul id="list"></ul></div>
  <div className="footer"> {counter===null?null:  <div>You clicked {counter} times</div>}</div>
    </div>
  );
}

export default App;
