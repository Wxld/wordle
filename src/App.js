import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

import Board from "./components/Board";
import Navbar from "./components/Navbar";
import HowToPlay from './components/HowToPlay'

import data from './data/db.json'
import './index.css'

function App() {
  const [targetWord, setTargetWord] = useState("");
  const [dark, setDark] = useState(true);
  const [popUp, setPopUp] = useState(false);
  
  useEffect(() => {
    const res = data.targetWords;   

    let index = Math.floor(Math.random()*res.length);
    setTargetWord(res[index]);    
  }, []);

  return (
    <div className={"background " + (dark ? "dark" : "")}>
      {popUp && <HowToPlay setPopUp={setPopUp} dark={dark} />}
      <Toaster />
      <Navbar dark={dark} setDark={setDark} setPopUp={setPopUp} />
      {targetWord && <Board targetWord={targetWord} dark={dark} />}
    </div>
  );
}

export default App;
