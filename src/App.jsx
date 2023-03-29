import React,{useState} from 'react'
import EmojiPicker from 'emoji-picker-react';
import './App.css'

function App() {
  <EmojiPicker/>
  const purple="#8e44ad";
  const [bg,setBg] = useState(purple);
  const [name, setName] = useState("ClickMe");
  const bgChange=()=>{
    // console.log("clicked");
    let newBg = "#34495e";
    setBg(newBg);
    setName("Oops " );
    }
  const bgChanger=()=>{
    setBg("#5f67fb");
    setName("Oops x 2");
  }

  const backgroundChange=()=>{
    setBg("#5f1212");
  }

  const backgroundChanger=()=>{
    setBg("#023d11");
  }

  return (
    <div className='App' style={{ backgroundColor: bg}}>  
    {/*  In line CSS will be considered as object so we will use double curly braces*/}
      
      <button onClick={bgChange} onDoubleClick={bgChanger} onMouseEnter={backgroundChange} onMouseLeave={backgroundChanger}>{name}</button>
    </div>
  )
}

export default App
