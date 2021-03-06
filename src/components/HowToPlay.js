import React from 'react'

const HowToPlay = ({setPopUp, dark}) => {
  return (
    <div className={(dark ? "" : "dark ") + "card"}>
        <h2 className='htp-heading'>How To Play?</h2>
        <div className='instructions'>
            <ol>
                <li>You need to find a random valid 5 letter word generated by the algorithm.</li>
                <li>You will get only 6 chances.</li>
                <li>A letter turns green means that the position of the letter matches the generated word.</li>
                <li>A letter turns yellow signifies that letter is present in the generated word but on a different position.</li>
                <li>Hope you will enjoy and lose😜.</li>
            </ol>
        </div>
        <button className='bn632-hover bn20' onClick={() => setPopUp(prev => !prev)}>Close</button>
    </div>
  )
}

export default HowToPlay