import React, { useState, useEffect } from 'react'

import data from '../data/db.json'

const Keyboard = ({usedKeys, dark}) => {
  const [letters, setLetters] = useState(null);
  
  useEffect(() => {
    const res = data.letters;

    setLetters(res);
  }, [])
  

  return (
    <div className={'keypad ' + (dark ? "dark" : "")}>
        {letters && letters.map((i) => {
          const color = usedKeys[i.key];
          
          return (
            <div key = {i.key} 
            className = {((i.key === 'a' ? "left-space " : "") + (color ? color : dark ? " dark" : " white"))}
            >
            {i.key}
            </div>
          )
        })}
    </div>
  )
}

export default Keyboard