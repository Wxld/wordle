import React, { useState, useEffect } from 'react'

const Keyboard = ({usedKeys, dark}) => {
  const [letters, setLetters] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:5000/letters');
      const data = await res.json();

      setLetters(data);
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