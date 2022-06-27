import React from 'react'

const Row = ({index, turn, currentGuess, historyPro}) => {
  return (
    <div className="row">
    {
      [...Array(5)].map((x, i) => (
        <div 
        key={i} 
        className={
          index === turn ? 
            currentGuess[i] ? 
              "filled" 
              : 
              "" 
            : 
            historyPro[index] ? 
              historyPro[index][i].color 
              : 
              ""
          }
        >
          {
            index===turn ? 
              currentGuess[i] 
            : 
              historyPro[index] && historyPro[index][i].key
          }
        </div>
      ))
    }
    </div>
  )
}

export default Row