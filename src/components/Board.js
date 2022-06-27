import React, { useEffect } from 'react'

import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keypad from './Keypad';
import Modal from './Modal';

const Board = ({targetWord, dark}) => {
    const {historyPro, handleKeyUp, currentGuess, correct, turn, usedKeys} = useWordle(targetWord);
    useEffect(() => {
        if(turn <= 5 && !correct)
        {
            window.addEventListener('keyup', handleKeyUp);

            return () => window.removeEventListener('keyup', handleKeyUp);
        }
    }, [handleKeyUp, turn, correct]);
    return (
        <div className={dark ? "dark" : ""}>
            <Grid historyPro={historyPro} currentGuess={currentGuess} turn={turn} />
            <Keypad usedKeys={usedKeys} dark={dark} />
            {(correct || turn === 6) && <Modal correct={correct} targetWord={targetWord} turn={turn} />}
        </div>
    );
}

export default Board