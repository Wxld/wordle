import React, { useState, useEffect } from "react";

import Board from "./components/Board";
import Navbar from "./components/Navbar";
import './index.css'

function App() {
  const [targetWord, setTargetWord] = useState("");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const fetchTarget = async () => {
      const data = await fetch("http://localhost:5000/targetWords");
      const res = await data.json();

      let index = Math.floor(Math.random()*res.length);
      setTargetWord(res[index]);
    }
    fetchTarget();
  }, []);

  return (
    <div className={"background " + (dark ? "dark" : "")}>
      <Navbar dark={dark} setDark={setDark} />
      {targetWord && <Board targetWord={targetWord} dark={dark} />}
    </div>
  );
}

export default App;
