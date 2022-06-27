import React from 'react'

const Modal = ({correct, targetWord, turn}) => {
    const message = [
        "Godly Guess", 
        "True Genius", 
        "Beauty with Brains huh", 
        "Nice One",
        "That was close",
        "Nail biting performance"
    ]
        return (
            <div className='modal'>
                <div>
                    {correct ? (
                        <>
                            <h4>Woohoo! You guessed the word correctly!</h4>
                            <p>You took {turn <= 3 ? "only " : ""} {turn} chances to find the word. {message[turn-1]}!
                            </p>
                        </>
                        
                    ) : (
                        <>
                            <h4>You Failed to guess the correct word!</h4>
                            <h4>
                                The solution is : 
                                <b>{targetWord}</b>
                            </h4>
                        </>
                    )}
                    <button className='bn30' onClick={() => window.location.reload()}>Start New Game</button>
                </div>
            </div>
        )
  
}

export default Modal