import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";

import Board from "./components/Board";
import Navbar from "./components/Navbar";
import './index.css'
import data from './data/db.json'

function App() {
  const [targetWord, setTargetWord] = useState("");
  const [dark, setDark] = useState(true);
  
  useEffect(() => {
    const fetchTarget = async () => {
      const res = data.targetWords;   

      let index = Math.floor(Math.random()*res.length);
      setTargetWord(res[index]);
    }
    fetchTarget();
  }, []);

  return (
    <div className={"background " + (dark ? "dark" : "")}>
      <Toaster />
      <Navbar dark={dark} setDark={setDark} />
      {targetWord && <Board targetWord={targetWord} dark={dark} />}
    </div>
  );
}

export default App;
