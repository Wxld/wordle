import React, { useState, useEffect } from 'react'

import data from '../data/db.json'

const Keyboard = ({usedKeys, dark}) => {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = data.letters;

      setLetters(res);
    }
    
    fetchData();
  }, [])
  

  return (
    <div className={'keypad ' + (dark ? "dark" : "")}>
        {letters && letters.map((i) => {
          const color = usedKeys[i.key];
          
          return (
            <div key={i.key} 
            className={"keypad-div " + (i.key === 'a' ? "left-space " : " ") + (dark ? "dark " : " ") + color}
            >
            {i.key}
            </div>
          )
        })}
    </div>
  )
}

export default Keyboard