import React from 'react'
import Row from './Row'

const Grid = ({historyPro, currentGuess, turn}) => {
  return (
    <div>
        {
            [...Array(6)].map((x, i) => (
                <Row index={i} turn={turn} currentGuess={currentGuess} historyPro={historyPro} key={i} />
            ))
        }
    </div>
  )
}

export default Grid